import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';

export default function Purchase_2_wallet({ address, connectWallet }) {
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
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Payment
            </Typography>
            {!address ?
                <div>
                    <Typography align='center' gutterBottom>
                        Please connect your MetaMask
                    </Typography>
                    <Box textAlign='center'>
                        <Button align='center' onClick={async () => { handleClick(); await connectWallet(); }}>Connect to wallet</Button>
                    </Box>
                </div>
                :
                <Typography gutterBottom>
                    Please confirm your wallet address: {address}
                </Typography>
            }
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                {address ?
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Successfully connected to wallet!
                    </Alert>
                    :
                    <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                        Do you have Metamask installed?
                    </Alert>
                }
            </Snackbar>
        </React.Fragment>
    );
}