import Sidebar from "@/components/Sidebar";
import TabelaMembros from "@/components/TabelaFamilia";
import { User } from "lucide-react";
import membros from "@/data/membros.json";

export default function MembrosFamilia({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      {/* Área principal */}
      <div className="flex-1 bg-gray-100 p-8 flex flex-col gap-6 ml-16 md:ml-56 transition-all duration-500">
        
        {/* Header */}
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Olá Dev!</h1>

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

        {/* Card resumo */}
        <section className="bg-white rounded-2xl shadow p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <User className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Membros da família</p>
              <h2 className="text-2xl font-bold text-gray-800">{membros.length}</h2>
            </div>
          </div>
          <div className="text-green-600 text-sm">+2 esse ano</div>
        </section>

        {/* Tabela de membros */}
        <section>
          <TabelaMembros />
        </section>

        {/* Children (conteúdo extra futuramente) */}
        <main>{children}</main>
      </div>
    </div>
  );
}
