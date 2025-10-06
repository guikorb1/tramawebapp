"use client";

import { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import {ptBR} from "date-fns/locale/pt-BR";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  "pt-BR": ptBR,
};

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
  const [eventos, setEventos] = useState<Evento[]>([]);

  useEffect(() => {
    async function fetchEventos() {
      const res = await fetch("/api/events");
      const data: Evento[] = await res.json();

      // Converter datas de string para Date
      const eventosConvertidos = data.map((ev) => ({
        ...ev,
        start: new Date(ev.start),
        end: new Date(ev.end),
      }));

      setEventos(eventosConvertidos);
    }

    fetchEventos();
  }, []);

  return (
    <div className="flex flex-col items-center pl-50">
      <h1 className="text-2xl font-bold mb-4
       text-center">
        Eventos da Família
      </h1>

      <div className="bg-white rounded-2xl shadow p-4 w-full max-w-5xl">
        <Calendar
          localizer={localizer}
          events={eventos}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "70vh", minHeight: 400 }}
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
            let backgroundColor = "#2563eb"; // azul padrão
            if (event.title.toLowerCase().includes("aniversário"))
              backgroundColor = "#16a34a"; // verde
            if (event.title.toLowerCase().includes("encontro"))
              backgroundColor = "#f59e0b"; // amarelo
            if (event.title.toLowerCase().includes("viagem"))
              backgroundColor = "#dc2626"; // vermelho
            return {
              style: {
                backgroundColor,
                color: "white",
                borderRadius: "8px",
                padding: "2px 6px",
              },
            };
          }}
          onSelectEvent={(event) =>
            alert(
              `📌 Evento: ${event.title}\n📅 Início: ${event.start.toLocaleString()}\n📅 Fim: ${event.end.toLocaleString()}`
            )
          }
        />
      </div>
    </div>
  );
}
