import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function News() {

    const numbers = [1, 2, 3, 4, 5];
    const [isLoading, setIsLoading] = useState(true);
    const LOADING_TIME = 0; // The loading screen will show for 2 Seconds.

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            await fetch("https://crypto-news-live.p.rapidapi.com/news/coindesk", {
                method: 'GET', // or 'PUT'
                headers: {
                    'x-rapidapi-key': 'fa908767b9msh34e56aeb8c78b68p14342ejsnf30701e89743',
                    'x-rapidapi-host': 'crypto-news-live.p.rapidapi.com'
                }
            })
                .then(res => res.json())
                .then(
                    (result) => {
                        console.log('result: ', result);
                        setData(result);
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {
                        console.log('error', error);
                    }
                )
            setTimeout(() => setIsLoading(false), LOADING_TIME);
        }
        getData();
        // setIsLoading(false);
    }, [])
    console.log('data: ', data);
    if (isLoading) {
        // we haven't finished checking for the token yet
        return <>Loading...</>;
    }


    // getData();


    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {data.map((data, i) => (
                <Card key={i} sx={{ maxWidth: 320 }} style={{ margin: 15 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {data.title}
                        </Typography>
                        <CardActionArea>
                            <Typography variant="body2" color="text.secondary">
                                <a href={data.url}>{data.url}</a>
                            </Typography>
                        </CardActionArea>
                    </CardContent>
                </Card>
            )
            )
            }
        </div >
    )
}


