import React from "react";
import Backdrop from "@mui/material/Backdrop";
import { Typography } from "@mui/material";

function Error() {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <Typography variant="h3" sx={{ color: "white" }}>
        Error 404
      </Typography>
    </Backdrop>
  );
}

export default Error;
