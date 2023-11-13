import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { experimentalStyled as styled } from "@mui/material/styles";
import songs from "./songs_preset.json";


export default function whishlistItem(name, item_count, onPopClick, onPushClick) {
  const Item = styled(Box)(({ theme }) => ({}));

  var item_info = songs.filter((obj) => obj.dsc === name)[0];
  var price = item_info["price"];
  var rate = item_info["rate"];
  var img_index = item_info["id"];

  const typographyStyle = {
    color: "white",
    fontFamily: "Blippo, fantasy",
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="345"
        image={require(`../images/song${img_index}.png`)}
        alt={name}
      />
      <CardContent sx={{ bgcolor: "#174673" }}>
        <Typography
          gutterBottom
          variant="h5"
          style={typographyStyle}
          component="div"
        >
          {name}
        </Typography>
        <Typography variant="body2" color="white" component="div">
          <p>Price: {price} ETH</p>
          <p>Rating: {rate}</p>
        </Typography>
      </CardContent>
      <CardActions sx={{ bgcolor: "#63a8eb" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={3}>
            <Item>
              <Button size="small" onClick={() => onPopClick(name)}>
                -
              </Button>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <p>In cart: {item_count}</p>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <Button size="small" onClick={() => onPushClick(name)}>
                +
              </Button>
            </Item>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
