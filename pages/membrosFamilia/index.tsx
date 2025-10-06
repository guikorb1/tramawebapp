"use client"

import { useEffect, useState } from "react"
import Sidebar from "@/components/Sidebar"
import TabelaMembros from "@/components/TabelaFamilia"
import { User } from "lucide-react"
import Header from "@/components/Header"

export default function MembrosFamilia({ children }: { children: React.ReactNode }) {
  const [membros, setMembros] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/data/membros.json")
      .then((res) => res.json())
      .then((data) => {
        setMembros(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error("Erro ao carregar membros:", err)
        setLoading(false)
      })
  }, [])

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 bg-gray-100 p-8 flex flex-col gap-6 ml-16 md:ml-56 transition-all duration-500">
        
        {/* Header */}
        <Header titulo="Olá Dev!" />

        <section className="bg-white rounded-2xl shadow p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <User className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Membros da família</p>
              {loading ? (
                <h2 className="text-2xl font-bold text-gray-800 animate-pulse">...</h2>
              ) : (
                <h2 className="text-2xl font-bold text-gray-800">{membros.length}</h2>
              )}
            </div>
          </div>
          <div className="text-green-600 text-sm">+2 esse ano</div>
        </section>

        {/* Tabela de membros */}
        <section>
          <TabelaMembros />
        </section>

        <main>{children}</main>
      </div>
    </div>
  )
}
