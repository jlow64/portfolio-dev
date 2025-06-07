import {
  QueryClient,
  defaultShouldDehydrateQuery,
  isServer,
} from "@tanstack/react-query";
import { XiorError } from "xior";

type QueryError = Partial<{
  status: number;
  message: string;
  original?: XiorError & unknown;
}>;

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        retry: (count, error: QueryError) => {
          // If it ssr, don't retry. If it is client, retry 3 times.
          const attempts = isServer ? 0 : 3;

          if (error?.status) {
            if (error.status >= 400 && error.status < 500) return false;
          }

          return attempts < count;
        },
        // Disable redundant client side fetching
        refetchOnMount: false,
        refetchOnWindowFocus: false,
      },
      dehydrate: {
        // include pending queries in dehydration
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === "pending",
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

export function getQueryClient() {
  if (isServer) {
    // Server: always make a new query client
    return makeQueryClient();
  } else {
    // Browser: make a new query client if we don't already have one
    // This is very important, so we don't re-make a new client if React
    // suspends during the initial render. This may not be needed if we
    // have a suspense boundary BELOW the creation of the query client
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}
