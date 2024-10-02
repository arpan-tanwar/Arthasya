import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import avatar from "@/assets/avatar.jpg";
import { LogOut, Mail, Phone, Shield } from "lucide-react";

function CardUser() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src={avatar} alt="@johndoe" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>John Doe</CardTitle>
            <CardDescription>Premium Member</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center">
            <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
            <span className="text-sm">john.doe@example.com</span>
          </div>
          <div className="flex items-center">
            <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
            <span className="text-sm">+1 (000) 123-XXXX</span>
          </div>
          <div className="flex items-center">
            <Shield className="mr-2 h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Account verified</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          <LogOut className="mr-2 h-4 w-4" />
          Log out
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CardUser;
