import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="flex justify-between px-4 py-4 ">
        <Link to="/">
          <h1 className="text-3xl font-bold">Arthasya</h1>
        </Link>
        <div className="flex">
          <Link to="/">
            <Button
              variant="link"
              className={
                useLocation().pathname === "/"
                  ? "text-base underline"
                  : "text-base"
              }
            >
              Home
            </Button>
          </Link>
          <Link to="/about">
            <Button
              variant="link"
              className={
                useLocation().pathname === "/about"
                  ? "text-base underline"
                  : "text-base"
              }
            >
              About
            </Button>
          </Link>
          <Link to="/support">
            <Button
              variant="link"
              className={
                useLocation().pathname === "/support"
                  ? "text-base underline"
                  : "text-base"
              }
            >
              Support
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button
              variant="link"
              className={
                useLocation().pathname === "/dashboard"
                  ? "text-base underline"
                  : "text-base"
              }
            >
              Dashboard
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/login" className="mr-1">
            <Button variant="outline">Login</Button>
          </Link>
          <Link to="/signup" className="ml-1">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </header>

      <hr />
    </>
  );
}

export default Header;
