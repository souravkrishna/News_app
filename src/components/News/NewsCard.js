import { Typography, Box, Button } from "@mui/material";
import React from "react";
import { onSelectHeadline, onAddFav } from "../actions/actions";
import { useDispatch } from "react-redux";
import "./news.css";

function NewsCard({ item, }) {
  const dispatch = useDispatch();
  return (
    <Box
      className="newsCard"
      sx={{
        height: "150px",
        width: "100%",
        backgroundColor: "#444444",
        borderRadius: 2,
        color: "#EDEDED",
        ":hover": {
          backgroundColor: "#DA0037",
        },
      }}
      onClick={() => dispatch(onSelectHeadline(item))}
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "centre",
        }}
      >
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={item.urlToImage}
            sx={{
              height: "90%",
              maxWidth: "200px",
              borderRadius: 2,
              marginX: "9px",
            }}
          />
        </div>
      </div>
      <div style={{ height: "100%", width: "100%" }}>
        <div
          style={{
            height: "80%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>{item.title}</Typography>
        </div>
        <div
          style={{
            height: "20%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            variant="contained"
            onClick={() => {
              dispatch(onAddFav(item));
            }}
            sx={{
              height: "80%",
              marginRight: 1,
              marginBottom: 10,
              backgroundColor: "#171717",
              ":hover": { backgroundColor: "#444444" },
            }}
          >
            Add to Fav
          </Button>
        </div>
      </div>
    </Box>
  );
}

export default NewsCard;
