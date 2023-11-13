import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import preset_songs from "../components/songs_preset.json";


export default function Purchase_3_confirm({
  cart_items,
  address,
  connectWallet,
  firstName,
  lastName,
  email,
}) {

  var products = [];
  var totalPrice = 0;
  Object.entries(cart_items).forEach(([key, value]) => {
    var price = (
      parseFloat(preset_songs.filter((obj) => obj.dsc === key)[0]["price"]) *
      parseFloat(value)
    ).toFixed(5);
    products.push({ name: key, qty: value, price: price });
    totalPrice += parseFloat(price);
  });
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary={product.name}
              secondary={"QTY:".concat(product.qty)}
            />
            <Typography variant="body2">{product.price} ETH</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {totalPrice.toFixed(5)} ETH
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Wallet details
          </Typography>
          <Grid container>
            Address: {address}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
