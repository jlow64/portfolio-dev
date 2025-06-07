import { queryOptions } from "@tanstack/react-query";
import { fetcher } from "./fetcher";

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
  queryFn: () => fetcher<Project[]>("/api/project"),
});
