"use client";

import { useState } from "react";
import {
  TreePine,
  Calendar,
  Users,
  Image as ImageIcon,
  HelpCircle,
  User
} from "lucide-react";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const navItems = [
  { name: "Árvore", icon: TreePine, href: "/" },
  { name: "Eventos", icon: Calendar, href: "/eventos" },
  { name: "Membros", icon: Users, href: "/membrosFamilia" },
  { name: "Recordações", icon: ImageIcon, href: "/recordacoes" },
  { name: "Ajuda", icon: HelpCircle, href: "/ajuda" },
];

export default function Sidebar() {
  const router = useRouter();

  function handleLogout() {
    localStorage.removeItem('user');
    router.push('/login');
  }

  return (
    <>
      {/* Top bar - fixed */}
      <div className="fixed top-0 left-0 right-0 h-12 bg-white shadow-sm z-50 flex items-center justify-between px-4">
        {/* Logo - lado esquerdo */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo_trama.png"
            alt="Logo"
            width={32}
            height={32}
            className="rounded"
          />
        </div>

        {/* Ícones - lado direito */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">
            <User className="w-5 h-5 text-gray-700" />
          </div>
        </div>
      </div>

      {/* Bottom bar - fixed with navigation icons */}
      <nav className="fixed bottom-0 left-0 right-0 h-14 bg-white shadow-md z-50 flex items-center justify-around">
        {navItems.map((item, idx) => {
          const Icon = item.icon;
          const isActive = router.pathname === item.href;
          return (
            <Link
              key={idx}
              href={item.href}
              className={`flex flex-col items-center justify-center p-2 ${
                isActive ? 'text-green-700' : 'text-gray-700'
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-[10px]">{item.name}</span>
            </Link>
          );
        })}

        {/* Logout icon */}
        <button onClick={handleLogout} className="p-2 text-red-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1"
            />
          </svg>
        </button>
      </nav>
    </>
  );
}
