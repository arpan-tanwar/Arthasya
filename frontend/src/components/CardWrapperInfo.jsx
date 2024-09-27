import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function CardWrapperInfo({ title, content, icon }) {
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
        </CardContent>
      </Card>
    </>
  );
}

export default CardWrapperInfo;
