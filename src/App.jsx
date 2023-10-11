import './App.css'
import { Header } from './components/Header'
import { Navigation } from './components/Navigation'
import { ChargeSection } from './components/ChargeSection'

function App() {
  return (
    <> 
      <Navigation />
      <main className='snap-y snap-mandatory relative w-full h-screen overflow-auto scroll-smooth'>
        <div className='snap-center'>
          <Header />
        </div>
        <div className='snap-center'>
          <ChargeSection />
        </div>
      </main>
    </>
  )
}

export default App
