"use client";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function Ajuda() {
  return (
    <div className="px-6 py-8">
      {/* Header */}
      <Header titulo="" />

      <div className="flex flex-col items-center p-1 pl-40">


        <Sidebar />

        <h1 className="text-3xl font-bold mb-6 text-center font-bold">
          Ajuda
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl text-center mb-8">
          Bem-vindo à seção de ajuda! Aqui você encontrará uma visão geral das
          principais páginas da aplicação e suas funcionalidades.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {/* Minha Árvore */}
          <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              Minha Árvore
            </h2>
            <p className="text-gray-600">
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
            <p className="text-gray-600">
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
            <p className="text-gray-600">
              Nesta seção você encontra informações sobre cada pessoa da família,
              incluindo dados básicos e curiosidades.
            </p>
          </div>

          {/* Recordações */}
          <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-pink-600 mb-2">
              Recordações
            </h2>
            <p className="text-gray-600">
              Espaço reservado para armazenar fotos e vídeos da família. Essa
              funcionalidade está disponível para manter vivas as
              lembranças especiais.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
