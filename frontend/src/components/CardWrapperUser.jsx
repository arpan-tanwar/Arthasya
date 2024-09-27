import { Card, CardContent } from "@/components/ui/card";

function CardWrapperUser({ firstContent, secoondContent }) {
  return (
    <>
      <Card>
        <CardContent className="pt-6">
          <p className="italic mb-4">{firstContent}</p>
          <p className="font-semibold">{secoondContent}</p>
        </CardContent>
      </Card>
    </>
  );
}

export default CardWrapperUser;
