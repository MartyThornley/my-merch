import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import productsData from '@/config/products.json'

export function ProductionTracker() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid gap-6">
        {productsData.mockProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold flex items-center justify-between">
                <span>{product.name}</span>
                <Badge
                  variant={
                    product.status === "Completed"
                      ? "default"
                      : product.status === "In Progress"
                      ? "secondary"
                      : "outline"
                  }
                >
                  {product.status}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mt-2">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      product.status === "Completed"
                        ? "bg-green-500"
                        : product.status === "In Progress"
                        ? "bg-yellow-500"
                        : "bg-blue-500"
                    }`}
                    style={{ width: `${product.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 mt-1">{product.progress}% Complete</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}