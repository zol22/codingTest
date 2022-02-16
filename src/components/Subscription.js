import React, {useEffect, useState} from 'react'
import Card from '@mui/material/Card';
import {CardActions,CardContent,CardHeader,Button, Grid, Typography,Box,TextField} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router';

function Subscription() {

    const [datas, setDatas] = useState(null);
    const [planSelected, setPlanSelected ] = useState(null)
    const [code, setCode ] = useState(''); 
    const [isCode, setIsCode ] = useState('');  
    const [errorCode, setErrorCode] = useState('');
    const history = useNavigate();


    useEffect(() => {
      axios.get('https://api-test.legendaryapplications.com/action/getproducts')
      .then(results => {
         const dataResults = results.data;
         setDatas(dataResults)
      }).catch(err => err.message)
    }, [])

   const discount = () => {
       axios.post('https://api-test.legendaryapplications.com/action/promos/check',{
           code: code,
       }).then(res=> {
           if (res.data.success){
                setIsCode(true);
           } else{
               setIsCode(false)
               setErrorCode('Code not valid')
           }
          
       }).catch(err => err.message)
   }
   const choose =  (name, price) => {
       setPlanSelected({
           name,
           price
       })
       console.log(planSelected)
   }

  return (
      <div style={{textAlign:'center'}}>
      <h1>Our plans</h1>
        <Grid 
        container
        justifyContent="center"
        spacing={2}
   
        >
        {datas?.map(data =>(
            <Grid item xs={12} sm={6} md={3} key={data.id} sx={{margin:1}}>
                <Card sx={{ maxWidth: 345 }} style={{height:'100%'}}>
                    <CardHeader title={data.name} style={{backgroundColor:'#3E88B6'}}/>
                    <CardContent>
                       
                        <Typography variant="body2" color="text.secondary" sx={{padding:0.3}}>
                            {data.description}
                        </Typography>
                        
                        <Typography variant="body2" color="text.secondary" sx={{padding:0.3, margin:3, fontSize:'20px', fontWeight:'bold'}}>
                    {`$ ${data.price}`}
                        </Typography>

                    </CardContent>
                    <CardActions style={{justifyContent:'center', margin:'10%'}}>
                        <Button sx={{padding:0.7}} variant="outlined" size="small" onClick={() => choose(data.name,data.price)}>Choose</Button>
                    </CardActions>
                </Card>
            </Grid>
        ) )} 
        </Grid>
        {planSelected ? (<h3>You Selected <span style={{textDecoration:'underline'}}>'{planSelected.name}</span>. The Price is ${planSelected.price}</h3>) : null }

        <Box 
            component="form"
            sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
            }} 
            utoComplete="off"
            >
            <div>
                <p style={{paddingTop:70}}>Do you have a discount code?</p>
                <TextField
                    required
                    id="outlined-required"
                    label="Enter Code"
                    value={code}
                    onChange={(e)=>setCode(e.target.value)}
                    />
                     <Button sx={{margin:4}} variant="outlined" onClick={discount} size="small">Enter discount</Button>
            </div>
            {isCode ? `You have 10% discount.` : errorCode}
  
            
        </Box>
       
        <Button sx={{margin:4}}variant="outlined" color="error" onClick={()=> history('/')}> Cancel</Button>
    </div>
  )
}

export default Subscription