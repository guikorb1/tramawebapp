"use client";

import Sidebar from "@/components/Sidebar";
import { useEffect, useRef } from "react";

export default function MinhaArvore() {
  const treeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initTree = async () => {
      try {
        const FamilyTree = (await import("@balkangraph/familytree.js")).default;
        const res = await fetch("/data/membros.json");
        const data = await res.json();

        if (!treeRef.current) return;

        const parentescoColors: Record<string, string> = {
          Pai: "#4F46E5",
          Mãe: "#EC4899",
          Filho: "#10B981",
          Filha: "#3B82F6",
          Irmão: "#F59E0B",
          Irmã: "#8B5CF6",
          Avô: "#F87171",
          Avó: "#FBBF24",
          Tio: "#06B6D4",
          Tia: "#F472B6",
          Primo: "#34D399",
          Prima: "#60A5FA",
          Família: "#9CA3AF",
        };

        const nodes = data.map((m: {
          id: number;
          fid?: number;
          mid?: number;
          nome: string;
          cidade: string;
          email: string;
          numero: string;
          parentesco: string;
        }) => ({
          id: m.id,
          fid: m.fid || null,
          mid: m.mid || null,
          name: m.nome,
          cidade: m.cidade,
          email: m.email,
          numero: m.numero,
          parentesco: m.parentesco || "Família",
          img:
            m.parentesco === "Pai"
              ? "https://cdn-icons-png.flaticon.com/512/149/149071.png"
              : m.parentesco === "Mãe"
              ? "https://cdn-icons-png.flaticon.com/512/921/921071.png"
              : "https://cdn-icons-png.flaticon.com/512/149/149071.png",
          backgroundColor: parentescoColors[m.parentesco || "Família"],
        }));

        const family = new FamilyTree(treeRef.current, {
          nodes,
          nodeBinding: {
            field_0: "name",
            field_1: "parentesco",
            field_2: "cidade",
            img_0: "img",
          },
          template: "hugo",  // usar template válido
          enableSearch: true,
          siblingSeparation: 140,
          levelSeparation: 120,
          // não mexer em escala aqui — usar padrão
        });

        nodes.forEach((node) => {
          const el = document.querySelector<HTMLDivElement>(`[data-id="${node.id}"]`);
          if (el) {
            el.style.backgroundColor = node.backgroundColor;
            el.style.borderRadius = "12px";
            el.style.transition = "transform 0.2s, box-shadow 0.2s";
            el.addEventListener("mouseenter", () => {
              el.style.transform = "scale(1.05)";
              el.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
            });
            el.addEventListener("mouseleave", () => {
              el.style.transform = "scale(1)";
              el.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
            });
          }
        });

        return () => family.destroy();
      } catch (error) {
        console.error("Erro ao carregar a árvore genealógica:", error);
      }
    };

    initTree();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50 w-350 pl-53">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Minha Árvore Genealógica
        </h1>
        <div
          ref={treeRef}
          className="border rounded-2xl bg-white shadow p-4 w-full h-[80vh] overflow-hidden"
        />
      </main>
    </div>
  );
}
