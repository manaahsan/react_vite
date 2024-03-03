import { createLazyFileRoute } from '@tanstack/react-router';
import Card from '../components/card';

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <div className=" h-screen p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
       
    </div>
    </div>
  )
}