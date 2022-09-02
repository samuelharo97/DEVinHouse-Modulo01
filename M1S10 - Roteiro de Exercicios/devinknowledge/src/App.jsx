import { AppContextProvider } from '@context'
import './App.css'
import { Home } from './pages'
function App() {
  return (
    <AppContextProvider>
      <Home />
    </AppContextProvider>
  )
}

export default App
