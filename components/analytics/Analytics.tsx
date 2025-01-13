'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  { source: "YouTube", sales: 400 },
  { source: "TikTok", sales: 300 },
  { source: "Instagram", sales: 200 },
  { source: "Twitch", sales: 150 },
  { source: "Twitter", sales: 100 },
]

const productData = [
  { name: "Roblox-themed Gaming Headset", sales: 150, revenue: 7500 },
  { name: "Custom YouTube Play Button Lamp", sales: 100, revenue: 3000 },
  { name: "Streamer's Snack Box Subscription", sales: 75, revenue: 1875 },
]

export function Analytics() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-purple-600">Traffic Sources</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="source" />
              <YAxis />
              <Tooltip 
                contentStyle={{ 
                  background: 'rgba(255, 255, 255, 0.8)', 
                  border: 'none', 
                  borderRadius: '8px', 
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' 
                }}
              />
              <Bar dataKey="sales" fill="#8884d8" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-purple-600">Top Products</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {productData.map((product, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                <div>
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.sales} sales</p>
                </div>
                <Badge variant="secondary" className="text-lg">
                  ${product.revenue}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

