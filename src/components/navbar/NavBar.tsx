import Link from "next/link";
import { HomeIcon } from "@primer/octicons-react";
import { ActiveLink } from "@/components/index";

export function NavBar() {

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Pricing", href: "/pricing" },
  ]

  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href={"/"} className="flex items-center">
        <HomeIcon className="mr-2" />
        <span>Home</span>
      </Link>
      <div className="flex flex-1"></div>

      {navItems.map((item) => (
        <ActiveLink key={item.name}  {...item} />
      ))}
    </nav>
  )
}
