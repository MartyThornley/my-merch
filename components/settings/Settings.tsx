import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export function Settings() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">Creator Profile</h2>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Creator Name</Label>
              <Input id="name" placeholder="Your awesome creator name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
          </div>
        </div>
        <Separator />
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">Creator Style</h2>
          <div className="grid gap-4">
            <div>
              <Label>Chosen Fonts</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="secondary">Pixelated</Badge>
                <Badge variant="secondary">Futuristic</Badge>
                <Badge variant="secondary">Retro</Badge>
              </div>
            </div>
            <div>
              <Label>Color Scheme</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="secondary" style={{backgroundColor: '#FF6B6B', color: 'white'}}>Vibrant Red</Badge>
                <Badge variant="secondary" style={{backgroundColor: '#4ECDC4', color: 'white'}}>Teal</Badge>
                <Badge variant="secondary" style={{backgroundColor: '#45B7D1', color: 'white'}}>Sky Blue</Badge>
              </div>
            </div>
            <div>
              <Label>Product Categories</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="secondary">Gaming Gear</Badge>
                <Badge variant="secondary">Stream Accessories</Badge>
                <Badge variant="secondary">Roblox Merch</Badge>
              </div>
            </div>
          </div>
          <Button className="mt-4">Edit Creator Style</Button>
        </div>
        <Separator />
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">Creator Gallery</h2>
          <Input id="images" type="file" multiple className="mb-4" />
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-200 h-24 rounded-md animate-pulse"></div>
            <div className="bg-gray-200 h-24 rounded-md animate-pulse"></div>
            <div className="bg-gray-200 h-24 rounded-md animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

