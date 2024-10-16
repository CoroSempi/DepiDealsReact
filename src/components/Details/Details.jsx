import React from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import TagName from "../Layouts/TagName";

export default function Details() {
  const { id } = useParams();

  return (
    <Box
      sx={{
        margin: { xs: "0", md: "20px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
        position: "relative",
      }}>
      <TagName name={id} />
    </Box>
  );
}
