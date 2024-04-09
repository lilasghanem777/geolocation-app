import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Divider,
  Paper,
} from "@mui/material";
import { useFormik } from "formik";
import actions from "./actions";
import { useSelector } from "react-redux";
import LocationCard from "./components/LocationCard";

const Geolocation = () => {
  const [valid, setValid] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const geolocation = useSelector((state) => state.auth.location);

  const { gettingGeoLocation, getGeoLocation } = actions();

  const formik = useFormik({
    initialValues: {},
    enableReinitialize: true,
    validate: (values) => {
      var errors = {};
      if (!values.address || values.address === "") {
        errors.address = "Address is required";
      }
      if (
        values.email &&
        !values.email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)
      ) {
        errors.email = "Email is not valid";
      }
      return errors;
    },
    onSubmit: async () => {
      setLoading(true);
      var values = formik.values.address;
      getGeoLocation(values).then((result) => {
        setLoading(false);
      });
    },
  });

  useEffect(() => {
    if (formik.isSubmitting || !formik.isValid || !formik.dirty || loading) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [formik]);

  return (
    <Box p={2}>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={1}
        mt={4}
      >
        <Paper
          elevation={0}
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0)",
          }}
        >
          Location
        </Paper>
        <Paper
          elevation={0}
          sx={{
            color: "#ff5e18",
            backgroundColor: "rgba(0, 0, 0, 0)",
          }}
        >
          Geo Location
        </Paper>
      </Stack>
      <Box mt={2}>
        <Form formik={formik} />
      </Box>
      <Button
        // fullWidth
        variant="contained"
        type="submit"
        className="primary_button"
        sx={{ m: 1, mt: 4 }}
        onClick={() => formik.handleSubmit()}
        disabled={valid}
      >
        {loading ? (
          <CircularProgress size={24} sx={{ color: "black" }} />
        ) : (
          "get geolocation"
        )}
      </Button>
      <LocationCard location={geolocation} />
    </Box>
  );
};

export default Geolocation;
