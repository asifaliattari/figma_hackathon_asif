import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, Facebook, Twitter, Instagram, Youtube, PinIcon as Pinterest } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white pt-12 pb-2">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2 items-center mb-12">
          <div>
            <h2 className="text-[#FF9F0D] text-3xl md:text-4xl font-bold mb-2">
              Still You Need Our Support?
            </h2>
            <p className="text-gray-300">
              Don&apos;t wait, make a smart & logical quote here. It&apos;s pretty easy.
            </p>
          </div>
          <div className="flex gap-4">
            <Input
              type="email"
              placeholder="Enter Your Email"
              className="bg-[#FF9F0D] text-white placeholder:text-white/60"
              aria-label="Enter your email for subscription"
            />
            <Button className="bg-white text-[#FF9F0D] hover:bg-white/90">
              Subscribe Now
            </Button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid gap-8 lg:grid-cols-4 py-8 border-t border-[#FF9F0D]">
          {/* About Us */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">About Us</h3>
            <p className="text-gray-300 text-sm">
              Corporate clients and leisure travelers rely on us for dependable, safe, and professional chauffeured car service in major cities across the world.
            </p>
            <div className="bg-[#FF9F0D] p-4 rounded flex items-center gap-4">
              <Clock className="w-6 h-6" />
              <div>
                <h4 className="font-medium">Opening Hours</h4>
                <p className="text-sm">Mon - Sat (8:00 - 18:00)</p>
                <p className="text-sm">Sunday - Closed</p>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              {["About", "News", "Partners", "Team", "Menu", "Contacts"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-gray-300 hover:text-[#FF9F0D]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Help?</h3>
            <ul className="space-y-2">
              {["FAQ", "Terms & Conditions", "Reporting", "Documentation", "Support Policy", "Privacy"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/ /g, "-")}`} className="text-gray-300 hover:text-[#FF9F0D]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Recent Posts</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="bg-transparent border-none flex gap-4 items-center">
                  <Image
                    src={`/images/footerimg ${i}.png?w=60&h=60&fit=crop${i}`}
                    alt={`Post ${i} thumbnail`}
                    width={60}
                    height={60}
                    className="w-15 h-15 rounded object-cover"
                  />
                  <div>
                    <p className="text-gray-400 text-sm">20 Feb 2022</p>
                    <Link href="#" className="hover:text-[#FF9F0D]">
                      Keep Your Business
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-4 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            Copyright © 2022 by Ayeman. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Youtube, Pinterest].map((Icon, i) => (
              <Link
                key={i}
                href="#"
                aria-label={`Link to ${Icon.name}`}
                className="bg-white p-2 rounded hover:bg-[#FF9F0D] transition-colors"
              >
                <Icon className="w-4 h-4 text-gray-800" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
