import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Oops! It seems like this trading route has been delisted. The page
          you're looking for doesn't exist or has been moved to a different
          exchange.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/" className="flex items-center">
            <Button>
              <Home className="mr-2 h-4 w-4" /> Return to Main Exchange
            </Button>
          </Link>
          <Link to="javascript:history.back()" className="flex items-center">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
