import './App.css'
import './index.css'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <>
      <h1>Hello World</h1>
      <div className='min-h-screen transition-opacity duration-700'>
        <Navbar />
      </div>
    </>
  )
}

export default App
