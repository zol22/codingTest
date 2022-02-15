import React, { useState } from 'react';
/*import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';*/
import FaceIcon from '@mui/icons-material/Face';
import { Grid, TextField, Button,InputAdornment} from '@mui/material';
import { useNavigate } from 'react-router';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import Greeting from '../undraw/Greeting';

function Login() {
 
   
    const initialFormState = {
        password:' ',
        email:' ',
    }
    const [userData, setUserData ] = useState(initialFormState);
    const [inputPropsState,setInputPropsState] = useState(null);
    const history = useNavigate();

    const handleInputChange = (e) => {
        const { name, value} = e.target; 
       /*. In functional components you need to spread the oldData and then change what you like. */
       setUserData({ ...userData, [name] : value })
       setInputPropsState(null);
    }


    const login = () => {
        const inputProps = {};
        const error = Object.values(userData).some(x => x === ' '); // Check if some of the object values are empty
        if (error) {
            inputProps.error = true ;
            inputProps.helperText = 'Empty field';
            setInputPropsState(inputProps);
            console.log(inputProps)
        } 
        else {
            //dispatch(register(userData));
            history('/subscription')
        }
        
    }

    const register = () => {
        history('/register')
    }
        return (
            <Grid container style={{ minHeight:'100vh'}}>
                <Grid item xs={12} sm={6} style={{backgroundColor:'#3E88B6'}}>   
                    {/*<Grid container sx={{padding:5}}>
                        <Grid item xs={6} sm={6}>
                            <h1 style={{padding:5, fontSize:'18px'}}>Legendary Collections</h1>   
                            <p style={{padding:5, fontSize:'14px'}} >The organized Colletor'app</p>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <Button sx={{margin:1}} variant="contained" style={{fontSize:'12px',padding:8}} endIcon={<ChatBubbleOutlineIcon />}>Send Alpha FeedBack</Button>
                            <Button sx={{margin:1}} variant="contained" style={{fontSize:'12px',padding:8}} endIcon={<LocalLibraryIcon />}>Learn More</Button>
                        </Grid>

                    </Grid> */}
                    <Grid container alignItems="center" justifyContent="center" direction="column" style={{ minHeight:'100vh', paddingLeft:'0px', overflow:'hidden'}}>
                        <Grid item xs={12} sm={12} sx={{padding:3}}>
                            <h1 style={{textAlign:'center'}}>Welcome Back !</h1>
                            <Greeting />
                        </Grid>
                        <Grid item xs={12} sm={12} sx={{padding:3}}>
                            <p style={{padding:'10px 10px', margin:10,}}>It has been a while since we have seen you. Let''s get back to collecting, together!</p>
    
                        </Grid>

                    </Grid> 
                       
                </Grid>
                <Grid container item xs={12} sm={6} alignItems="center" justifyContent="center" style={{ minHeight:'100vh', paddingLeft:'0px'}}>
                    <Grid item xs={6} style={{ textAlign:'center'}}>
                        <FaceIcon fontSize="large" style={{padding:'10px 10px'}}/>
                        <h1>Login</h1>

                        <TextField {...inputPropsState} name="email" required fullWidth label='Email' variant="outlined" margin="dense"
                            value={userData.email} onChange={handleInputChange}
                              InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="end">
                                            <AccountCircleIcon/>
                                        </InputAdornment>
                                    ),
                                    }}
                        />
                        <TextField {...inputPropsState} name="password" required fullWidth label="Password" variant="outlined" margin="dense" type="password"
                            value={userData.password}  onChange={handleInputChange}
                               InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="end">
                                        <LockIcon />
                                        </InputAdornment>
                                    ),
                                    }}
                        />
                      
                        <p style={{textAlign:'right',fontSize: '12px'}}>Forgot Username/Password?</p>
                        <Button sx={{margin: 5}} variant="outlined" onClick={login}>Log in</Button>
                        <p style={{fontSize: '12px'}}>Don't you have an account?  <span style={{textDecoration:'underline', cursor:'pointer'}} onClick={register}>Create an account</span></p>
                    </Grid>
                
                </Grid>
            </Grid>
          
           
        )
}

export default Login