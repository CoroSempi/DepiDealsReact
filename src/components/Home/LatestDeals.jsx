import React from "react";
import TagName from "../Layouts/TagName";
import { Box } from "@mui/material";
import LatestSwiper from "./LatestSwiper";

export default function LatestDeals() {
  return (
    <Box
      sx={{
        minWidth: "100%",
        padding: { xs: "20px 0px", md: "20px 25px" },
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        gap: "10px",
      }}>
      <TagName name={"Latest"} />
      <LatestSwiper />
    </Box>
  );
}
