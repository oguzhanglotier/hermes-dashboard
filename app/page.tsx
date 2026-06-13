import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Hermes Dashboard</h1>
          <p className="text-gray-400 mt-1">AI Agent Operating System</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">Run New Task</Button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-lg text-white">Memory Usage</CardTitle>
            <CardDescription className="text-gray-400">Qdrant vector store</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-400">1.2 GB / 4 GB</div>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: "30%" }} />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-lg text-white">Active Agents</CardTitle>
            <CardDescription className="text-gray-400">Sub-agents running</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-400">5 Agents</div>
            <p className="text-sm text-gray-400 mt-1">Open Interpreter · AutoGPT · LangChain</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-lg text-white">Integrations</CardTitle>
            <CardDescription className="text-gray-400">Connected services</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-green-400">●</span> Qdrant + AgentMemory
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">●</span> Open Interpreter
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">●</span> LangChain
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">●</span> Hugging Face
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-lg text-white">Recent Tasks</CardTitle>
            <CardDescription className="text-gray-400">Last 24 hours</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { task: "Memory search: AI agents", status: "completed", time: "2 min ago" },
                { task: "Code execution: Python script", status: "completed", time: "15 min ago" },
                { task: "Agent coordination: Research task", status: "running", time: "1 hour ago" },
                { task: "Embedding generation: 128 texts", status: "completed", time: "3 hours ago" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className={item.status === "completed" ? "text-green-400" : "text-yellow-400"}>
                      {item.status === "completed" ? "✅" : "⏳"}
                    </span>
                    <span className="text-gray-300">{item.task}</span>
                  </div>
                  <span className="text-gray-500">{item.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-lg text-white">Quick Actions</CardTitle>
            <CardDescription className="text-gray-400">Common operations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                Search Memory
              </Button>
              <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                Run Code
              </Button>
              <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                Manage Agents
              </Button>
              <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                View Logs
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
