import { Typography, Box, Button } from "@mui/material";
import React from "react";
import { onSelectHeadline, onAddFav } from "../actions/actions";
import { useDispatch } from "react-redux";
import "./news.css";

function NewsCardMobile({ item }) {
  const dispatch = useDispatch();
  return (
    <Box
      onClick={() => dispatch(onSelectHeadline(item))}
      className="newsCardMobile"
      sx={{
        height: "100%",
        backgroundColor: "#444444",
        width: "auto",
        borderRadius: 2,
      }}
    >
      <Box
        component="img"
        src={item.urlToImage}
        sx={{
          height: "90%",
          maxWidth: "200px",
          borderRadius: 2,
          marginX: "auto",
          marginY: "9px",
        }}
      />
      <Typography sx={{ margin: "10px" }}>{item.title}</Typography>
      <Button
        variant="contained"
        sx={{
          height: "80%",
          marginX: "auto",
          marginBottom: 1,
          backgroundColor: "#DA0037",
          ":hover": { backgroundColor: "#444444" },
        }}
        onClick={() => {
          dispatch(onAddFav(item));
        }}
      >
        Add to Fav
      </Button>
    </Box>
  );
}

export default NewsCardMobile;
