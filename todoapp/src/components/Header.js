import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Avatar } from '@mui/material';
import profile from '../assets/images/uganda.jpeg'
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { useSelector, useDispatch } from 'react-redux'
import { setIsLoggedIn } from '../redux/slices/authSlice';
import Sidebar from './Drawer';
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const [anchorEl, setAnchorEl] = React.useState(false);

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const authSlice = useSelector((state) => state.authSlice)
    const { isLoggedIn } = authSlice

    React.useEffect(() => {
        if(!isLoggedIn) {
            navigate('/login')
        }
    }, [isLoggedIn])

    const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
    setAnchorEl(null);
    };

    const logout = () => {
        setAnchorEl(null)
        dispatch(setIsLoggedIn(false))
    }
    return(
        <>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <Sidebar />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Home
            </Typography>
            {isLoggedIn ? (
                <div>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                >
                    <Avatar src={profile}/>
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={null}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >   
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <Divider sx={{backgroundColor:"skyblue"}}/>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <Divider sx={{backgroundColor:"skyblue"}}/> 
                    <MenuItem onClick={logout} sx={{justifyContent:"center"}}><Button variant='outlined'>logout</Button></MenuItem>
                </Menu>
                </div>
            ):<div><Button variant="outlined" color='inherit' onClick={() => navigate("/login")}>Login</Button></div> }
            </Toolbar>
        </AppBar>
        </Box>
        </>
    )
}

export default Header;