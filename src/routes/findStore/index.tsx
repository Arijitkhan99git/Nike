import Store from '@/modules/store/Store'
import { createFileRoute,  } from '@tanstack/react-router'

export const Route = createFileRoute('/findStore/')({
  component: RouteComponent,
})

function RouteComponent() {
  
  return <Store/>
}
