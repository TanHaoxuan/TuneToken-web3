import React from "react";
import songs from "../components/songs_preset.json";
import Grid from "@mui/material/Grid";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import songItem from "../components/songItem.js";
import SkyImage from "../images/sky.jpg";

export default function Page2_songs(onClick, setSearchedDish, searchedDish) {
  const Item = styled(Box)(({ theme }) => ({}));

  const styles = {
    backgroundImage: `url(${SkyImage}`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    height: "100vh",
  };

  var searchedDishDict = {};
  if (searchedDish) {
    searchedDishDict = songs.filter((dish) => dish.dsc == searchedDish)[0];
  }
  return (
    <div style={styles}>
      <br></br>

      <br></br>
      <div>
        {!searchedDish ? (
          <Grid
            container
            spacing={{ xs: 1, md: 2 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {songs.map((_, index) => (
              <Grid item xs={2} sm={2.5} md={3} key={index}>
                <Item>
                  {songItem(
                    songs[index]["dsc"],
                    songs[index]["name"],
                    songs[index]["price"],
                    songs[index]["rate"],
                    songs[index]["id"],
                    onClick
                  )}
                </Item>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid
            container
            spacing={{ xs: 1, md: 2 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={2} sm={2.5} md={3}>
              <Item>
                {songItem(
                  searchedDishDict["dsc"],
                  searchedDishDict["name"],
                  searchedDishDict["price"],
                  searchedDishDict["rate"],
                  searchedDishDict["id"],
                  onClick
                )}
              </Item>
            </Grid>
          </Grid>
        )}
      </div>
    </div>
  );
}


