import Image from "next/image";
import { User } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import CalendarioEventos from "@/components/CalendarioEventos";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Top Bar fixa */}
        <div className="fixed top-0 left-0 right-0 h-14 bg-white shadow-sm z-50 flex items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <Image src="/logo_trama.png" alt="Logo" width={32} height={32} />
            <span className="font-semibold text-gray-700">Trama</span>
          </div>

          <div className="flex items-center justify-center w-9 h-9 bg-gray-200 rounded-full">
            <User className="text-gray-700 w-5 h-5" />
          </div>
        </div>

        {/* Conteúdo principal */}
        <div className="mt-6 p-4 sm:p-8 flex-1 flex flex-col items-center gap-6 overflow-auto">
          <CalendarioEventos />
          <main className="w-full">{children}</main>
        </div>
      </div>
    </div>
  );
}
