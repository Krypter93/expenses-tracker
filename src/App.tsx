import { Header } from './pages/Header'
import { DataForm } from './pages/ExpenseForm'
import { DataTable } from './pages/DataTable'
import { useSelector } from 'react-redux'
import { RootState } from './redux/store'
import { useEffect } from 'react'
import './App.css'

function App() {
  const darkModeState = useSelector((state: RootState) => state.darkMode.value)
  const dataInfo = useSelector((state: RootState) => state.data)
  

  useEffect(() => {
    document.body.classList.remove('bg-white', 'bg-slate-600')

    if (!darkModeState) {
      document.body.classList.add('bg-white')
    } else {
      document.body.classList.add('bg-slate-600')
    }
  }, [darkModeState])
  
  return (
    <>
     <Header />
     <DataForm />
     { dataInfo.length > 0 && <DataTable />}
    </>
  )
}

export default App
