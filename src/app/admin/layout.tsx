import DashboardSidebar from "@/components/DashboardSidebar"
import DashboardHeader from "@/components/DashboardHeader"

export default function DashboardLayout({
    children,
    

    
  }: {
    children: React.ReactNode
  }) {
    return <section className="flex"><DashboardSidebar />{children}</section>
  }