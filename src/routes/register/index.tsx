import { RegisterForm } from '@/components/register/RegisterForm'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/register/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex mt-10 items-center justify-center">
      <RegisterForm />
    </div>
  )
}
