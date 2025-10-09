import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import "./navbar.css";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header
      className={`fixed w-full z-50 bg-white transition-all duration-300 overflow-hidden ${
        scrolled ? "shadow-lg" : "shadow-none"
      } z-[9999]`}
    >
      {/* LEFT LOGO */}
      <div className="logo px-15 z-99">
        <Link href="/">
          <Image
            src="/images/logo/dl_white_empty_primary - text.png"
            alt="Logo"
            width={170}
            height={100}
            className="scale-135"
          />
        </Link>
      </div>

      {/* CENTER LOGO */}
      <div className="logo z-1">
        <Link href="/">
          <Image
            src="/images/logo/logo-primary.png"
            alt="Logo"
            width={1000}
            height={1000}
            className="w-18 scale-2000 sm:scale-1000 md:scale-1000 lg:scale-2000 pt-1"
          />
        </Link>
      </div>

      {/* RIGHT SECTION */}
      <div className="right-section z-99 px-10">
        <div className="flex items-center gap-6">
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-white font-medium">
            <Link href="/AboutUs" className="transition">
              About
            </Link>
            <Link href="/Services" className="transition">
              Services
            </Link>
            <Link href="/ContactUs" className="transition">
              Contact
            </Link>
          </nav>

          {/* Mobile/Tablet Menu Button */}
          <button
            className="block lg:hidden text-white focus:outline-none cursor-pointer"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden text-white overflow-hidden transition-all duration-300 ease-in-out z-99 ${
          menuOpen ? "max-h-[300px] py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4 font-medium">
          <Link
            href="/AboutUs"
            className="hover:text-[#ff4d00]"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/Services"
            className="hover:text-[#ff4d00]"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/ContactUs"
            className="hover:text-[#ff4d00]"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
