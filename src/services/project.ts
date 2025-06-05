import { fetcher } from "@/lib/fetcher";
import { queryOptions } from "@tanstack/react-query";

type Project = {
  id: number;
  title: string;
  description?: string;
  techStack: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
  createdAt: Date;
};

export const projectOptions = queryOptions({
  queryKey: ["project"],
  queryFn: async () => await fetcher<Project>("/api/project"),
});
