import * as React from 'react';
import { Box, Button, Container, FormControl, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from "@mui/material";
import {Visibility, VisibilityOff} from '@mui/icons-material'
import logo from '../assets/images/Todo_images/loginLogo.jpeg'
import { useNavigate } from "react-router-dom"; 
import { useSelector, useDispatch } from "react-redux"
import { setRegisterDetails } from "../redux/slices/registerSlice";


const Register = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [show, setShow] = React.useState({
        password:false,
        confirmPass:false
    })

    const registerSlice = useSelector((state) => state.registerSlice)

    const { registerDetails } = registerSlice 

    const handleMouseDownPassword = (event) => {
        event.preventDefault()
    }

    return(
        <>
            <Container className="vh-100" sx={{ 
            display:"flex", 
            alignItems:"center",
            px:"0 !important" }} >
                <div className="d-flex flex-row shadow-lg" style={{height:"80%", width:"100%", borderRadius:"20px !important", color:"red"}}>
                    <Box className="content-center" sx={{backgroundColor:"white", width:"50%"}}  >
                        <img src={logo} />
                    </Box>
                    <Box className="content-center bg-opacity-25" sx={{backgroundColor:"#f0c26e", width:"50%"}}>
                        <div>
                            <Typography 
                            textAlign={"center"} sx={{
                                fontWeight:"900 !important",
                                color:"red",
                                margin: "20px",
                            }}
                            variant="h5"
                            >REGISTERATION FORM
                            </Typography>
                            <Box >
                                <Box sx={{mx:"50px", "& .MuiTextField-root":{my:"10px", width:"100% !important"}}}>
                                    <TextField variant="standard" label="Name" onChange={(e)=> dispatch(setRegisterDetails({...registerDetails, name:e.target.value}))}/>
                                    <TextField variant="standard" label="Email" onChange={(e)=> dispatch(setRegisterDetails({...registerDetails, email:e.target.value}))}/>
                                    <TextField variant="standard" label="Mobile" onChange={(e)=> dispatch(setRegisterDetails({...registerDetails, mobile:e.target.value}))}/>
                                    <FormControl variant="standard" sx={{my:2}} fullWidth>
                                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                        <Input
                                            id="standard-adornment-password"
                                            type={show.password ? 'text' : 'password'}
                                            onChange={(e) => dispatch(setRegisterDetails({...registerDetails, password:e.target.value}))}
                                            endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => setShow({...show, password:!show.password})}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                                >
                                                {show.password ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                            }
                                            label="Password"
                                        />
                                    </FormControl>
                                    <FormControl variant="standard" sx={{my:2}} fullWidth>
                                        <InputLabel htmlFor="standard-adornment-password">Confirm Password</InputLabel>
                                        <Input
                                            id="outlined-adornment-password"
                                            type={show.confirmPass ? 'text' : 'password'}
                                            onChange={(e) => dispatch(setRegisterDetails({...registerDetails, confirmPass:e.target.value}))}
                                            endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => setShow({...show, confirmPass:!show.confirmPass})}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                                >
                                                {show.confirmPass ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                            }
                                            label="Password"
                                        />
                                    </FormControl>
                                    <Button variant="contained" sx={{mt:"20px"}} fullWidth>Register</Button>
                                    <Box textAlign={"center"} sx={{color:"black", "& .MuiTypography-root":{mt:"10px"}, my:"20px"}}>
                                        <Typography>(or)</Typography>
                                        <Typography variant="h6"><b type="button" onClick={() => navigate("/login") } >Already have an account ?</b></Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </div>
                    </Box>
                </div>
            </Container>
        </>
    )
}

export default Register;    