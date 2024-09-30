import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ChevronRight,
  Target,
  Users,
  Globe,
  Lightbulb,
  Shield,
  BarChart3,
} from "lucide-react";

function OurMission() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="mt-4">
          Learn More About Our Mission <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Our Mission at Arthasya</DialogTitle>
          <DialogDescription>
            Empowering traders worldwide with cutting-edge technology and
            unparalleled market insights.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[400px] rounded-md border p-4">
          <div className="space-y-6">
            <section>
              <h3 className="flex items-center text-lg font-semibold mb-2">
                <Target className="mr-2 h-5 w-5 text-primary" />
                Our Core Purpose
              </h3>
              <p>
                At Arthasya, our mission is to democratize trading by providing
                a user-friendly, secure, and powerful trading experience for
                everyone. We believe that financial markets should be accessible
                to all, regardless of their background or experience level.
              </p>
            </section>

            <section>
              <h3 className="flex items-center text-lg font-semibold mb-2">
                <Users className="mr-2 h-5 w-5 text-primary" />
                Empowering Traders
              </h3>
              <p>
                We are committed to empowering traders with the tools,
                knowledge, and support they need to make informed decisions and
                achieve their financial goals. Our platform is designed to cater
                to both novice and experienced traders, offering intuitive
                interfaces alongside advanced features.
              </p>
            </section>

            <section>
              <h3 className="flex items-center text-lg font-semibold mb-2">
                <Globe className="mr-2 h-5 w-5 text-primary" />
                Global Accessibility
              </h3>
              <p>
                Arthasya aims to break down geographical barriers in trading.
                We're continuously expanding our reach to make our platform
                available in more countries, ensuring that traders worldwide can
                access global markets with ease.
              </p>
            </section>

            <section>
              <h3 className="flex items-center text-lg font-semibold mb-2">
                <Lightbulb className="mr-2 h-5 w-5 text-primary" />
                Innovation and Education
              </h3>
              <p>
                We're dedicated to driving innovation in the trading industry.
                This includes developing cutting-edge technologies, implementing
                AI-driven insights, and providing comprehensive educational
                resources to help our users stay ahead in the ever-evolving
                financial markets.
              </p>
            </section>

            <section>
              <h3 className="flex items-center text-lg font-semibold mb-2">
                <Shield className="mr-2 h-5 w-5 text-primary" />
                Security and Trust
              </h3>
              <p>
                Building and maintaining trust is at the core of our mission. We
                implement state-of-the-art security measures to protect our
                users' assets and data, and we're committed to operating with
                full transparency and integrity in all our practices.
              </p>
            </section>

            <section>
              <h3 className="flex items-center text-lg font-semibold mb-2">
                <BarChart3 className="mr-2 h-5 w-5 text-primary" />
                Sustainable Growth
              </h3>
              <p>
                We believe in fostering sustainable growth, both for our users
                and for Arthasya as a company. Our mission includes promoting
                responsible trading practices and continuously improving our
                platform based on user feedback and market trends.
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

export default OurMission;
