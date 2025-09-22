export function Header() {
  return (<header className="flex justify-between items-center px-12 py-8">
          <div>
            <h1 className="text-2xl font-semibold text-[#222]">Olá dev!</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-end">
              <span className="font-medium text-[#222]">dev</span>
              <span className="text-xs text-[#888]">Administrador</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#ddd] overflow-hidden">
              <img src="/avatar.svg" alt="Avatar" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>)};

