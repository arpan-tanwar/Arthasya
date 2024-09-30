import { Button } from "@/components/ui/button";
import CardWrapperInfo from "@/components/CardWrapperInfo";
import CardWrapperUser from "@/components/CardWrapperUser";
import { CheckCircle, TrendingUp, Shield, BarChart2 } from "lucide-react";
import placeholder from "../assets/placeholder.svg";
import KeyFeatures from "@/components/KeyFeatures";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Welcome to Arthasya</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your gateway to smart stock and crypto trading. Experience the power
            of advanced analytics, real-time data, and secure transactions all
            in one platform.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/signup">
              <Button size="lg">Get Started</Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Why Choose Arthasya?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <CardWrapperInfo
              icon={<TrendingUp className="mr-2" />}
              title="Real-time Data"
              content="Get up-to-the-minute market data for informed decision making. Our platform provides live updates on stock prices, crypto values, and market trends."
            />
            <CardWrapperInfo
              icon={<BarChart2 className="mr-2" />}
              title="Advanced Analytics"
              content="Leverage powerful tools to analyze market trends and make predictions. Our AI-driven insights help you stay ahead of the curve."
            />
            <CardWrapperInfo
              icon={<Shield className="mr-2" />}
              title="Secure Trading"
              content="Trade with confidence using our state-of-the-art security measures. Your investments and personal data are protected by industry-leading encryption."
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            How It Works
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold mr-3">
                    1
                  </span>
                  <div>
                    <h3 className="font-semibold mb-1">Create an Account</h3>
                    <p>
                      Sign up for free and complete our simple verification
                      process.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold mr-3">
                    2
                  </span>
                  <div>
                    <h3 className="font-semibold mb-1">Fund Your Account</h3>
                    <p>Deposit funds using various secure payment methods.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold mr-3">
                    3
                  </span>
                  <div>
                    <h3 className="font-semibold mb-1">Start Trading</h3>
                    <p>
                      Browse markets, analyze trends, and execute trades with
                      ease.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold mr-3">
                    4
                  </span>
                  <div>
                    <h3 className="font-semibold mb-1">Monitor and Manage</h3>
                    <p>
                      Track your portfolio performance and adjust your strategy
                      as needed.
                    </p>
                  </div>
                </li>
              </ol>
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
            Key Features
          </h2>
          <div className="grid md:grid-col-2 gap-8">
            <KeyFeatures
              icon={
                <CheckCircle className="mr-4 text-green-500 flex-shrink-0" />
              }
              title="Multi-Asset Trading"
              content="Trade stocks, cryptocurrencies, ETFs, and more from a single platform."
            />
            <KeyFeatures
              icon={
                <CheckCircle className="mr-4 text-green-500 flex-shrink-0" />
              }
              title="Portfolio Diversification"
              content="Easily diversify your investments across different asset classes."
            />
            <KeyFeatures
              icon={
                <CheckCircle className="mr-4 text-green-500 flex-shrink-0" />
              }
              title="Customizable Alerts"
              content="Set up personalized notifications for price movements and market events."
            />
            <KeyFeatures
              icon={
                <CheckCircle className="mr-4 text-green-500 flex-shrink-0" />
              }
              title="Educational Resources"
              content="Access a wealth of trading guides, tutorials, and market analysis."
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cold-3 gap-8">
            <CardWrapperUser
              firstContent={`"Arthasya has revolutionized my trading experience. The real-time data and analytics have helped me make more informed decisions."`}
              secoondContent={`- Updesh, Day Trader`}
            />
            <CardWrapperUser
              firstContent={`"As a beginner, I found Arthasya's educational resources invaluable. The platform is intuitive and has helped me gain confidence in trading."`}
              secoondContent={`- Vishal, Novice Investor`}
            />
            <CardWrapperUser
              firstContent={`"The security features of TradePro give me peace of mind. I can trade confidently knowing my investments are protected."`}
              secoondContent={`- Arpan, Long-term Investor`}
            />
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-8">
            Ready to Start Trading?
          </h2>
          <p className="mb-8">
            Join thousands of traders who have already discovered the Arthasya
            advantage.
          </p>
          <Link to="/signup">
            <Button size="lg">Create Your Free Account</Button>
          </Link>
        </section>
      </div>
    </>
  );
}

export default Home;
