import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

function ProfileTabAccount() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Settings</CardTitle>
        <CardDescription>
          Manage your account preferences and trading settings.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Two-Factor Authentication</Label>
            <CardDescription>Enhance your account security</CardDescription>
          </div>
          <Switch />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Trade Confirmations</Label>
            <CardDescription>
              Require confirmation for all trades
            </CardDescription>
          </div>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Price Alerts</Label>
            <CardDescription>
              Receive notifications for price changes
            </CardDescription>
          </div>
          <Switch defaultChecked />
        </div>
      </CardContent>
    </Card>
  );
}

export default ProfileTabAccount;
