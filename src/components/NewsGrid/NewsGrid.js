import React from "react";
import { Grid, Box } from "@mui/material";

function NewsGrid({ source, news, headline }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={12} md={2}>
          <div
            style={{
              display: "flex",
              backgroundColor: "#171717",
              alignItems: "centre",
              justifyContent: "center",
              height: "100vh",
            }}
          >
            <div
              style={{
                overflow: "auto",
              }}
            >
              {source}
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={5}>
          <div
            style={{
              display: "flex",
              backgroundColor: "#171717",
              height: "100vh",
            }}
          >
            {news}
          </div>
        </Grid>
        <Grid item xs={12} md={5}>
          <div
            style={{
              display: "flex",
              backgroundColor: "#171717",
              height: "100vh",
            }}
          >
            {headline}
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default NewsGrid;
