"use client";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";

interface Membro {
  nome: string;
  cidade: string;
  numero: string;
  email: string;
  pais: string;
}

export default function TabelaFamilia() {
  const [membrosData, setMembrosData] = useState<Membro[]>([]);
  const [loading, setLoading] = useState(true);

  const [pagina, setPagina] = useState(1);
  const [busca, setBusca] = useState("");
  const registrosPorPagina = 10;

  useEffect(() => {
    fetch("/data/membros.json")
      .then((res) => res.json())
      .then((data) => {
        setMembrosData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar membros:", err);
        setLoading(false);
      });
  }, []);

  // Filtragem
  const membrosFiltrados = membrosData.filter((membro) =>
    membro.nome.toLowerCase().includes(busca.toLowerCase())
  );

  const totalPaginas = Math.ceil(membrosFiltrados.length / registrosPorPagina);
  const inicio = (pagina - 1) * registrosPorPagina;
  const fim = inicio + registrosPorPagina;
  const membrosPaginados = membrosFiltrados.slice(inicio, fim);

  return (
    <div className="p-4 sm:p-6 bg-white rounded-2xl shadow">
      {/* Cabeçalho */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">
            Membros da Família
          </h2>
          <p className="text-sm text-gray-500">Membros ativos</p>
        </div>

        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Pesquisar"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="w-full sm:w-64 pl-8 pr-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      {/* Lista de membros em cards */}
      {loading ? (
        <p className="text-center py-6 text-gray-500 animate-pulse">
          Carregando membros...
        </p>
      ) : membrosPaginados.length === 0 ? (
        <p className="text-center py-6 text-gray-500">Nenhum membro encontrado.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {membrosPaginados.map((membro, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-lg shadow p-4 hover:shadow-green-200 transition"
            >
              <h3 className="font-semibold text-gray-800">{membro.nome}</h3>
              <p className="text-sm text-gray-600">{membro.cidade} - {membro.pais}</p>
              <p className="text-sm text-gray-600">{membro.numero}</p>
              <p className="text-sm text-gray-600 truncate">{membro.email}</p>
            </div>
          ))}
        </div>
      )}

      {/* Paginação */}
      {totalPaginas > 1 && (
        <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
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
                pagina === i + 1 ? "bg-green-700 text-white" : ""
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
      )}
    </div>
  );
}
