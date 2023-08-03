import Link from "next/link"

export const KeapPanel = () => {
  return (
    <div className="w-full h-10 hover:bg-slate-500" ><Link href={'/admin/keap'}>Keap!</Link></div>
  )
}

