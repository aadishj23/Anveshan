"use client";
import { useEffect, useState } from "react";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { logo, navItems } from "@/config/marginals";

import Typography from "../Typography";
import Button from "../ui/button";

const SCROLL_OFFSET = 80;
const handleScrollToSection = (href: string) => {
  if (href.startsWith("/#")) {
    const targetId = href.substring(2);
    const currentPage = window.location.pathname;
    if (currentPage !== "/") window.location.href = "/#" + targetId;
    const element = document.getElementById(targetId);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - SCROLL_OFFSET;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  } else {
    window.open(href, "_blank");
  }
};

function DesktopNavbar() {
  return (
    <div className="hidden relative lg:flex w-full items-center justify-between py-3">
      {/* Brand Logo */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center">
        <Link href={logo.href} className="flex items-center transition-opacity hover:opacity-90">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="h-9 w-auto object-contain"
            unoptimized
            priority
          />
        </Link>
      </div>

      {/* Nav Links */}
      <div className="h-full flex justify-center mx-auto">
        <div className="flex gap-[4vw] xl:gap-[5vw] w-full justify-center items-center">
          {navItems.map((item: { name: string; href: string }) => (
            <button
              key={item.name}
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection(item.href);
              }}
              className="transition-colors cursor-pointer group py-1"
            >
              <Typography.P className="!text-sm md:!text-base mb-0 text-center font-semibold text-neutral-300 group-hover:text-primary transition-colors duration-200">
                {item.name}
              </Typography.P>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 py-2 transition-all duration-300 bg-black/90 backdrop-blur-md border-b ${
          scrolled
            ? "border-neutral-800 shadow-lg shadow-black/60"
            : "border-white/5"
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-10">
          <DesktopNavbar />
          {/* Mobile Bar */}
          <div className="flex lg:hidden w-full items-center justify-between h-full py-2">
            <Link href={logo.href} className="flex items-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={36}
                className="h-8 w-auto object-contain"
                unoptimized
                priority
              />
            </Link>
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 text-white hover:text-primary transition-colors duration-200 focus:outline-none"
              aria-label="Open Navigation Menu"
            >
              <Menu size={26} className="text-white" />
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Drawer as Sibling (Z-[100] Solid Background) */}
      <div
        className={`fixed inset-0 bg-[#0a0a0a] z-[100] flex flex-col justify-between px-6 py-4 transition-opacity duration-300 ease-in-out lg:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex w-full items-center justify-between">
          <Link
            href={logo.href}
            onClick={() => setIsOpen(false)}
            className="flex items-center"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={36}
              className="h-8 w-auto object-contain"
              unoptimized
            />
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-white hover:text-primary transition-colors duration-200 focus:outline-none"
            aria-label="Close Navigation Menu"
          >
            <X size={28} className="text-white" />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col items-center justify-center space-y-6 my-auto">
          {navItems.map((item: { name: string; href: string }) => (
            <button
              key={item.name}
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection(item.href);
                setIsOpen(false);
              }}
              className="transition-colors py-1.5"
            >
              <Typography.P className="text-white text-2xl font-semibold text-center hover:text-primary transition-colors">
                {item.name}
              </Typography.P>
            </button>
          ))}
        </div>

        {/* Drawer Footer / CTA */}
        <div className="flex justify-center pb-6">
          <Button
            className="h-12 !px-8 min-w-[240px] flex items-center justify-center"
            onClick={() => {
              handleScrollToSection("/#contact");
              setIsOpen(false);
            }}
          >
            <span className="text-black font-bold text-base">Contact Us</span>
          </Button>
        </div>
      </div>
    </>
  );
}

