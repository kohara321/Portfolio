import './App.css'
import './index.css'
import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Home } from './components/sections/Home'
import { Contact } from './components/sections/Contact'
import { Projects } from './components/sections/Projects'


function App() {

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#home') {
        window.history.replaceState('', document.title, window.location.pathname + window.location.search);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <Contact />
    </>
  )
}

export default App
