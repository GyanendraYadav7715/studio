import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ProfilePage() {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>
            This is how others will see you on the site.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
            <div className="flex items-center space-x-4">
                <Avatar className="h-24 w-24">
                    <AvatarImage src="https://placehold.co/40x40" />
                    <AvatarFallback>CS</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                    <h2 className="text-2xl font-bold">CloudShift User</h2>
                    <p className="text-muted-foreground">user@cloudshift.dev</p>
                </div>
            </div>
            <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" defaultValue="cloudshift-user" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="user@cloudshift.dev" disabled />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <textarea
                        id="bio"
                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Tell us a little bit about yourself"
                    />
                </div>
                 <Button>Update profile</Button>
            </div>
        </CardContent>
      </Card>
    </div>
  )
}
