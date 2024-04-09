import React, { useEffect, useState } from "react";
import axiosClient from "../Axios/index";
import store from "..//Store/store";
import { setLocation } from "../Store/Reducers/AuthSlice";

const Actions = () => {
  const [gettingGeoLocation, setGettingGeoLocation] = useState(false);

  const getGeoLocation = async (address) => {
    setGettingGeoLocation(true);
    const response = await axiosClient
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          address
        )}&key=AIzaSyAriUo32_u0S8ePuI9ot9Bvu4XOwTOWZG4`
      )
      .then((value) => {
        setGettingGeoLocation(false);
        if (value !== false && value.data.results[0]?.geometry) {
          const location = value.data.results[0].geometry.location;
          const result = { lang: location.lng, lat: location.lat };
          store.dispatch(setLocation(result));
        } else store.dispatch(setLocation({ lang: "", lat: "" }));
      });
    return response;
  };

  return {
    getGeoLocation,
    gettingGeoLocation,
  };
};

export default Actions;
