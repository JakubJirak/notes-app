import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="text-center">
      <header className="">
        <Button><a href="/login">Login</a></Button>
        <Button><a href="/register">Register</a></Button>
        <Button><a href="/menu">Menu</a></Button>
      </header>
      
    </div>
  )
}
