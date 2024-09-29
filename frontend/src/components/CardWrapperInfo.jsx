import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function CardWrapperInfo({ title, content, icon, link }) {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            {icon}
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>{content}</p>
          {link && (
            <Button variant="link" className="mt-2 p-0">
              {link}
            </Button>
          )}
        </CardContent>
      </Card>
    </>
  );
}

export default CardWrapperInfo;
