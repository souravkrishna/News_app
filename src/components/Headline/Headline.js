import React from "react";
import { useSelector } from "react-redux";
import { Typography, Box, Link } from "@mui/material";
import parse from "html-react-parser";

function Headline() {
  const Headline = useSelector((state) => state.Headline);
  const { headline } = Headline;
  return (
    <>
      <div
        className="scroll"
        style={{
          height: "100%",
          width: "100%",
          overflow: "auto",
        }}
      >
        <Typography variant="h5" color="#DA0037" pt={2.5} pl={2}>
          {headline.title}
        </Typography>
        <Typography variant="h5" color="#EDEDED" pt={2.5} pl={2}>
          {headline.publishedAt}
        </Typography>
        <div style={{ width: "100%" }}>
          <Box
            component="img"
            src={headline.urlToImage}
            style={{
              height: "50%",
              marginLeft: "15px",
              marginRight: "15px",
              marginBottom: "15px",
              borderRadius: 5,
              maxWidth: "calc(100% - 30px)",
            }}
          />
        </div>
        <div
          id="description"
          style={{ marginLeft: "15px", marginRight: "15px", color: "#EDEDED" }}
        >
          {headline.description && parse(headline.description)}
        </div>
        {headline.content && (
          <Typography
            color="#EDEDED"
            sx={{ marginTop: "20px", marginLeft: "15px", marginRight: "15px" }}
          >
            {headline.content}
          </Typography>
        )}
        {headline.url && (
          <Link href={headline.url}>
            <Typography color="#DA0037" sx={{ marginLeft: "15px" }}>
              Go to link
            </Typography>
          </Link>
        )}
      </div>
    </>
  );
}

export default Headline;
