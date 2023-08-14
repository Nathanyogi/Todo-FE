import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Box, Container, TextField, Button, IconButton, InputLabel, OutlinedInput, InputAdornment, FormControl, Typography } from "@mui/material";
import todoLogo from '../assets/images/Todo_images/loginLogo.jpeg';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { login, setLoginCredentials } from '../redux/slices/authSlice';

const Login = () => {

    const [showPassword, setShowPassword] = React.useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const authSlice = useSelector((state) => state.authSlice)
    const { isLoggedIn, loginCredentials } = authSlice

    console.log(isLoggedIn)

    React.useEffect(() => {
        if(isLoggedIn) {
            navigate('/home')
        }
    }, [isLoggedIn])

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    

    return(
        <>
            <div style={{height:"100vh"}}>
                <Container sx={{display:"flex", alignItems:"center", justifyContent:"center", height:"100%"}}>
                    <Box 
                    className="border rounded shadow-lg"
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { my: 2 },
                        padding:"20px",
                        width:"50%",
                        height:"auto",
                        // border:"5px solid #1976d2 !important", 
                        // borderStyle:"inset !important"
                    }}
                    noValidate  
                    autoComplete="off"
                    >
                        <div style={{textAlign:"center"}}>
                            <img src={todoLogo} height="200vh"/>
                        </div>
                        <div style={{display:"flex", flexDirection:"column"}}>
                            <TextField label="Email" fullWidth onChange={(e) => dispatch(setLoginCredentials({...loginCredentials, email:e.target.value}))}/>
                            <FormControl variant="outlined" sx={{my:2}} fullWidth>
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    onChange = {(e) => dispatch(setLoginCredentials({...loginCredentials, password:e.target.value})) }
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setShowPassword(!showPassword)}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                            <div>
                                <Button variant="contained" onClick={() => dispatch(login())} fullWidth>Login</Button>
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="mt-3"><Typography variant="caption">(or)</Typography></p>
                            <Typography variant="h6" type="button" onClick={() => navigate('/register')}>create an account ?</Typography>
                        </div>
                    </Box>
                </Container>
            </div>
        
        </>
    )
}

export default Login;