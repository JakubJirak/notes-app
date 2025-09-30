import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/menu/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/menu/"!</div>
}
