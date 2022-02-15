import React, {useEffect, useState} from 'react'
import Card from '@mui/material/Card';
import {CardActions,CardContent,CardHeader,Button, Grid, Typography} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router';
import CheckIcon from '@mui/icons-material/Check';

function Subscription() {

    const [datas, setDatas] = useState(null);
    
    const history = useNavigate();


    useEffect(() => {
      axios.get('https://api-test.legendaryapplications.com/action/getproducts')
      .then(results => {
         const dataResults = results.data;
         setDatas(dataResults)
      })
    }, [])
   

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
                        <Button sx={{padding:0.7}} variant="outlined" size="small">Choose</Button>
                    </CardActions>
                </Card>
            </Grid>
        ) )} 
        </Grid>
        <Button sx={{margin:4}}variant="outlined" color="error" onClick={()=> history('/')}> Cancel</Button>
    </div>
  )
}

export default Subscription