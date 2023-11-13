import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function songItem(
  name,
  artist,
  price,
  rate,
  img_index,
  onClick
) {
  const buttonStyle = {
    backgroundColor: "#548fc7",
    color: "white",
  };

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
        <Typography
          gutterBottom
          style={{
            fontFamily: "Arial",
            fontStyle: "italic",
            textAlign: "right",
          }}
          variant="h7"
          component="div"
        >
          {artist}
        </Typography>
        <Typography variant="body2" color="white" component="div">
          <div>Try 🎧 @ {price} ETH</div>
          <div> (≈{(price * 2100).toFixed(2)} USD)</div>
          <div>Rated ⭐{rate}</div>
        </Typography>
      </CardContent>
      <CardActions sx={{ bgcolor: "#63a8eb" }}>
        <Button size="small" onClick={() => onClick(name)} style={buttonStyle}>
          Add to Wish List
        </Button>
      </CardActions>
    </Card>
  );
}
