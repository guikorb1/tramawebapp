"use client";

import { useState } from "react";
import {
  TreePine,
  Calendar,
  Users,
  Image as ImageIcon,
  HelpCircle,
  MessageSquare
} from "lucide-react";

import Link from "next/link";
import Image from "next/image"; 

const navItems = [
  { name: "Minha Árvore", icon: TreePine, href: "/home" },
  { name: "Eventos Familiares", icon: Calendar, href: "/" },
  { name: "Membros da Família", icon: Users, href: "/membrosFamilia"},
  { name: "Recordações", icon: ImageIcon, href: "/" },
  { name: "Ajuda", icon: HelpCircle, href: "/" },
];

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  
  return (
    <aside
   /*   onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)} */
      className={`fixed top-0 left-0 h-screen bg-white shadow-md transition-all duration-500 flex flex-col z-50
     ${expanded ? "w-56" : "w-16"}`}
    > 
      {/* Logo */}
      <div className="flex items-center justify-center p-4">
        {expanded ? (
          <div className="flex items-center gap-2">
            <Image
              src="/logo_trama.png"
              alt="Logo Trama"
              width={40}
              height={40}
              className="rounded"
            />
            <span className="text-2xl font-bold text-green-800 select-none">Trama</span>
          </div>
        ) : (
          <Image
            src="/logo_trama.png"
            alt="Logo Trama"
            width={32}
            height={32}
            className="rounded"
          />
        )}
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-2 px-2">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              key={index}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-green-800 hover:bg-green-50 transition`}
            >
              <Icon className="w-5 h-5 shrink-0" />
              {expanded && <span className="text-sm">{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Rodapé */}
      <div className="mt-auto px-2 mb-6">
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-green-800 hover:bg-green-50 transition"
        >
          <MessageSquare className="w-5 h-5 shrink-0" />
          {expanded && <span className="text-sm">Contato</span>}
        </Link>
      </div>
    </aside>
  );
}
