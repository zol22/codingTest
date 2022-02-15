import React, { useState } from 'react'
/*import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';*/
import { Grid, TextField, Button} from '@mui/material';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { register } from '../features/userSlice';
import FaceIcon from '@mui/icons-material/Face';
import Image from '../undraw/Image'



function Register() {

    const initialFormState = {
        username:' ',
        email:' ',
        password: ' ',
        firstname: ' ',
        lastname: ' ',
        address: ' ',
        city:' ',
        state: ' ',
        country:' '
    }

    const [userData, setUserData ] = useState(initialFormState);
    const [inputPropsState,setInputPropsState] = useState(null);
    const history = useNavigate();

    const dispatch = useDispatch();

    const login = () => {
        history('/')
    }
    const createAccount = () => {
        const inputProps = {};
        const error = Object.values(userData).some(x => x === ' '); // Check if some of the object values are empty
        console.log(error)
        if (error) {
            inputProps.error = true ;
            inputProps.helperText = 'Empty field';
            setInputPropsState(inputProps);
            console.log(inputProps)
        } else {
            dispatch(register(userData));
            history('/subscription')
        }
        
    }
    const handleInputChange = (e) => {
        const { name, value} = e.target; 
       /*. In functional components you need to spread the oldData and then change what you like. */
       setUserData({ ...userData, [name] : value })
       setInputPropsState(null);
    }


        return (
            <Grid container style={{ minHeight:'100vh'}}>
                <Grid item xs={12} sm={6} style={{backgroundColor:'#3E88B6'}}>   
                    {/*<Grid container sx={{padding:5}}>
                        <Grid item xs={6} sm={6}>
                        <Undraw name="coding" />
                            <h1 style={{padding:5, fontSize:'18px'}}>Legendary Collections</h1>   
                            <p style={{padding:5, fontSize:'14px'}} >The organized Colletor'app</p>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <Button sx={{margin:1}} variant="contained" style={{fontSize:'12px',padding:8}} endIcon={<ChatBubbleOutlineIcon />}>Send Alpha FeedBack</Button>
                            <Button sx={{margin:1}} variant="contained" style={{fontSize:'12px',padding:8}} endIcon={<LocalLibraryIcon />}>Learn More</Button>
                        </Grid>

                    </Grid>  */}
                    <Grid container alignItems="center" justifyContent="center" direction="column" style={{ minHeight:'100vh', paddingLeft:'0px', overflow:'hidden'}}>
                        <Grid item xs={12} sm={12} sx={{padding:3}}>
                            <h2 style={{textAlign:'center'}}>Let's begin connecting together!</h2>
                            <Image />
                        </Grid>
                        <Grid item xs={12} sm={12} sx={{padding:3}}>
                            <p style={{padding:'10px 10px', margin:10,textAlign:'center'}}>Please enter the required information to create a new account on Legendary Collections</p>
    
                        </Grid>

                    </Grid> 
                       
                </Grid>
                <Grid container item xs={12} sm={6} alignItems="center" justifyContent="center" style={{ minHeight:'100vh', paddingLeft:'0px'}}>
                    <Grid item xs={6} style={{ textAlign:'center'}}>
                        <h1>Create Account</h1>
                        <FaceIcon fontSize="large" style={{padding:'10px 10px'}}/>
                        <TextField {...inputPropsState} name="username" value={userData.username} onChange={handleInputChange} required fullWidth label="Username" variant="outlined" margin="dense" />
                        <TextField {...inputPropsState} name="email" value={userData.email} onChange={handleInputChange} required fullWidth label="Email" variant="outlined" margin="dense" />
                        <TextField {...inputPropsState} name="password" value={userData.password} onChange={handleInputChange} required  fullWidth label="Password" variant="outlined" margin="dense" />
                        <TextField {...inputPropsState} name="firstname" value={userData.firstname} onChange={handleInputChange} required fullWidth label="First Name" variant="outlined" margin="dense" />
                        <TextField {...inputPropsState} name="lastname" value={userData.lastname} onChange={handleInputChange} required fullWidth label="Last Name" variant="outlined" margin="dense" />
                        <TextField {...inputPropsState} name="address" value={userData.address} onChange={handleInputChange} required fullWidth label="Address" variant="outlined" margin="dense" />
                        <TextField {...inputPropsState} name="city" value={userData.city} onChange={handleInputChange} required fullWidth label="City" variant="outlined" margin="dense" />
                        <TextField {...inputPropsState} name="state" value={userData.state} onChange={handleInputChange} required fullWidth label="State" variant="outlined" margin="dense" />
                        <TextField {...inputPropsState} name="country" value={userData.country} onChange={handleInputChange} required fullWidth label="Country" variant="outlined" margin="dense" />

                        <Button sx={{margin: 5}} variant="outlined" onClick={createAccount}>Create my account</Button>
                        <p style={{fontSize: '12px', margin:10, padding:10}}>Already have an account?  <span style={{textDecoration:'underline', cursor:'pointer'}} onClick={login}>Login</span></p>
                    </Grid>
                
                </Grid>
            </Grid>
          
           
        )
}

export default Register;