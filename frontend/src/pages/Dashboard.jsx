import DashCard from "@/components/DashCard";
import {
  BarChart3,
  Bell,
  CreditCard,
  DollarSign,
  Download,
  LineChart,
  LogOut,
  Settings,
  User,
  Wallet,
} from "lucide-react";

function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Welcome back, John!</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <DashCard
            title={`Total Balance`}
            icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
            mainContent={`$45,231.89`}
            footerContent={`+20.1% from last month`}
          />
          <DashCard
            title={`Total Profit/Loss`}
            icon={<LineChart className="h-4 w-4 text-muted-foreground" />}
            mainContent={`+$12,234.56`}
            footerContent={`+15.2% from last month`}
          />
          <DashCard
            title={`Open Positions`}
            icon={<BarChart3 className="h-4 w-4 text-muted-foreground" />}
            mainContent={`23`}
            footerContent={`+2 since yesterday`}
          />
          <DashCard
            title={`Available Funds`}
            icon={<Wallet className="h-4 w-4 text-muted-foreground" />}
            mainContent={`$8,234.56`}
            footerContent={`Ready to invest`}
          />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
