import { projectOptions } from "@/lib/api";
import { getQueryClient } from "../get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { ProjectShowcase } from "./ProjectsShowcase";

export const ProjectsLoader = async () => {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(projectOptions);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProjectShowcase />
    </HydrationBoundary>
  );
};
