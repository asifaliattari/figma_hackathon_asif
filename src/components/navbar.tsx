import { Search, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { LuUserRound } from 'react-icons/lu';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { GiHamburgerMenu } from 'react-icons/gi';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/blog', label: 'Blog' },
  { href: '/chef', label: 'Pages' },
  { href: '/about', label: 'About' },
  { href: '/shop', label: 'Shop' },
  { href: '/contact', label: 'Contact' }, // Fixed Contact Link
];

export default function Navbar() {
  return (
    <div className="w-full bg-black h-[90px]">
      <nav className="flex items-center justify-between px-6 md:px-12 h-full text-white">
        {/* Logo */}
        <div className="flex">
          <h1 className="font-bold text-[24px] text-white">Food</h1>
          <span className="font-bold text-[24px] text-[#FF9F0D]">tuck</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[#FF9F0D]">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Search aria-label="Search" />
          <Link href="/signup">
  <span className="cursor-pointer">
    <LuUserRound className="h-[24px] w-[24px]" aria-label="User Profile" />
  </span>
</Link>

          <ShoppingBag className="text-white" aria-label="Shopping Cart" />
        </div>

        {/* Mobile Navigation (Hamburger Menu) */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <GiHamburgerMenu size={24} className="text-white" aria-label="Open Menu" />
          </SheetTrigger>
          <SheetContent className="p-6 bg-black text-white">
            <nav className="space-y-6">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block hover:text-[#FF9F0D]">
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}
