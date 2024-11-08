import { Header } from './pages/Header'
import { DataForm } from './pages/ExpenseForm'
import { DataTable } from './pages/DataTable'
import './App.css'

function App() {
  

  return (
    <>
     <Header />
     <DataForm />
     {localStorage.getItem('expenses') && <DataTable />}
    </>
  )
}

export default App
