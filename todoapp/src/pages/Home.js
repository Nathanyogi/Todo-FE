import { useSelector, useDispatch } from "react-redux"
import { setUserDetails } from "../redux/slices/userSlice"

const Home = () => {
    
    const dispatch = useDispatch()
    const userSlice = useSelector((state) => state.userSlice)
    const { userDetails } = userSlice
    return(
        <>
        <h1>{userDetails.name}</h1>
        <h1>{userDetails.email}</h1>
        <button onClick={() => dispatch(setUserDetails())}>click me</button>
        </>
        
    )
}

export default Home;