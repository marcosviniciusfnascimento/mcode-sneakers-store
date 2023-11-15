"use client";

import { Fragment, useState } from "react";
import IconButton from "./IconButton";
import { Menu, X } from "lucide-react";
import { Dialog, Transition } from "@headlessui/react";
import { Category } from "@/types";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface MobileMenuProps {
  categories: Category[];
}
export default function MobileMenu(props: MobileMenuProps) {
  const { categories } = props;
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  const routes = categories.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <div className="block md:hidden">
      <IconButton
        onClick={onOpen}
        icon={<Menu className="text-purple-950" />}
      />
      <Dialog
        open={open}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-screen flex-col overflow-y-auto bg-white p-4 pb-6 shadow-xl">
            <div className="absolute right-4 top-4">
              <IconButton onClick={onClose} icon={<X size={15} />} />
            </div>
            <nav className="flex flex-col gap-y-4 h-full w-full items-center justify-start pt-5">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={onClose}
                  className={cn(
                    "text-3xl text-start font-semibold transition-colors hover:text-black",
                    route.active ? "text-black" : "text-zinc-800"
                  )}
                >
                  {route.label}
                </Link>
              ))}
            </nav>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
