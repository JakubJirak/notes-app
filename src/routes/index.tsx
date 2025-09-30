import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <section className="text-center">
      <header className="mt-4">
        <h1 className='text-4xl font-bold'>NOTES APP</h1>
        <p>sondic ma masivni pero</p>
      </header>
      <div className="mt-4 space-x-2">
        <Button><a href="/login">Login</a></Button>
        <Button><a href="/register">Register</a></Button>
        <Button><a href="/menu">Menu</a></Button>
      </div>
    </section>
  )
}
