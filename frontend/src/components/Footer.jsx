import { Button } from "@/components/ui/button";
function Footer() {
  return (
    <>
      <hr />
      <footer className="mt-4">
        <div className="text-center text-muted-foreground">
          &copy; Arthasya. All rights reserved.
        </div>
        <div className="text-center">
          <a href="">
            <Button
              variant="link"
              className="text-xs -mr-2 text-muted-foreground"
            >
              Terms of Service
            </Button>
          </a>
          <a href="">
            <Button
              variant="link"
              className="text-xs -ml-2 text-muted-foreground"
            >
              Privacy Policy
            </Button>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
