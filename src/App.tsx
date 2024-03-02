
import './App.css'
import Card from './components/card'

function App() {

  return (
    <>
    <div className="bg-gray-200 h-screen w-screen p-2">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
       
    </div>
    </>
  )
}

export default App
