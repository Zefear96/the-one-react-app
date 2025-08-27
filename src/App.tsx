import './App.css'
import AppRoutes from './routes/AppRoutes'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './store/AuthProvider'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
