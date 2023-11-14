
import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Badge from '@mui/material/Badge';
import Grid from '@mui/material/Grid';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

export const Nav = styled.nav`
    font-size: 18px;
    background-image: linear-gradient(260deg,  rgb(42,244,152,255) 0%, #3498db 100%); 
    border: 1px solid rgba(0,0,0,0.2);
    display: flex;
    justify-content: space-between;
    height: 70px;
    position: fixed;
    bottom: 0;
    width: 100%;
    margin: 0;
    padding: 0;
    align-items: center;
`;

export const NavLink = styled(Link)`
    float: left;
    display: block;
    color:  #454343;
    text-align: center;
    padding: 20px 22px;
    text-decoration: none;
    font-size: 20px;
    font-family:Blippo, fantasy; 
`;

export const Bars = styled(FaBars)`
  display: none;
  margin: 0;
  padding: 0;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #4fd6c2;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  font-family:Blippo, fantasy; 
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #454343;
  }
`;

const NavigationBar = (cart_items, address, connectWallet) => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink  to='/' >
                        <Grid container direction="row" alignItems="center">
                            <Grid item>
                                <HomeIcon />
                            </Grid>
                            <Grid item>
                                Player
                            </Grid>
                        </Grid>
                    </NavLink>
                    <NavLink to='/page2_songs' >
                        <Grid container direction="row" alignItems="center">
                            <Grid item>
                                <LibraryMusicIcon />
                            </Grid>
                            <Grid item>
                                Songs
                            </Grid>
                        </Grid>
                    </NavLink>

                    <NavLink to='/page3_wishlist' >
                        <Grid container direction="row" alignItems="center">
                            {cart_items > 0} {

                                <Grid item>
                                    <Badge badgeContent={cart_items} color="primary">
                                        <FavoriteIcon />
                                    </Badge>
                                </Grid>
                            }
                            <Grid item>
                                Wish List
                            </Grid>
                        </Grid>
                    </NavLink>
                    <NavLink to='/page4_record'>
                        <Grid container direction="row" alignItems="center">
                            <Grid item>
                                <HistoryEduIcon />
                            </Grid>
                            <Grid item>
                                Purchase Record
                            </Grid>
                        </Grid>
                    </NavLink>

                </NavMenu>

                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    {address ?
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            Connected to MetaMask!
                        </Alert>
                        :
                        <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                            No connection to MetaMask.
                        </Alert>
                    }
                </Snackbar>
            </Nav>
        </>
    );
};

export default NavigationBar;