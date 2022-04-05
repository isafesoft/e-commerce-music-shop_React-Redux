import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addToCart, fetchData} from "../../action/songAction";
import {Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@mui/material";


const Main = () => {
    const dispatch = useDispatch()
    const songs = useSelector(state => state.SongReducer.sortSongs)
    useEffect(() => {
        fetchData()(dispatch)
    }, [])


    return (
        <>
            <Grid sx={{flexGrow: 1}} container spacing={2}>
                {
                    songs.map((value, index) => {
                        return (
                            <Grid item xs={4} key={index}>
                                <Grid container justifyContent='center'>
                                    <Card sx={{maxWidth: 350}} >
                                        <CardActionArea>
                                            <CardMedia
                                                component='img'
                                                height='350'
                                                image={value.cover}
                                                alt={value.title}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant='h5' component='div'>
                                                    {value.title}
                                                </Typography>
                                                <Typography variant='body2' component='div'>
                                                    {value.artist}
                                                </Typography>
                                                <Typography variant='body2' >
                                                    {value.price}
                                                </Typography>
                                                <Typography component='div'>
                                                <Button  sx={{margin:'auto',display:'block'}} onClick={()=>{addToCart(value)(dispatch)}}>
                                                    ADD TO CART
                                                </Button>
                                                </Typography>
                                            </CardContent>

                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            </Grid>
                        )
                    })
                }


            </Grid>

        </>
    )
}

export default Main