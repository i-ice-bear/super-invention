import React, { useEffect } from "react";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link as NextLink,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
  DropdownItem,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { HiMoon, HiOutlineCog6Tooth, HiMiniSun, HiUserCircle, HiUserMinus } from "react-icons/hi2";
import  AcmeLogo  from "./icons/AcmeLogo";
import { motion } from "framer-motion";

const Settings = () => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Dropdown backdrop="blur">
        <DropdownTrigger>
          <Button isIconOnly variant="flat" className="w-auto">
            <motion.div
              initial={{ scale: 1 }}
              animate={{
                rotate: [0, 360],
                scale: 1
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                ease: "linear",
                duration: 2,
                repeat: Infinity,
              }}
            >
              <HiOutlineCog6Tooth className="text-lg" />
            </motion.div>
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          variant="faded"
          aria-label="Static Actions"
          disabledKeys={theme === "dark" ? ["dark"] : ["light"]}
        >
          <DropdownItem key="dark" onClick={() => setTheme("dark")}>
            <span className="flex text-center">
              <HiMoon className="mr-2  text-lg" /> Dark mode
            </span>
          </DropdownItem>
          <DropdownItem key="light" onClick={() => setTheme("light")}>
            <span className="flex text-center">
              <HiMiniSun className="mr-2 text-lg" /> Light Mode
            </span>
          </DropdownItem>
          <DropdownItem key="edit">
             <span className="flex text-center">
              <HiUserCircle className="mr-2 text-lg" /> Login
            </span>
          </DropdownItem>
          <DropdownItem key="delete" className="text-danger" color="danger">
          <span className="flex text-center">
              <HiUserMinus className="mr-2 text-lg" /> Logout
            </span>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

const navigationItems = [
  { name: "Home", href: "/", color: "foreground" },
  { name: "Blogs", href: "/page/blogs", color: "foreground" },
  { name: "My Projects", href: "/page/projects", color: "foreground" },
  { name: "Resume", href: "/page/resume", color: "foreground" },
  { name: "Join me up!", href: "/page/join", color: "foreground" },
];

const NavbarComponent = () => {
  const routerUse = useRouter();
  return (
    <Navbar maxWidth="lg">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit uppercase">
            Andy&#39;s portfolio
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit uppercase">
            Andy&#39;s portfolio
          </p>
        </NavbarBrand>
        {navigationItems.map((item) => {
          return (
            <>
              <NavbarItem key={item.name}>
                <Link
                  href={item.href}
                  className={`${
                    routerUse.pathname === item.href
                      ? "text-blue-500 transition-all duration-400"
                      : "default-styling"
                  }`}
                >
                  {item.name}
                </Link>
              </NavbarItem>
            </>
          );
        })}
      </NavbarContent>

      <NavbarContent justify="end">
        <Settings />
        {/* <NavbarItem className="hidden lg:flex">
        </NavbarItem> */}
        <NavbarItem>
          <Button as={Link} color="primary" href="#">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {navigationItems.map((item) => {
          return (
            <>
              <NavbarItem key={item.name}>
                <Link
                  href={item.href}
                  className={`${
                    routerUse.pathname === item.href
                      ? "text-blue-500 transition-all duration-400"
                      : "default-styling"
                  }`}
                >
                  {item.name}
                </Link>
              </NavbarItem>
            </>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarComponent;
