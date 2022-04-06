import Player from "../components/playerPage/Player";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import Layout from "../components/layout/Layout";


const SongPlayerView = () => {
    const id = parseInt(Object.values(useParams())[0])
    const songs = useSelector(state => state.SongReducer.allSongs)
    let data = songs.filter((value)=>{
        return value.id === id
    })
    return(
        <>
            <Layout path='shop' title='PLAYER'>
            <Player data={data}/>
            </Layout>
        </>
    )
}

export default SongPlayerView