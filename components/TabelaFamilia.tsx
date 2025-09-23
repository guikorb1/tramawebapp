"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import membros from "@/data/membros.json";

interface Membro {
  nome: string;
  cidade: string;
  numero: string;
  email: string;
  pais: string;
}

const membrosData: Membro[] = membros;

export default function TabelaFamilia() {
  const [pagina, setPagina] = useState(1);
  const [busca, setBusca] = useState("");
  const registrosPorPagina = 5;

  // Filtragem
  const membrosFiltrados = membrosData.filter((membro) =>
    membro.nome.toLowerCase().includes(busca.toLowerCase())
  );

  const totalPaginas = Math.ceil(membrosFiltrados.length / registrosPorPagina);
  const inicio = (pagina - 1) * registrosPorPagina;
  const fim = inicio + registrosPorPagina;
  const membrosPaginados = membrosFiltrados.slice(inicio, fim);

  return (
    <div className="p-6 bg-white rounded-2xl shadow">
      {/* Cabeçalho da tabela */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Membros da Família</h2>
          <p className="text-sm text-gray-500">Membros ativos</p>
        </div>

        <div className="flex items-center gap-3 mt-3 sm:mt-0">
          {/* Barra de pesquisa */}
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Pesquisar"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="pl-8 pr-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Dropdown ordenação (aqui só visual, mas dá pra implementar lógica depois) */}
          <select className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
            <option>Novo</option>
            <option>Antigo</option>
            <option>Nome (A-Z)</option>
            <option>Nome (Z-A)</option>
          </select>
        </div>
      </div>

      {/* Tabela */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="text-gray-500 border-b">
            <tr>
              <th className="py-3 px-4">Nome</th>
              <th className="py-3 px-4">Cidade</th>
              <th className="py-3 px-4">Número</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">País</th>
            </tr>
          </thead>
          <tbody>
            {membrosPaginados.map((membro, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{membro.nome}</td>
                <td className="py-3 px-4">{membro.cidade}</td>
                <td className="py-3 px-4">{membro.numero}</td>
                <td className="py-3 px-4">{membro.email}</td>
                <td className="py-3 px-4">{membro.pais}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Paginação */}
      <div className="flex items-center justify-center gap-2 mt-4">
        <button
          className="px-3 py-1 border rounded disabled:opacity-50"
          disabled={pagina === 1}
          onClick={() => setPagina(pagina - 1)}
        >
          ‹
        </button>
        {Array.from({ length: totalPaginas }, (_, i) => (
          <button
            key={i}
            onClick={() => setPagina(i + 1)}
            className={`px-3 py-1 border rounded ${
              pagina === i + 1 ? "bg-gray-900 text-white" : ""
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          className="px-3 py-1 border rounded disabled:opacity-50"
          disabled={pagina === totalPaginas}
          onClick={() => setPagina(pagina + 1)}
        >
          ›
        </button>
      </div>
    </div>
  );
}
