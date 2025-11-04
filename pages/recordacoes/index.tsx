"use client";

import { useEffect, useState } from "react";
import { PlusCircle, Image, Heart, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import Sidebar from "@/components/Sidebar";

export default function Recordacoes() {
  const [memorias, setMemorias] = useState<any[]>([]);

  useEffect(() => {
    fetch("/data/recordacoes.json")
      .then((res) => res.json())
      .then((data) => setMemorias(data))
      .catch((err) => console.error("Erro ao carregar recordações:", err));
  }, []);

  return (
    <main className="min-h-screen bg-white px-4 sm:px-6 py-10">

      <Sidebar />

      <div className="max-w-5xl mx-auto pt-2">
        {/* Título e botão */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Recordações</h1>
            <p className="text-gray-600 sm:text-base">
              Reviva os momentos mais marcantes da sua família 🌿
            </p>
          </div>

          <button className="flex items-center gap-2 bg-green-400 hover:bg-green-300 px-4 py-2 rounded-2xl shadow-lg transition text-gray-800 text-sm sm:text-base">
            <PlusCircle size={20} />
            Adicionar lembrança
          </button>
        </div>

        {/* Grid de recordações */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {memorias.map((memoria) => (
            <motion.div
              key={memoria.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-green-800/30 transition relative group"
              whileHover={{ scale: 1.03 }}
            >
              <div className="h-52 w-full overflow-hidden">
                <img
                  src={memoria.imagem}
                  alt={memoria.titulo}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-4">
                <h2 className="text-lg sm:text-xl font-semibold text-green-600 mb-1">
                  {memoria.titulo}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mb-3">
                  {memoria.descricao}
                </p>

                <div className="flex items-center justify-between text-gray-400 text-sm sm:text-base">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} /> {memoria.data}
                  </div>
                  <button className="hover:text-green-500 transition">
                    <Heart size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mensagem caso não haja recordações */}
        {memorias.length === 0 && (
          <div className="text-center mt-20 text-gray-400">
            <Image size={50} className="mx-auto mb-4 opacity-50" />
            <p>Nenhuma recordação adicionada ainda.</p>
          </div>
        )}
      </div>
    </main>
  );
}
