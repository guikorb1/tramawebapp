"use client";

import Sidebar from "@/components/Sidebar";

export default function Ajuda() {
  return (
    <main className="min-h-screen bg-white px-4 sm:px-6 py-8">

      <div className="flex flex-col sm:flex-row items-start sm:items-center">
        <Sidebar />

        <div className="flex-1 max-w-4xl mx-auto mt-6 sm:mt-0 px-2 sm:px-4">
          {/* Título e descrição */}
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center sm:text-left">
            Ajuda
          </h1>
          <p className="text-base sm:text-lg text-gray-700 mb-8 text-center sm:text-left">
            Bem-vindo à seção de ajuda! Aqui você encontrará uma visão geral das
            principais páginas da aplicação e suas funcionalidades.
          </p>

          {/* Grid de cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Minha Árvore */}
            <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-green-600 mb-2">
                Minha Árvore
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Nesta seção você poderá visualizar sua árvore genealógica,
                acompanhando como os membros da sua família estão conectados ao
                longo das gerações.
              </p>
            </div>

            {/* Eventos Familiares */}
            <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">
                Eventos Familiares
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Aqui ficam todos os eventos importantes da família, como
                aniversários, encontros e viagens. Você pode visualizar e gerenciar
                o calendário de atividades familiares.
              </p>
            </div>

            {/* Membros da Família */}
            <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-purple-600 mb-2">
                Membros da Família
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Nesta seção você encontra informações sobre cada pessoa da família,
                incluindo dados básicos e curiosidades.
              </p>
            </div>

            {/* Recordações */}
            <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-pink-600 mb-2">
                Recordações
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Espaço reservado para armazenar fotos e vídeos da família. Essa
                funcionalidade está disponível para manter vivas as
                lembranças especiais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
