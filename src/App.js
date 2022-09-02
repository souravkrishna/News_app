import React from "react";
import Sources from "./components/Sources/Sources";
import NewsGrid from "./components/NewsGrid/NewsGrid";
import News from "./components/News/News";
import Headline from "./components/Headline/Headline";
import "../src/components/scrollbar.css";

export default function BasicTable() {
  return (
    <NewsGrid source={<Sources />} news={<News />} headline={<Headline />} />
  );
}
