import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";

const familyMembers = [
  { name: "Jane Cooper", city: "Santa rosa", number: "(55) 9555-0118", email: "jane@microsoft.com", country: "Brasil" },
  { name: "Floyd Miles", city: "Santa rosa", number: "(55) 9555-0118", email: "floyd@yahoo.com", country: "Brasil" },
  { name: "Ronald Richards", city: "Adobe", number: "(55) 9555-0118", email: "ronald@adobe.com", country: "Brasil" },
  { name: "Marvin McKinney", city: "Giruá", number: "(55) 9555-0118", email: "marvin@tesla.com", country: "Brasil" },
  { name: "Jerome Bell", city: "Santa rosa", number: "(55) 9555-0118", email: "jerome@google.com", country: "Brasil" },
  { name: "Kathryn Murphy", city: "Porto Alegre", number: "(55) 9555-0118", email: "kathryn@microsoft.com", country: "Brasil" },
  { name: "Jacob Jones", city: "Porto Alegre", number: "(55) 9555-0118", email: "jacob@yahoo.com", country: "Brasil" },
  { name: "Kristin Watson", city: "Canoas", number: "(55) 9555-0118", email: "kristin@facebook.com", country: "Brasil" },
];

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredMembers = familyMembers.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.city.toLowerCase().includes(search.toLowerCase()) ||
      m.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-[#e5e7eb] flex flex-col py-8 px-6">
        <div className="flex items-center gap-2 mb-10">
          <img src="/logo.svg" alt="Trama Logo" className="w-8 h-8" />
          <span className="text-2xl font-bold text-[#3ca66b]">Trama</span>
        </div>
        <nav className="flex flex-col gap-2">
          <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-[#3ca66b] bg-[#eaf7f0] font-medium" href="#">
            <img src="/tree.svg" alt="" className="w-5 h-5" />
            Minha Árvore
          </a>
          <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-[#222] hover:bg-[#f3f4f6]" href="#">
            <img src="/calendar.svg" alt="" className="w-5 h-5" />
            Eventos Familiares
          </a>
          <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-[#3ca66b] bg-[#eaf7f0] font-medium" href="#">
            <img src="/users.svg" alt="" className="w-5 h-5" />
            Membros da Família
          </a>
          <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-[#222] hover:bg-[#f3f4f6]" href="#">
            <img src="/bookmark.svg" alt="" className="w-5 h-5" />
            Recordações
          </a>
          <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-[#222] hover:bg-[#f3f4f6]" href="#">
            <img src="/help.svg" alt="" className="w-5 h-5" />
            Ajuda
          </a>
        </nav>
      </aside>
      {/* Main */}
      <main className="flex-1 flex flex-col bg-[#f8fafc]">
        {/* Header */}
        <header className="flex justify-between items-center px-12 py-8">
          <div>
            <h1 className="text-2xl font-semibold text-[#222]">Olá Samuel!</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-end">
              <span className="font-medium text-[#222]">Samuel</span>
              <span className="text-xs text-[#888]">Administrador</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#ddd] overflow-hidden">
              <img src="/avatar.svg" alt="Avatar" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>
        {/* Cards */}
        <section className="px-12">
          <div className="bg-white rounded-2xl shadow-sm p-6 flex items-center gap-6 mb-8">
            <div className="w-14 h-14 rounded-full bg-[#eaf7f0] flex items-center justify-center">
              <img src="/users.svg" alt="" className="w-8 h-8" />
            </div>
            <div>
              <div className="text-[#888] text-sm">Membros da família</div>
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-[#222]">23</span>
                <span className="text-xs text-[#3ca66b] flex items-center gap-1">
                  <svg width="16" height="16" fill="none"><path d="M8 12V4M8 4L4 8M8 4l4 4" stroke="#3ca66b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  6 esse mês
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* Table */}
        <section className="px-12">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
              <div>
                <h2 className="text-xl font-bold text-[#222]">Membros da Família</h2>
                <div className="text-[#888] text-sm">Membros ativos</div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Pesquisar"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="pl-10 pr-4 py-2 rounded-lg border border-[#e5e7eb] bg-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-[#3ca66b] text-sm"
                  />
                  <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#888]" size={18} />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#e5e7eb] bg-[#f8fafc] text-sm font-medium">
                  Ordenar: <span className="font-semibold">Novo</span>
                  <FaChevronDown size={14} />
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-[#888] border-b border-[#f3f4f6]">
                    <th className="py-3 px-4 text-left font-medium">Nome</th>
                    <th className="py-3 px-4 text-left font-medium">Cidade</th>
                    <th className="py-3 px-4 text-left font-medium">Número</th>
                    <th className="py-3 px-4 text-left font-medium">Email</th>
                    <th className="py-3 px-4 text-left font-medium">País</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMembers.map((m, i) => (
                    <tr key={i} className="border-b border-[#f3f4f6] hover:bg-[#f8fafc]">
                      <td className="py-3 px-4">{m.name}</td>
                      <td className="py-3 px-4">{m.city}</td>
                      <td className="py-3 px-4">{m.number}</td>
                      <td className="py-3 px-4">{m.email}</td>
                      <td className="py-3 px-4">{m.country}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Pagination */}
            <div className="flex justify-between items-center mt-6 text-[#888] text-xs">
              <span>Mostrando Registros 1 a 8 de 2 registros</span>
              <div className="flex gap-1">
                <button className="w-7 h-7 rounded bg-[#f3f4f6] flex items-center justify-center">&lt;</button>
                <button className="w-7 h-7 rounded bg-[#3ca66b] text-white font-bold">1</button>
                <button className="w-7 h-7 rounded bg-[#f3f4f6] flex items-center justify-center">2</button>
                <button className="w-7 h-7 rounded bg-[#f3f4f6] flex items-center justify-center">3</button>
                <button className="w-7 h-7 rounded bg-[#f3f4f6] flex items-center justify-center">4</button>
                <span className="px-2">...</span>
                <button className="w-7 h-7 rounded bg-[#f3f4f6] flex items-center justify-center">8</button>
                <button className="w-7 h-7 rounded bg-[#f3f4f6] flex items-center justify-center">&gt;</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}