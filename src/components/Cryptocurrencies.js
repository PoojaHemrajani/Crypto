import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';


export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const Cryptocurrencies = (props) => {
    // const hello = props.state.hello;
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get('https://coinranking1.p.rapidapi.com/coins', {
                headers: {
                    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
                    'x-rapidapi-key': 'fa908767b9msh34e56aeb8c78b68p14342ejsnf30701e89743'
                }
            }).catch((e) => {
                console.log(e);
            })
            setData(data.data.coins)
            console.log(data.data.coins);
            setIsLoading(false);
        }
        getData();
    }, [])
    //   console.log(props);
    if (isLoading) {
        return <>Loading..</>
    }


    const coinCard = () => {

        return (
            <>
                {data.map((data, i) => (
                    <Card key={i} sx={{ maxWidth: 320 }} style={{ margin: 15, width: 300, display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: "20px" }}>
                            <Typography>
                                {data.name}
                            </Typography>
                            <div >
                                <img style={{ height: "20px", weight: "20px" }} src={data.iconUrl} alt="cryptoCoin Icon" />
                            </div>
                        </div>
                        <CardContent>
                            <Typography>
                                Price: {parseFloat(numberWithCommas(data?.price)).toFixed(2)}
                            </Typography>
                            <Typography>
                                Market Cap: {data.marketCap}
                            </Typography>
                            <Typography >
                                Daily Change:
                                <span style={{
                                    fontWeight:'bold', marginLeft: 12
                                }}>
                                    {data.change}
                                </span>
                            </Typography>
                        </CardContent>
                    </Card>
                )
                )
                }
            </>
        )
    }
    return (
        <>
           <div>
               <Typography variant='h4'>Crypto Currencies</Typography>
           </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {coinCard()}
            </div >
        </>
    )
}
