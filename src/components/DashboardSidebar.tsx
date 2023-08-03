import DashboardHeader from "./DashboardHeader"
import { KeapPanel } from "./integrations/Keap/KeapPanel"

const DashboardSidebar = () => {
  return (
    <div className="bg-gray-800 h-screen w-64 px-4 py-8"><DashboardHeader /><KeapPanel /> </div>
    )
}

export default DashboardSidebar