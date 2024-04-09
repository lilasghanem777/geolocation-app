import React, { useEffect, useState } from "react";
import { Grid, TextField } from "@mui/material";

function Form({ formik, disableVideo }) {
  return (
    <Grid container spacing={2}>
      <Grid item md={6} sm={6} xs={12} p={1}>
        <TextField
          fullWidth
          required={true}
          sx={{ mt: 1 }}
          name={"address"}
          id={"address"}
          value={formik.values.address || ""}
          label="Address"
          onBlur={() => formik.setFieldTouched(`address`, true)}
          onChange={(e) => formik.setFieldValue("address", e.target.value)}
          error={formik.touched.address && formik.errors.address ? true : false}
          helperText={formik.touched.address ? formik.errors.address : ""}
        />
      </Grid>
      <Grid item md={6} sm={6} xs={12} p={1}>
        <TextField
          fullWidth
          sx={{ mt: 1 }}
          name={"email"}
          id={"email"}
          label='Email'
          value={formik.values.email || ""}
          onBlur={() => formik.setFieldTouched(`email`, true)}
          onChange={(e) => formik.setFieldValue("email", e.target.value)}
          error={formik.touched.email && formik.errors.email ? true : false}
          helperText={formik.touched.email ? formik.errors.email : ""}
        />
      </Grid>
    </Grid>
  );
}

export default Form;
