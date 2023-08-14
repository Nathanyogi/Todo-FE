import {
    Routes, Route, useLocation
} from 'react-router-dom'
import Home from './pages/Home'
import Todo from './pages/Todo'
import Login from './pages/Login'
import Header from './components/Header'
import Register from './pages/Register'


const Router = () => {

    const location  = useLocation()
    const path = location.pathname

    let header_not_need = ['/login', "/register"]

    return(

        <>
        { !header_not_need.includes(path) && <Header />}
        
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/todo' element={<Todo/>} />
            <Route path='/register' element={<Register />} />
        </Routes>
        </>

        
    )
}


export default Router;