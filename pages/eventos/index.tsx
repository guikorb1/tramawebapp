import Sidebar from "@/components/Sidebar";
import { User } from "lucide-react";
import CalendarioEventos from "@/components/CalendarioEventos";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      {/* Área principal */}
      <div className="flex-1 bg-gray-100 p-8 flex flex-col gap-6">
        
        {/* Header */}
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800"></h1>

          <div className="flex items-center gap-3">
            <div className="flex flex-col text-right">
              <span className="text-sm font-semibold text-gray-800">Dev</span>
              <span className="text-xs text-gray-500">Administrador</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
              <User className="w-5 h-5 text-gray-700" />
            </div>
          </div>
        </header>

        {/* Tabela de membros */}
        <section>
          <CalendarioEventos />
        </section>

        {/* Children (conteúdo extra futuramente) */}
        <main>{children}</main>
      </div>
    </div>
  );
}
