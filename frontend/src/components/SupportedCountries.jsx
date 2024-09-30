import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe, Search } from "lucide-react";

const countries = [
  "United States",
  "United Kingdom",
  "Canada",
  "India",
  "Australia",
  "Germany",
  "France",
  "Japan",
  "Singapore",
  "Switzerland",
  "Netherlands",
  "Sweden",
  "Norway",
  "Denmark",
  "Finland",
  "New Zealand",
  "Ireland",
  "Austria",
  "Belgium",
  "Italy",
  "Spain",
  "Portugal",
  "Greece",
  "Poland",
  "Czech Republic",
  "Hungary",
  "Slovakia",
  "Slovenia",
  "Estonia",
  "Latvia",
  "Lithuania",
  "Malta",
  "Cyprus",
  "Luxembourg",
  "Iceland",
  "Liechtenstein",
  "Monaco",
  "San Marino",
  "Andorra",
  "Vatican City",
];

function SupportedCountries() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCountries = countries.filter((country) =>
    country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="lg">
          <Globe className="mr-2" />
          View Supported Countries
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Supported Countries</DialogTitle>
          <DialogDescription>
            Arthasya is available in the following countries. This list is
            subject to change based on regulatory requirements.
          </DialogDescription>
        </DialogHeader>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search Countries"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
        <ScrollArea className="h-[300px] rounded-md border p-4">
          <ul className="space-y-2">
            {filteredCountries.map((country, index) => (
              <li key={index} className="text-sm">
                {country}
              </li>
            ))}
          </ul>
          {filteredCountries.length === 0 && (
            <p className="text-sm text-muted-foreground">No countries found</p>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

export default SupportedCountries;
