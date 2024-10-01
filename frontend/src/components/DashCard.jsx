import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function DashCard({ title, icon, mainContent, footerContent }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{mainContent}</div>
        <p className="text-xs text-muted-foreground">{footerContent}</p>
      </CardContent>
    </Card>
  );
}

export default DashCard;
