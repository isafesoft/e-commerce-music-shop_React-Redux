import {Link} from "react-router-dom";
import '../../style/header.css'
import {Box, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useState} from "react";

const Header = ({path, title}) => {

    const [price, setPrice] = useState('');
    const handleChange = (event) => {
        setPrice(event.target.value);
    };

    return(
        <>
            <div className='headerContainer'>
                <div className='headerBtnArea'>
                    <div className='logo'>LOGO</div>
                    <div className='loginAndCart'>
                        <div className='login'>Login</div>
                        <div className='cart'>Cart</div>
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
                <div className='sortAndFilter'>
                    <Box sx={{ width: 200 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Price</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={price}
                                label="Price"
                                onChange={handleChange}
                            >
                                <MenuItem value={1}>Ten</MenuItem>
                                <MenuItem value={2}>Twenty</MenuItem>
                                <MenuItem value={3}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
            </div>
        </>
    )
}

export default Header