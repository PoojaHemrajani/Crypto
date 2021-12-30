import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function News() {

    const numbers = [1, 2, 3, 4, 5];
    
    const [data, setData] = useState([]);

    // useEffect(() => {
    //     getData();
    // })

    const getData = () => {
        fetch("https://crypto-news-live.p.rapidapi.com/news/coindesk", {
            method: 'GET', // or 'PUT'
            headers : {
                'x-rapidapi-key': '1a2c45901cmsh114ef477c1ea3f0p10f461jsn3ce1659d6f51',
                'x-rapidapi-host': 'crypto-news-live.p.rapidapi.com'
            }
        })
            .then(res => res.json())
            .then(
              (result) => {
                setData(result);
                // console.log(result);
              },
              // Note: it's important to handle errors here
              // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
              (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
              }
        )
    }

    getData();
    // console.log(data);  

    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {numbers.map((number) => (
                <Card sx={{ maxWidth: 320 }} style={{margin: 15}}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
            )
            )
            }
        </div>
    )
}


