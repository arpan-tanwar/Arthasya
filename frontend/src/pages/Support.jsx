import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import FAQ from "@/components/FAQ";
import ContactUs from "@/components/ContactUs";
import CardWrapperInfo from "@/components/CardWrapperInfo";
import { HelpCircle, Mail, MessageSquare, Globe, Search } from "lucide-react";
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

function Support() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCountries = countries.filter((country) =>
    country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Support Center</h1>

      <Tabs defaultValue="faq" className="mb-12">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="faq">Frequently Asked Questions</TabsTrigger>
          <TabsTrigger value="contact">Contact Us</TabsTrigger>
        </TabsList>
        <TabsContent value="faq">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>
                Find quick answers to common questions about Arthasya.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <FAQ
                  value={`item-1`}
                  title={`How do I create an account?`}
                  content={`To create an account, click on the "Sign Up" button in the top right corner of the homepage. Fill out the required information and follow the verification process. Once completed, you'll have full access to your Arthasya account.`}
                />
                <FAQ
                  value={`item-2`}
                  title={`What payment methods are accepted?`}
                  content={`Arthasya accepts various payment methods including credit/debit cards, bank transfers, and select cryptocurrencies. The available options may vary depending on your location. Check the "Deposit" section in your account for a full list of available methods.`}
                />
                <FAQ
                  value={`item-3`}
                  title={`How long does it take to withdraw funds?`}
                  content={`Withdrawal times can vary depending on the method used. Cryptocurrency withdrawals are typically processed within 1-2 hours. Bank transfers may take 1-3 business days. Please note that first-time withdrawals may require additional verification for security purposes.`}
                />
                <FAQ
                  value={`item-4`}
                  title={`Is Arthasya available in my country?`}
                  content={`Arthasya is available in many countries worldwide. However, due to regulatory restrictions, we may not be able to offer our services in certain jurisdictions. Please check our "Supported Countries" page or contact our support team for the most up-to-date information.`}
                />
                <FAQ
                  value={`item-5`}
                  title={`How does Arthasya ensure the security of my funds?`}
                  content={`Arthasya employs industry-leading security measures including cold storage for the majority of crypto assets, 2-factor authentication, advanced encryption, and regular security audits. We also offer insurance on deposits for added peace of mind.`}
                />
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="contact">
          <ContactUs />
        </TabsContent>
      </Tabs>
      <section className="grid md:grid-cols-3 gap-8 mb-12">
        <CardWrapperInfo
          title={`Help Center`}
          content={`Browse our comprehensive knowledge base for detailed guides and tutorials.`}
          icon={<HelpCircle className="mr-2" />}
          link={`Visit Help Center`}
        />
        <CardWrapperInfo
          title={`Live Chat`}
          content={`Get instant support from our team through our live chat service.`}
          icon={<MessageSquare className="mr-2" />}
          link={`Start Chat`}
        />
        <CardWrapperInfo
          title={`Email Support`}
          content={`For inquiries, reach out to our support team via email.`}
          icon={<Mail className="mr-2" />}
          link={`Send Email`}
        />
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Supported Countries</h2>
        <p className="mb-6">
          Arthasya is available in many countries worldwide.
        </p>

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
                <p className="text-sm text-muted-foreground">
                  No countries found
                </p>
              )}
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </section>
    </div>
  );
}

export default Support;
