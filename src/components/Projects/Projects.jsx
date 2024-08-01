import { Box } from "@mui/material";
import Cardd from "../Common/Card";
import Fliter from "../Common/Fliter";
import { useState } from "react";

const cardApi = [
  {
    id: 1,
    title: "Rateorama",
    category: "Backend",
    overview:
      "Rateorama is an exceptional platform dedicated to rating movies, series, and TV shows. It offers a unique opportunity for individuals to express their.... . ",
    pic: "/name.png",
  },
  {
    id: 2,
    title: "test",
    category: "Backend",
    overview:
      "Rateorama is an exceptional platform dedicated to rating movies, series, and TV shows. It offers a unique opportunity for individuals to express their.... . ",
    pic: "/rateo.png",
  },
  {
    id: 3,
    title: "Rateorama",
    category: "Frontend",
    overview:
      "Rateorama is an exceptional platform dedicated to rating movies, series, and TV shows. It offers a unique opportunity for individuals to express their.... . ",
    pic: "/1111.png",
  },
  {
    id: 4,
    title: "Rateorama",
    category: "Fullstack",
    overview:
      "Rateorama is an exceptional platform dedicated to rating movies, series, and TV shows. It offers a unique opportunity for individuals to express their.... . ",
    pic: "/1111.png",
  },
  {
    id: 5,
    title: "SAKANY",
    category: "UI/UX",
    overview:
      "Rateorama is an exceptional platform dedicated to rating movies, series, and TV shows. It offers a unique opportunity for individuals to express their.... . ",
    pic: "/111111.png",
  },
];

export default function Projects() {
  const [f, setF] = useState("All");

  const Cards = () => {
    return cardApi.map((card) => {
      if (f === "All") {
        return <Cardd ApiCard={card} />;
      }
      if (card.category === f) {
        return <Cardd ApiCard={card} />;
      }
    });
  };
  return (
    <Box
      sx={{
        minHeight: "100vh",
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}>
      <Fliter func={setF} />
      <Box
        sx={{
          display: "flex",
          flexWrap: { xs: "nowrap", md: "wrap" },
          flexDirection: { xs: "column", md: "row" },
          gap: "15px",
        }}>
        <Cards />
      </Box>
    </Box>
  );
}
