import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function SettingsPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="mx-auto grid w-full max-w-6xl gap-6">
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>
                Manage your account settings and preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <h3 className="text-lg font-medium">Notifications</h3>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="email-notifications" defaultChecked />
                        <Label htmlFor="email-notifications">Email notifications</Label>
                    </div>
                     <div className="flex items-center space-x-2">
                        <Checkbox id="push-notifications" />
                        <Label htmlFor="push-notifications">Push notifications</Label>
                    </div>
                </div>
                 <div className="space-y-2">
                    <h3 className="text-lg font-medium">Security</h3>
                     <div className="flex items-center space-x-2">
                        <Checkbox id="2fa" />
                        <Label htmlFor="2fa">Enable Two-Factor Authentication</Label>
                    </div>
                </div>
                 <Button>Save changes</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
