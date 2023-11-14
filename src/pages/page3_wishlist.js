import React from 'react';
import { Link } from 'react-router-dom';
import preset_songs from "../components/songs_preset.json";
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import whishlistItem from '../components/wishlistItem';
import Button from '@mui/material/Button';
import BgImage from "../images/sky.jpg";

function Page3_wishlist(cart_items, cart_count, onPopClick, onPushClick) {

    const Item = styled(Box)(({ theme }) => ({}));
    const  styles = {
        backgroundImage: `url(${BgImage}`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover', 
        height: '100vh',
      }
    

    var totalPrice = 0;
    for (const [key, value] of Object.entries(cart_items)) {
        for (let d of preset_songs) {
            if (d.dsc == key) {
                totalPrice += (d.price * value);
            }
        }
    }
    const MyLink = React.forwardRef((props, ref) => <Link to={`/checkout`} {...props} />);

    return (
        <div style = {styles}>
            <br></br>
            <br></br>
            {cart_count > 0 ?
                <div>
                    <div>
                        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {Object.keys(cart_items).map((key, index) => (
                                <Grid item xs={2} sm={3} md={3} key={index}>
                                    <Item>{whishlistItem(key, cart_items[key], onPopClick, onPushClick)}</Item>
                                    {/* {{ key }} */}
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                    <div  style={{ position: 'fixed', bottom: "80px", right: "80px", padding: '20px' }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={4}>
                                <Item><h3  style={{ color: 'white',  fontFamily: 'Blippo, fantasy'}}> Total: {totalPrice.toFixed(5)} ETH</h3></Item>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{ position: 'fixed', bottom: "100px", right: "20px", padding: '20px' }}>
                        <Button variant="contained" size="large" component={MyLink}>
                            Buy
                        </Button>
                    </div>
                </div>
                :
                <h1 style={{ color: 'white', fontFamily: 'Blippo, fantasy'}}> No Songs </h1>
            }
        </div>
    )
}

export default Page3_wishlist;