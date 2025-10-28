import { createFileRoute,  } from '@tanstack/react-router'

export const Route = createFileRoute('/sale/')({
  component: RouteComponent,
})

function RouteComponent() {
  
  return <div>Hello "/sale"!</div>
}
