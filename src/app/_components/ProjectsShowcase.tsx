"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { projectOptions } from "@/lib/api";

export const ProjectShowcase = () => {
  const { data, error } = useQuery(projectOptions);

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div>
      {data?.map((project) => (
        <h1 key={project.id}>{project.title}</h1>
      ))}
    </div>
  );
};
