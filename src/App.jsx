import './App.css'
import './index.css'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <div className='min-h-screen w-full relative bg-gradient-to-r from-rose-600 via-indigo-800 to-sky-700 flex items-center justify-center text-center flex-col gap-10 text-white p-52'>
        <h1 className='text-7xl'>Home Section</h1>
        <p className='text-3xl'> Lorem ipsum odor amet, consectetuer adipiscing elit. Lobortis platea natoque mauris nec ex cubilia taciti. Eleifend adipiscing sem phasellus laoreet molestie sit. Quis faucibus sit fames sapien; ridiculus nec.</p>

      </div>

      <div className='min-h-screen w-full relative bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 flex items-center justify-center text-center flex-col gap-10 text-white p-52'>
        <h1 className='text-7xl'>Project Section</h1>
        <p className='text-3xl'> Lorem ipsum odor amet, consectetuer adipiscing elit. Lobortis platea natoque mauris nec ex cubilia taciti. Eleifend adipiscing sem phasellus laoreet molestie sit. Quis faucibus sit fames sapien; ridiculus nec.</p>
      </div>

      <div className='min-h-screen w-full relative bg-gradient-to-r from-yellow-500 to-amber-500 flex items-center justify-center text-center flex-col gap-10 text-white p-52'>
        <h1 className='text-7xl'>Contact Section</h1>
        <p className='text-3xl'> Lorem ipsum odor amet, consectetuer adipiscing elit. Lobortis platea natoque mauris nec ex cubilia taciti. Eleifend adipiscing sem phasellus laoreet molestie sit. Quis faucibus sit fames sapien; ridiculus nec.</p>
      </div>
    </>
  )
}

export default App
