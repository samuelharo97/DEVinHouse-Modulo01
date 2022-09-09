import { ThemeContextProvider } from '@context'
import { Layout } from '@layout'

function App() {
  return (
    <ThemeContextProvider>
      <Layout />
    </ThemeContextProvider>
  )
}

export default App
