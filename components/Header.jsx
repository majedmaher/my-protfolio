import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="py-8 lg:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
            <Link href='/'>
                <h1 className="text-4xl font-semibold">
                    Majed<span className="text-accent">.</span>
                </h1>
            </Link>

            {/* desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              <Nav />
              <Link href='/contact'>
                <Button>Hire me</Button>
              </Link>
            </div>

            {/* mobile nav */}
            <div className="lg:hidden">
              <MobileNav />
            </div>
        </div>
    </header>
  )
}
