import './App.css'
import { Route, Routes } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import Layout from './components/COM_Layout'
import RegisterPage from './pages/RegisterPage'
{/*<Route path="/*" element={<NotFound />} />*/}
import axios from 'axios'
import { UserContextProvider } from './UserContext'


axios.defaults.baseURL = 'http://localhost:4000/'

//Transport cookies
axios.defaults.withCredentials = true;

function App() {


  return (

    
    
    <div>

      <UserContextProvider>
        <Routes>
          <Route path='/' element={<Layout></Layout>}>
              {/* INDEX PAGE */}
              <Route index element={<IndexPage/>} />
              {/* LOGIN PAGE*/}
              <Route path="/login" element={<LoginPage/>}/>
              {/* REGISTER PAGE*/}
              <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
          </Route>
        </Routes>
      </UserContextProvider>
    </div>
  )
}

export default App
