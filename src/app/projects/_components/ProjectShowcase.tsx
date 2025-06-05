"use client";

import React from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { projectOptions } from "@/services/project";

export const ProjectShowcase = () => {
  const { data, error } = useSuspenseQuery(projectOptions);

  console.log(data);
  if (error) {
    return <div>Implement Backend soon</div>;
  }

  return (
    <div>
      <h1>Project 1</h1>
    </div>
  );
};
