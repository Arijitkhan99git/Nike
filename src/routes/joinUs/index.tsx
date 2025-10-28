import { createFileRoute,  } from '@tanstack/react-router'

export const Route = createFileRoute('/joinUs/')({
  component: RouteComponent,
})

function RouteComponent() {
  
  return <div>Hello "/joinUs"!</div>
}
