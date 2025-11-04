"use client";

import { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = { "pt-BR": ptBR };

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 0 }),
  getDay,
  locales,
});

type Evento = {
  id: number;
  title: string;
  start: string | Date;
  end: string | Date;
};

export default function CalendarioEventos() {
  const [eventos, setEventos] = useState<Evento[]>([
    // 🎉 Eventos fixos da família
    {
      id: 1,
      title: "🎂 Aniversário da Vó Maria",
      start: new Date(new Date().getFullYear(), 4, 12, 18, 0), // 12 de maio
      end: new Date(new Date().getFullYear(), 4, 12, 23, 0),
    },
    {
      id: 2,
      title: "🍖 Churrasco de Família",
      start: new Date(new Date().getFullYear(), 10, 15, 12, 0), // 15 de novembro
      end: new Date(new Date().getFullYear(), 10, 15, 18, 0),
    },
    {
      id: 3,
      title: "✈️ Viagem da Família ao Litoral",
      start: new Date(new Date().getFullYear(), 11, 26, 8, 0), // 26 de dezembro
      end: new Date(new Date().getFullYear(), 11, 30, 20, 0),
    },
  ]);

  useEffect(() => {
    async function fetchEventos() {
      try {
        const res = await fetch("/api/events");
        if (!res.ok) throw new Error("Erro ao carregar eventos");

        const data: Evento[] = await res.json();

        const eventosConvertidos = data.map((ev) => ({
          ...ev,
          start: new Date(ev.start),
          end: new Date(ev.end),
        }));

        // 🔗 Combina os eventos fixos com os da API
        setEventos((prev) => [...prev, ...eventosConvertidos]);
      } catch (error) {
        console.error(error);
      }
    }

    fetchEventos();
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 w-full max-w-6xl overflow-hidden">
        <Calendar
          localizer={localizer}
          events={eventos}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "75vh", minHeight: 400 }}
          views={["month", "week", "day", "agenda"]}
          popup
          showMultiDayTimes
          messages={{
            next: "Próximo",
            previous: "Anterior",
            today: "Hoje",
            month: "Mês",
            week: "Semana",
            day: "Dia",
            agenda: "Agenda",
          }}
          eventPropGetter={(event) => {
            let backgroundColor = "#2563eb";
            const title = event.title.toLowerCase();

            if (title.includes("aniversário")) backgroundColor = "#16a34a";
            else if (title.includes("encontro") || title.includes("churrasco")) backgroundColor = "#f59e0b";
            else if (title.includes("viagem")) backgroundColor = "#dc2626";

            return {
              style: {
                backgroundColor,
                color: "white",
                borderRadius: "8px",
                padding: "3px 6px",
                fontSize: "0.85rem",
              },
            };
          }}
          onSelectEvent={(event) =>
            alert(
              `📌 ${event.title}\nInício: ${event.start.toLocaleString()}\nFim: ${event.end.toLocaleString()}`
            )
          }
        />
      </div>
    </div>
  );
}
