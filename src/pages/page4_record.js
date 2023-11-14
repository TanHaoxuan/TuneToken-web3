import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FolderIcon from '@mui/icons-material/Folder';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CancelIcon from '@mui/icons-material/Cancel';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import preset_songs from '../components/songs_preset.json';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import {Grid } from '@mui/material';

function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

function unqiueProducts(arr) {
    var uniqueMerchants = [];
    for (let merch of arr) { // Use "of" to loop through an array
        let unique = true; // Set a flag to handle possible unwanted items 
        for (let uniqueMerchant of uniqueMerchants) {
            if (uniqueMerchant.id === merch) {
                unique = false; // Both properties match, so throw up the flag
                break;
            }
        }
        if (unique) { // Only add the item if the flag didn't go up
            uniqueMerchants.push(preset_songs.filter(dish => dish.id == merch)[0]);
        }
    }
    return uniqueMerchants;
}

function Page4_record({ onCancel, updateOrderStatus, pendingOrders, currentOrders, pastOrders, acceptPurchase, cancelPurchase, confirmPurchase, cancelPendingOrder }) {
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(true);
    const typographyStyle = {
        color: '#084178',
        fontSize: '32px',
        fontFamily: 'Blippo, fantasy',
      };
    return (
        <div>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography style={typographyStyle}>Current Purchase</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List dense={dense}>
                        {/* {console.log(currentOrders[0])} */}
                        {currentOrders.map((order) =>
                            <ListItem key={order[5]} secondaryAction={
                                <Tooltip title="Confirm delivery">
                                    <IconButton edge="end" aria-label="done" onClick={() => confirmPurchase(parseInt(order[5]))}>
                                        <DoneIcon />
                                    </IconButton>
                                </Tooltip>
                            }>
                                <ListItemAvatar>
                                    <Avatar>
                                        <FolderIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={`${order[0]} ${order[1]}`}
                                    secondary={unqiueProducts(order[2]).map((dish) => dish.name).join(', ')}
                                />
                            </ListItem>
                        )}
                    </List>
                </AccordionDetails>
            </Accordion>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Accordion>
                <AccordionSummary   
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography style={typographyStyle}>Past Purchase</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List dense={dense}>
                        {pastOrders.map((order) =>
                            <ListItem key={order[5]}>
                                <ListItemAvatar>
                                    <Avatar>
                                        <FolderIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={`${order[0]} ${order[1]}`}
                                    secondary={unqiueProducts(order[2]).map((dish) => dish.name).join(', ')}
                                />
                            </ListItem>
                        )}
                    </List>
                </AccordionDetails>
            </Accordion>
            </Grid>   
            </Grid>  
            <br></br>
            <Button variant='contained' onClick={updateOrderStatus}>Refresh</Button>
        </div>
    );
}

export default Page4_record;
