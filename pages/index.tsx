import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react"; // Adicionado para usar estado

export default function Home() {
  const [catUrl, setCatUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function gerarGatinho() {
    setLoading(true);
    setCatUrl(null);
    try {
      const res = await fetch("https://api.thecatapi.com/v1/images/search");
      const data = await res.json();
      setCatUrl(data[0].url);
    } catch {
      setCatUrl(null);
    }
    setLoading(false);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "60vh" }}>
      <button
        onClick={gerarGatinho}
        disabled={loading}
        style={{
          padding: "12px 32px",
          borderRadius: "999px",
          border: "none",
          background: "linear-gradient(90deg, #ffb347 0%, #ffcc33 100%)",
          color: "#222",
          fontWeight: "bold",
          fontSize: "1.1rem",
          boxShadow: "0 2px 8px #0002",
          cursor: loading ? "not-allowed" : "pointer",
          transition: "background 0.2s, transform 0.2s",
          marginBottom: "24px"
        }}
      >
        {loading ? "Carregando..." : "Gerar Gatinho 🐱"}
      </button>
      {catUrl && (
        <img
          src={catUrl}
          alt="Gatinho gerado"
          style={{ maxWidth: 300, borderRadius: 12, boxShadow: "0 2px 8px #0002" }}
        />
      )}
    </div>
    // {/* Fim do bloco do gatinho
  )};