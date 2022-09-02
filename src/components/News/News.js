import { Typography, Stack} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  onGetNews,
} from "../actions/actions";
import Loading from "../Loading/Loading";
import "./news.css";
import NewsCard from "./NewsCard";
import NewsCardMobile from "./NewsCardMobile";
import Error from "../Error/Error";

function News() {
  const dispatch = useDispatch();
  const News = useSelector((state) => state.News);
  const { loading, error, news, sourceName } = News;

  useEffect(() => {
    dispatch(onGetNews("abc-news", "ABC News"));
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
        // <div style={{ color: "white" }}>error 404</div>
      ) : (
        <div style={{ height: "100%", width: "auto" }}>
          <Typography variant="h4" color="#DA0037" pt={2.5} pl={2}>
            {sourceName}
          </Typography>
          <div
            style={{
              overflow: "auto",
              height: "calc(100vh - 90px)",
              marginTop: 20,
            }}
          >
            <Stack spacing={2} sx={{ marginX: "20px" }}>
              {news.map((item, i) => {
                return <NewsCard item={item} key={i} />;
              })}
            </Stack>
            <Stack spacing={2} sx={{ marginX: "20px" }}>
              {news.map((item, i) => {
                return <NewsCardMobile item={item} key={`mobile-${i}`} />;
              })}
            </Stack>
          </div>
        </div>
      )}
    </>
  );
}

export default News;
