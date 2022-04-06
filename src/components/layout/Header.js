import {Link} from "react-router-dom";
import '../../style/header.css'
import {Box, Container, FormControl, InputBase, InputLabel, makeStyles, MenuItem, Select} from "@mui/material";
import {useState} from "react";
import {sortSongs} from "../../action/songAction";
import {useDispatch, useSelector} from "react-redux";
import { styled } from '@mui/material/styles';


const BootstrapInput = styled(Container)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(1),
    },

    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: 'black',
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        width: '100px',
        textAlign:'center',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover':{
            boxShadow: 'white 0px 0px 40px'
        },

    },

}));


const Header = ({path, title}) => {
    // const classes = useStyles()
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
                    <Link to='/' >
                    <div className='logo'>. </div>
                    </Link>
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
                        <Link to='/' type='a'>Home</Link> > <Link to={`/${path}`}>{path}</Link> > {title}
                    </div>
                    <div className='heading' >
                        <h1>{title}</h1>
                    </div>
                </div>
                { title === 'ALL SONGS' ?
                    <div className='sortAndFilter'>
                        <Box sx={{width: 200}}>
                            <FormControl fullWidth
                                         variant="filled">
                                <BootstrapInput>
                                    <InputLabel id="demo-simple-select-filled-label" sx={{color:'white',padding:'10px 30px'}} >Sort</InputLabel>
                                <Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled-label"
                                    value={price}
                                    label="Price"
                                    variant="standard"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={'0'}>Default</MenuItem>
                                    <MenuItem value={'1'}>Price From High to Low</MenuItem>
                                    <MenuItem value={'2'}>Price From Low to High</MenuItem>
                                    <MenuItem value={'3'}>Name From A-Z</MenuItem>
                                    <MenuItem value={'4'}>Name From Z-A</MenuItem>
                                </Select>
                                </BootstrapInput>
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