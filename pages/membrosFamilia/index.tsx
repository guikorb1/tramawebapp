"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import TabelaMembros from "@/components/TabelaFamilia";
import { User } from "lucide-react";

export default function MembrosFamilia({ children }: { children: React.ReactNode }) {
  const [membros, setMembros] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/membros.json")
      .then((res) => res.json())
      .then((data) => {
        setMembros(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar membros:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Conteúdo principal */}
      <div className="flex-1 flex flex-col gap-6 p-4 sm:p-6 md:p-8 md:pl-56 transition-all duration-500">
        {/* Card de resumo */}
        <section className="bg-white rounded-2xl shadow p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <User className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Membros da família</p>
              {loading ? (
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 animate-pulse">...</h2>
              ) : (
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">{membros.length}</h2>
              )}
            </div>
          </div>
          <div className="text-green-600 text-sm sm:text-base">+2 esse ano</div>
        </section>

        {/* Tabela responsiva */}
        <section className="overflow-x-auto bg-white rounded-2xl shadow p-4">
          <TabelaMembros />
        </section>

        {/* Espaço para children */}
        <main>{children}</main>
      </div>
    </div>
  );
}
