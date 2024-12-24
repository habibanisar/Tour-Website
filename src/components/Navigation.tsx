"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { Container } from "./Container";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export function Navigation() {
  return (
    <Container>
      <nav className="flex justify-between items-center py-6">
        <div className="font-bold text-xl -skew-x-6">Next-Tour 🚊</div>
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <SheetDescription className="flex flex-col font-bold text-xl text-gray-800">
              {navItems.map((nav) => (
                <Link
                  key={nav.title}
                  href={nav.href}
                  passHref
                  onClick={() => {
                    // Close the Sheet after clicking the link
                    const sheet = document.querySelector(
                      "[data-state='open']"
                    ) as HTMLElement;
                    if (sheet) sheet.click();
                  }}
                  className="mb-4 hover:text-pink-600 hover:underline-offset-4"
                >
                  {nav.title}
                </Link>
              ))}
            </SheetDescription>
          </SheetContent>
        </Sheet>

        <ul className="hidden lg:flex gap-6">
          {navItems.map((nav) => (
            <li key={nav.title}>
              <Link
                href={nav.href}
                className="text-slate-800 font-bold text-xl hover:text-pink-600 hover:underline-offset-4"
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
}
