import React from "react";
import { cn } from "@/lib/util";
import { type ClassValue } from "clsx";

interface MenuIconProps {
  className?: ClassValue;
  onClick?: () => void;
}

export const MenuIcon = ({ className, onClick }: MenuIconProps) => {
  return (
    <svg
      className={cn("stroke-inherit stroke-3 fill-none size-9", className)}
      onClick={onClick}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 64 64'
    >
      <line x1='7.68' y1='32' x2='56.32' y2='32' />
      <line x1='7.68' y1='15.97' x2='56.32' y2='15.97' />
      <line x1='7.68' y1='48.03' x2='56.32' y2='48.03' />
    </svg>
  );
};
