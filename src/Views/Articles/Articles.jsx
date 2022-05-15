import React, { useEffect, useState } from "react";

import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

import "./Articles.scss";

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");
  const [preloader, setPreloader] = useState(true);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      const content = await response.json();
      setArticles(content);
    } catch (error) {
      setError(error.message);
    } finally {
      setPreloader(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 1000);
  }, []);

  return (
    <>
      <div className="articles">
        {preloader && (
          <div className="cssload-loader">
            <div className="cssload-inner cssload-one"></div>
            <div className="cssload-inner cssload-two"></div>
            <div className="cssload-inner cssload-three"></div>
          </div>
        )}
        {articles.map((item) => (
          <Card sx={{ maxWidth: 800 }} key={item.id}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.summary}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
        {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}
      </div>
    </>
  );
};
