import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ideasData from '@/config/ideas.json'

export function ApprovalWorkflow() {
  return (
    <div className="max-w-4xl mx-auto">
      <Tabs defaultValue="approved" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="approved">Approved</TabsTrigger>
          <TabsTrigger value="declined">Declined</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
        </TabsList>
        {["approved", "declined", "pending"].map((status) => (
          <TabsContent key={status} value={status}>
            <div className="grid gap-4">
              {ideasData.mockIdeas
                .filter((idea) => idea.status === status)
                .map((idea) => (
                  <Card key={idea.id}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        {idea.name}
                      </CardTitle>
                      <Badge
                        variant={
                          status === "approved"
                            ? "default"
                            : status === "declined"
                            ? "destructive"
                            : "secondary"
                        }
                      >
                        {status}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xs text-muted-foreground">
                        {status === "approved"
                          ? "Ready for production!"
                          : status === "declined"
                          ? "Better luck next time!"
                          : "Waiting for review..."}
                      </p>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}