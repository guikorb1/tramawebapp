import { User } from "lucide-react";

// Definindo o tipo das props
interface HeaderProps {
  titulo: string;
}

export default function Header({ titulo }: HeaderProps) {
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-2xl font-bold text-gray-800">{titulo}</h1>

      <div className="flex items-center gap-3">
        <div className="flex flex-col text-right">
          <span className="text-sm font-semibold text-gray-800">Dev</span>
          <span className="text-xs text-gray-500">Administrador</span>
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
          <User className="w-5 h-5 text-gray-700" />
        </div>
      </div>
    </header>
  );
}
