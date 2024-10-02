import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileTabAccount from "./ProfileTabAccount";
import ProfileTabSecurity from "./ProfileTabSecurity";

function ProfileTab() {
  return (
    <Tabs defaultValue="account" className="mt-6">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <ProfileTabAccount />
      </TabsContent>
      <TabsContent value="security">
        <ProfileTabSecurity />
      </TabsContent>
    </Tabs>
  );
}

export default ProfileTab;
