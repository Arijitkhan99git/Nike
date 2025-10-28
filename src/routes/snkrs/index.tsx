import { createFileRoute,  } from '@tanstack/react-router'

export const Route = createFileRoute('/snkrs/')({
  component: RouteComponent,
})

function RouteComponent() {
  
  return <div>Hello "/snkrs"!</div>
}
