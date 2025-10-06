import { User } from "lucide-react";
import CalendarioEventos from "@/components/CalendarioEventos";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 bg-gray-100 p-8 flex flex-col gap-6">

        {/* Header */}
        <Header titulo="Olá Dev!" />

        <section>
          <CalendarioEventos />
        </section>

        {/* Children (conteúdo extra futuramente) */}
        <main>{children}</main>
      </div>
    </div>
  );
}
