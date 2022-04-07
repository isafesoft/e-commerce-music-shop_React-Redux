import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addToCart, fetchData, initCart} from "../../action/songAction";
import {Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";


const Main = () => {
    const dispatch = useDispatch()
    const songs = useSelector(state => state.SongReducer.sortSongs)

    const cartLocalStorage = JSON.parse(localStorage.getItem('cart'))
    useEffect(() => {
        fetchData()(dispatch)
        if(cartLocalStorage.length !== 0){
        // let storage = JSON.parse(localStorage.getItem('cart'))
        initCart(cartLocalStorage)(dispatch)
        }
    }, [])




    return (
        <>
            <Grid sx={{flexGrow: 1}} container spacing={4}>
                {
                    songs.map((value, index) => {
                        return (

                            <Grid item xs={4} key={index} >
                                <Grid container justifyContent='center'>
                                    <Card  sx={{'&:hover':{boxShadow: 'white 0px 0px 40px'},maxWidth: 350}}>
                                        <CardActionArea>
                                            <Link to={`/song/${value.id}`} type='a'>
                                                <CardMedia
                                                    component='img'
                                                    height='350'
                                                    image={value.cover}
                                                    alt={value.title}
                                                />
                                            </Link>
                                            <CardContent>
                                                <Typography gutterBottom variant='h5' component='div'>
                                                    {value.title}
                                                </Typography>
                                                <Typography variant='body2' component='div'>
                                                    {value.artist}
                                                </Typography>
                                                <Typography variant='body2'>
                                                    {value.price}$
                                                </Typography>
                                                <Typography component='div'>
                                                    <Button sx={{margin: '10px auto 0', display: 'block', zIndex: '1000',border:'lightgray 1px solid'}}
                                                            onClick={() => {
                                                                addToCart(value)(dispatch)
                                                            }}>
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