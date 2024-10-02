import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function DashTable({ title, asset }) {
  return (
    <TabsContent value={title.toLowerCase()} className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{title} Watchlist</h2>
        <Button>Add {title}</Button>
      </div>
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Symbol</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>24h Change</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {asset.map((asset) => (
              <TableRow key={asset.symbol}>
                <TableCell className="font-medium">{asset.symbol}</TableCell>
                <TableCell>{asset.name}</TableCell>
                <TableCell>${asset.price.toFixed(2)}</TableCell>
                <TableCell
                  className={
                    asset.change >= 0 ? "text-green-600" : "text-red-600"
                  }
                >
                  {asset.change >= 0 ? "+" : ""}
                  {asset.change}%
                </TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    Trade
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </TabsContent>
  );
}

export default DashTable;
