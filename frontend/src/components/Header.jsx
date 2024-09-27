import { Button } from "@/components/ui/button";

function Header() {
  return (
    <>
      <header className="flex justify-between px-4 py-4 ">
        <h1 className="text-3xl font-bold">Arthasya</h1>
        <div className="flex">
          <a href="">
            <Button variant="link" className="text-base">
              Home
            </Button>
          </a>
          <a href="">
            <Button variant="link" className="text-base">
              About
            </Button>
          </a>
          <a href="">
            <Button variant="link" className="text-base">
              Contact
            </Button>
          </a>
        </div>
        <div>
          <a href="" className="mr-1">
            <Button variant="outline">Login</Button>
          </a>
          <a href="" className="ml-1">
            <Button>Sign Up</Button>
          </a>
        </div>
      </header>

      <hr />
    </>
  );
}

export default Header;
