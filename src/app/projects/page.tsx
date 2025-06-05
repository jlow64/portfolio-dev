import { projectOptions } from "@/services/project";
import { getQueryClient } from "../get-query-client";
import { ProjectShowcase } from "./_components/ProjectShowcase";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default function Home() {
  // Full projects pages will be placed here.

  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(projectOptions);

  return (
    <main className='h-full'>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ProjectShowcase />
      </HydrationBoundary>
    </main>
  );
}
