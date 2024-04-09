import React, { useEffect, useState } from "react";
import {
  Grid,
  Button,
  CircularProgress,
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";

function LocationCard({ location }) {
  return (
    <Card
      sx={{
        maxWidth: { md: "50%", sm: "70%", xs: "100%" },
        m: 1,
        height: "90%",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Location Result
        </Typography>{" "}
        {location.lang &&
        location.lat &&
        location.lang !== "" &&
        location.lat !== "" ? (
          <>
            <Typography
              variant="body2"
              gutterBottom
              color="text.secondary"
              m={1.8}
            >
              Location longitude: {location.lang}
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              color="text.secondary"
              m={1.8}
            >
              Location latitude: {location.lat}
            </Typography>
          </>
        ) : (
          <Typography
            variant="body2"
            gutterBottom
            color="text.secondary"
            m={1.8}
            sx={{ textAlign: "center" }}
          >
            No geo location found!
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default LocationCard;
