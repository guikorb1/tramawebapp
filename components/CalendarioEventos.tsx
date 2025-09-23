import { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
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

export default function CalendarioEventos() {
  const [eventos] = useState([
    {
      title: "Aniversário da Ana",
      start: new Date(2025, 8, 25, 19, 0), // 25/09/2025 às 19h
      end: new Date(2025, 8, 25, 23, 0),
    },
    {
      title: "Encontro de família",
      start: new Date(2025, 9, 5, 12, 0), // 05/10/2025
      end: new Date(2025, 9, 5, 18, 0),
    },
    {
      title: "Viagem com primos",
      start: new Date(2025, 11, 20), // 20/12/2025
      end: new Date(2025, 11, 25),
    },
  ]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">
        📅 Eventos da Família
      </h1>
      <Calendar
        localizer={localizer}
        events={eventos}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        messages={{
          next: "Próximo",
          previous: "Anterior",
          today: "Hoje",
          month: "Mês",
          week: "Semana",
          day: "Dia",
          agenda: "Agenda",
        }}
      />
    </div>
  );
}
