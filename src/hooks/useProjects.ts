import { fetcher } from "@/lib/fetcher";
import { useQuery } from "@tanstack/react-query";

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

export const useProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => await fetcher<Project>("/projects"),
  });
};
