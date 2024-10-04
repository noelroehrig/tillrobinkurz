"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "./ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/navigation-menu"

const items = [
  { title: "Selected", href: "/" },
  { title: "Vita", href: "/vita" },
  { title: "Contact", href: "/contact" },
  { title: "Impressum", href: "/imprint" },
]

const NavMenu = function () {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="flex flex-col space-y-4">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-lg font-medium hover:underline"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default NavMenu