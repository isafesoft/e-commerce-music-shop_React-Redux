import '../style/welcome.css'
import {Link} from "react-router-dom";


const WelcomeView = () => {

    return(
        <>
            <div className='logoContainer'>
                <Link to='/shop' type='a'>
            <div className='bigLogo'> </div>
                </Link>
            <div className='fog'> </div>
            </div>

        </>
    )
}

export default WelcomeView