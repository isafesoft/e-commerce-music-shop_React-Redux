import {useContext, useEffect, useState} from "react";

import '../../style/player.css'
import {useSelector} from "react-redux";


const Player = ({data} )=> {


    // const [songId, setSongId] = useState(0)


    // useEffect(()=>{
    //     setSongId(id - 1)
    // },[id])


    return(
        <>
            {data.length > 0 ?

                <div className='playerContainer'>
                    <div className='musicCover' style={{background: `url(${data[0]?.cover})`}}> </div>
                    <div className='musicInfo'>
                        <h2>{data[0]?.title}</h2>
                        <div>{data[0]?.artist}</div>
                        <div>{data[0]?.length}</div>
                        <audio
                            controls
                            src={data[0]?.stream}>
                            Your browser does not support the
                            <code>audio</code> element.
                        </audio>
                    </div>
                </div>

                : undefined   }

        </>
    )
}


export default Player