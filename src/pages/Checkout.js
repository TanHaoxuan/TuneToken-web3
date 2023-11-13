import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Purchase_1_email from './purchase_1_email';
import Purchase_2_wallet from './purchase_2_wallet';
import Purchase_3_confirm from './purchase_3_confirm';
import preset_songs from '../components/songs_preset.json';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const steps = ['Donation', 'Wallet details', 'Review your order'];

function getStepContent(step, cart_items, address, connectWallet, firstName, lastName, address1, zip, setFirstName, setLastName, setAddress1, setZip) {
    switch (step) {
        case 0:
            return <h1 styles={{textAlign:'center'}} >Would you like to donate to our platform?</h1>
        case 1:
            return <Purchase_2_wallet address={address} connectWallet={connectWallet} />;
        case 2:
            return <Purchase_3_confirm cart_items={cart_items} address={address} connectWallet={connectWallet} firstName={firstName} lastName={lastName} address1={address1} zip={zip} />;
        default:
            throw new Error('Unknown step');
    }
}

const theme = createTheme();



export default function Checkout({ address, connectWallet, cart_items, onSubmit, setPurchaseItems }) {
    const [activeStep, setActiveStep] = React.useState(0);
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [address1, setAddress1] = React.useState('');
    const [zip, setZip] = React.useState('');


    const handleNext = (address, address1, zip, cart_items, setPurchaseItems) => {
        if (activeStep != 1) {
            if (activeStep == 2) {
                var totalPrice = 0
                var item_ids = []
                Object.entries(cart_items).forEach(([key, value]) => {
                    var price = (parseFloat(preset_songs.filter(obj => obj.dsc === key)[0]['price']) * parseFloat(value)).toFixed(5)
                    totalPrice += parseFloat(price);
                    item_ids.push(preset_songs.filter(obj => obj.dsc === key)[0]['id']);
                });
                onSubmit(address1, zip, item_ids, totalPrice * (10 ** 18))
            }
            setActiveStep(activeStep + 1);
        } else if (address) {
            setActiveStep(activeStep + 1);
        }
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar
                position="absolute"
                color="default"
                elevation={0}
                sx={{
                    position: 'relative',
                    borderBottom: (t) => `1px solid ${t.palette.divider}`,
                }}
            >
            </AppBar>
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center">
                        Checkout
                    </Typography>
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? (
                        <React.Fragment>
                            <Typography variant="h5" gutterBottom>
                                Thank you for your order.
                            </Typography>
                            <Typography variant="subtitle1">
                                Your order number is #00362709. You can check your order status.
                            </Typography>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            {getStepContent(activeStep, cart_items, address, connectWallet, firstName, lastName, address1, zip, setFirstName, setLastName, setAddress1, setZip)}
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                {activeStep == 0 && (
                                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                        Donate
                                    </Button>
                                )}
                                {activeStep == 0 && (
                                    <Button
                                        variant="contained"
                                        onClick={() => handleNext(address, address1, zip, cart_items, setPurchaseItems)}
                                        sx={{ mt: 3, ml: 1 }}
                                    >
                                    {activeStep === steps.length - 1 ? 'Place order' : 'No,thanks. Next'}
                                </Button>
                                )}
                                
                                {activeStep !== 0 && (
                                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                        Back
                                    </Button>
                                )}
                                {activeStep !==0 && (
                                    <Button
                                        variant="contained"
                                        onClick={() => handleNext(address, address1, zip, cart_items, setPurchaseItems)}
                                        sx={{ mt: 3, ml: 1 }}
                                    >
                                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                </Button>
                                )}
                                
                            </Box>
                        </React.Fragment>
                    )}
                </Paper>
                {/* <Copyright /> */}
            </Container>
        </ThemeProvider>
    );
}
