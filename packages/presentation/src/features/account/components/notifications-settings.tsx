import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "@workspace/ui/components/card";
import { Switch } from "@workspace/ui/components/switch";
import { Label } from "@workspace/ui/components/label";

export function NotificationsSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Email Notifications</CardTitle>
        <CardDescription>
          Manage your email notification preferences.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Product Updates</Label>
            <p className="text-sm text-muted-foreground">
              Receive updates about new features and improvements
            </p>
          </div>
          <Switch defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Security Alerts</Label>
            <p className="text-sm text-muted-foreground">
              Get notified about important security updates
            </p>
          </div>
          <Switch defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Marketing Emails</Label>
            <p className="text-sm text-muted-foreground">
              Receive promotional emails and offers
            </p>
          </div>
          <Switch />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Newsletter</Label>
            <p className="text-sm text-muted-foreground">
              Subscribe to our monthly newsletter
            </p>
          </div>
          <Switch />
        </div>
      </CardContent>
    </Card>
  );
}
