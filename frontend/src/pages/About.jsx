import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Shield, BarChart } from "lucide-react";
import placeholder from "../assets/placeholder.svg";
import photo from "../assets/photo.jpg";
import CardWrapperInfo from "@/components/CardWrapperInfo";
import OurMission from "@/components/OurMission";

function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4">About Arthasya</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Arthasya is a cutting-edge platform designed for both novice and
          experienced traders in the stock and cryptocurrency markets. Our
          mission is to democratize trading by providing a user-friendly,
          secure, and powerful trading experience for everyone.
        </p>
        <Badge variant="outline" className="text-lg py-1 px-4">
          Est. 2024
        </Badge>
      </section>

      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
            <p className="mb-4">
              At Arthasya, we envision a world where financial markets are
              accessible to all. We believe that with the right tools and
              knowledge, anyone can become a successful trader.
            </p>
            <p className="mb-4">
              Our platform is built on the principles of transparency,
              innovation, and user empowerment. We're not just a trading
              platform; we're a community of traders, analysts, and financial
              experts working together to navigate the complex world of
              financial markets.
            </p>
            <OurMission />
          </div>
          <div className="relative h-[400px]">
            <img
              src={placeholder}
              alt="Arthasya Platform Interface"
              layout="fill"
              className="rounded-lg w-[600px] h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          What Sets Us Apart
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <CardWrapperInfo
            title={`Community-Driven`}
            content={`Join a vibrant community of traders. Share insights, strategies, and learn from each other's experiences.`}
            icon={<Users className="mr-2" />}
          />
          <CardWrapperInfo
            title={`Advanced Analytics`}
            content={`Leverage AI-powered analytics to make data-driven decisions. Our platform provides insights that give you an edge in the market.`}
            icon={<BarChart className="mr-2" />}
          />
          <CardWrapperInfo
            title={`Uncompromising Security`}
            content={`Your security is our top priority. We employ state-of-the-art encryption and multi-factor authentication to protect your assets.`}
            icon={<Shield className="mr-2" />}
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Journey</h2>
        <div className="space-y-8">
          <div className="flex items-center">
            <div className="w-32 font-bold text-right mr-8">2024</div>
            <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
            <div className="w-2/3 ml-8">
              <h3 className="font-semibold mb-2">Arthasya Launches</h3>
              <p>After development, Arthasya opens its doors to traders.</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-32 font-bold text-right mr-8">2025</div>
            <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
            <div className="w-2/3 ml-8">
              <h3 className="font-semibold mb-2">Future Plans</h3>
              <p>Arthasya continues...</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Meet Our Leadership
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Arpan Tanwar",
              role: "CEO & Co-founder",
              image: photo,
            },
            {
              name: "Updesh Tanwar",
              role: "CTO",
              image: photo,
            },
            {
              name: "Vishal Tanwar",
              role: "Head of Customer Success",
              image: photo,
            },
          ].map((leader) => (
            <Card key={leader.name}>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      layout="fill"
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg">{leader.name}</h3>
                  <p className="text-muted-foreground">{leader.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Join the TradePro Revolution
        </h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Be part of the future of trading. Whether you're a seasoned investor
          or just starting out, TradePro has the tools and resources you need to
          succeed in the financial markets.
        </p>
        <Button size="lg">Get Started Today</Button>
      </section>
    </div>
  );
}

export default About;
