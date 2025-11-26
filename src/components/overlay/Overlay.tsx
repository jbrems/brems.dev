import { MousePointer } from "../icons/mouse-pointer/MousePointer"

export function Overlay({ children }: { children: React.ReactNode }) {
  return <div className="w-[300px] h-[200px] bg-neutral-800 rounded-lg border border-neutral-600 overflow-hidden">
    <div className="w-full h-[30px] bg-neutral-900 flex items-center gap-2 px-2 rounded-t-lg">
      <div className="w-[10px] h-[10px] bg-red-500 rounded-full"></div>
      <div className="w-[10px] h-[10px] bg-yellow-500 rounded-full"></div>
      <div className="w-[10px] h-[10px] bg-green-500 rounded-full"></div>
    </div>
    <div className="relative w-full h-[170px] text-neutral-400">
      {children}
    </div>
  </div>
}

export function Modal() {
  return <div className="relative w-[150px] h-[100px] left-[75px] top-[35px] bg-neutral-700 rounded-lg">
    <span className="text-xs px-2 py-1 rounded bg-neutral-800 absolute bottom-2 right-2">Confirm</span>
  </div>
}

export function Snackbar() {
  return <div className="absolute top-2 left-2 h-[20px] w-[100px] bg-neutral-700 rounded-lg animate-slide-right"></div>
}

export function Toast() {
  return <div className="absolute bottom-0 right-2 h-[60px] w-[100px] bg-neutral-700 rounded-t-lg animate-slide-up-delayed"></div>
}

export function Tooltip() {
  return <>
    <div className="absolute top-18 left-4 h-[30px] w-[120px] border border-dashed border-neutral-500 rounded-lg"></div>
    <MousePointer size={32} color="#666" className="absolute top-[85px] left-28 animate-slide-diagonally" />
    <section className="animate-fade-in-out">
      <div className="absolute top-[44px] left-[60px] h-[20px] w-[20px] bg-neutral-700 rotate-45"></div>
      <div className="absolute top-[30px] left-[50px] h-[30px] w-[200px] bg-neutral-700 rounded-lg"></div>
    </section>
  </>
}

export function Drawer() {
  return <div className="absolute top-0 left-0 h-full w-[100px] bg-neutral-700 rounded-r-lg animate-slide-right"></div>
}

export function Sheet() {
  return <div className="absolute left-0 bottom-0 h-[60px] w-full bg-neutral-700 rounded-t-lg animate-slide-up"></div>
}
