import {Link} from "react-router-dom";
import '../../style/header.css'
import {Box, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useState} from "react";
import {sortSongs} from "../../action/songAction";
import {useDispatch, useSelector} from "react-redux";

const Header = ({path, title}) => {
    const dispatch = useDispatch()
    const [price, setPrice] = useState('');
    const cart = useSelector(state => state.CartReducer.cart)
    const handleChange = (event) => {
        setPrice(event.target.value);
        sortSongs(event.target.value)(dispatch)
    };
    const totalAmount = (arr) => {
        let temp = 0
        for(let value of arr){
            temp += value.count
        }
        return temp
    }

    return(
        <>
            <div className='headerContainer'>
                <div className='headerBtnArea'>
                    <div className='logo'>LOGO</div>
                    <div className='loginAndCart'>
                        <div className='login'>Login</div>
                        <Link to='/cart' type='a'>
                        <div className='cart'>
                            Cart
                            {
                            cart.length > 0 ? <div className='cartTag'>{
                                totalAmount(cart)
                            }</div> : undefined
                        }</div>
                        </Link>
                    </div>
                </div>
                <div className='pageHeading'>
                    <div className='nav' >
                        <Link to='/' type='a'>Home</Link> > {path} > {title}
                    </div>
                    <div className='heading' >
                        <h1>{title}</h1>
                    </div>
                </div>
                { title === 'ALL SONGS' ?
                    <div className='sortAndFilter'>
                        <Box sx={{width: 200}}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={price}
                                    label="Price"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={'0'}>Default</MenuItem>
                                    <MenuItem value={'1'}>Price From High to Low</MenuItem>
                                    <MenuItem value={'2'}>Price From Low to High</MenuItem>
                                    <MenuItem value={'3'}>Name From A-Z</MenuItem>
                                    <MenuItem value={'4'}>Name From Z-A</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    : undefined
                }
            </div>
        </>
    )
}

export default Header