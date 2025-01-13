import { ApprovalWorkflow } from '@/components/approval/ApprovalWorkflow'

export default function ApprovalWorkflowPage() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6 text-purple-600">Idea Vault</h1>
      <p className="text-xl mb-8 text-gray-600">Manage your awesome product ideas!</p>
      <ApprovalWorkflow />
    </div>
  )
}

