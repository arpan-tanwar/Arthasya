import DashCard from "@/components/DashCard";
import DashTable from "@/components/DashTable";
import { BarChart3, DollarSign, LineChart, Wallet } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("stocks");

  const assets = {
    stocks: [
      { symbol: "AAPL", name: "Apple Inc.", price: 150.25, change: 2.5 },
      { symbol: "GOOGL", name: "Alphabet Inc.", price: 2750.8, change: -0.8 },
      {
        symbol: "MSFT",
        name: "Microsoft Corporation",
        price: 305.15,
        change: 1.2,
      },
    ],
    crypto: [
      { symbol: "BTC", name: "Bitcoin", price: 45000.0, change: 3.2 },
      { symbol: "ETH", name: "Ethereum", price: 3200.5, change: 1.5 },
      { symbol: "DOGE", name: "Dogecoin", price: 0.25, change: -2.1 },
    ],
    commodities: [
      { symbol: "GC", name: "Gold", price: 1785.5, change: 0.5 },
      { symbol: "SI", name: "Silver", price: 23.75, change: -0.3 },
      { symbol: "CL", name: "Crude Oil", price: 75.8, change: 1.8 },
    ],
    forex: [
      { symbol: "EUR/USD", name: "Euro/US Dollar", price: 1.185, change: -0.2 },
      {
        symbol: "GBP/USD",
        name: "British Pound/US Dollar",
        price: 1.375,
        change: 0.3,
      },
      {
        symbol: "USD/JPY",
        name: "US Dollar/Japanese Yen",
        price: 110.25,
        change: 0.1,
      },
    ],
  };

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
            mainContent={<div className="text-green-600">+$12,234.56</div>}
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

        <Tabs defaultValue="stocks" className="space-y-4">
          <TabsList>
            <TabsTrigger value="stocks" onClick={() => setActiveTab("stocks")}>
              Stocks
            </TabsTrigger>
            <TabsTrigger value="crypto" onClick={() => setActiveTab("crypto")}>
              Crypto
            </TabsTrigger>
            <TabsTrigger
              value="commodities"
              onClick={() => setActiveTab("commodities")}
            >
              Commodities
            </TabsTrigger>
            <TabsTrigger value="forex" onClick={() => setActiveTab("forex")}>
              Forex
            </TabsTrigger>
          </TabsList>
          <DashTable title={`Stocks`} asset={assets.stocks} />
          <DashTable title={`Crypto`} asset={assets.crypto} />
          <DashTable title={`Commodities`} asset={assets.commodities} />
          <DashTable title={`Forex`} asset={assets.forex} />
        </Tabs>
      </main>
    </div>
  );
}

export default Dashboard;
