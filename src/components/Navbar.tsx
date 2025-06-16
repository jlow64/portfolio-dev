"use client";

import React, { useState } from "react";
import { cn } from "@/lib/util";
import { MenuIcon } from "./icons/MenuIcon";
// import { useRouter } from "next/navigation";

const classes = {
  container: "@container/nav ",
  wrapper:
    "fixed top-0 z-[1000] flex flex-col @md/nav:flex-row justify-between items-center w-full min-h-[100px] px-6 gap-4 bg-background/20",
  menu: {
    wrapper:
      "h-[100px] w-full @md/nav:w-fit flex gap-4 items-center justify-between",
    logo: "font-forum text-h6 @md/nav:text-h5 cursor-pointer",
    icon: "flex @md/nav:hidden stroke-foreground transition duration-200 ease-in-out active:-translate-x-1 active:scale-90 active:stroke-foreground/80",
  },
  items: {
    wrapper:
      "hidden @md/nav:flex @md/nav:w-full gap-4 justify-center font-forum text-p @md:text-[16px] text-shadow-lg",
    item: "size-full max-w-[300px] flex-1 flex justify-center transition-all duration-800 ease-in-out cursor-pointer",
  },
};

const navbarItems = [
  { label: "Home", url: "/" },
  { label: "Projects", url: "/" },
  { label: "Contact", url: "/" },
];

const Navbar = () => {
  // const router = useRouter();
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const mobileMenu = isToggled && "flex flex-col @md/nav:flex-row";

  return (
    <nav className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.menu.wrapper}>
          <div className={classes.menu.logo}>J.L</div>
          <MenuIcon
            className={classes.menu.icon}
            onClick={() => setIsToggled(!isToggled)}
          />
        </div>
        <ul className={cn(classes.items.wrapper, mobileMenu)}>
          {navbarItems.map((item) => (
            <li
              key={item.label}
              className={classes.items.item}
              // onClick={() => router.push(item.url)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
