import React from "react";
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
} from "@nextui-org/react";
import { useRouter } from "next/router";

export const AcmeLogo = () => (
  <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

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
    <Navbar>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">Andy&#39;s portfolio</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit uppercase">Andy&#39;s portfolio</p>
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
        <NavbarItem className="hidden lg:flex">
          <Link href="/">Login</Link>
        </NavbarItem>
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
