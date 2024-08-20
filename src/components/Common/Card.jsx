import React, { useContext } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import Th from "../../Context/useTheme";
import { Link } from "react-router-dom";

export default function MediaCard({ ApiCard }) {
  const [ss] = useContext(Th);
  return (
    <Card
      sx={{
        borderRadius: { xs: "15px", md: "0px" },
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        flexDirection: "row",
        gap: "2px",
        px: { xs: "5px", md: "0px" },
        boxShadow:
          ss === "dark"
            ? "0px 2px 10px 0px rgba(255, 255, 255, 0.15)"
            : "0px 2px 10px 0px rgba(0, 0, 0, 0.25)",
        maxWidth: { xs: "100%", md: "450px" },
        maxHeight: { xs: "110px", md: "175px" },
        minHeight: { xs: "110px", md: "175px" },
        height: "auto",
      }}>
      <CardMedia
        component="img"
        sx={{
          borderRadius: { xs: "10px", md: "0px" },
          maxWidth: { xs: "90px", md: "175px" },
          minWidth: { xs: "90px", md: "175px" },
          height: { xs: "80px", md: "100%" },
          alignItems: "center",
        }}
        image={`https://seif-sync-server.vercel.app/${ApiCard.pic}`}
        alt="Image"
      />
      <CardContent sx={{ padding: "20px 5px" }}>
        <Typography
          sx={{ fontSize: { xs: "18px", md: "20px" }, fontWeight: "500" }}
          color="primary.maintext"
          component="div">
          {ApiCard.title}
        </Typography>
        <Typography
          sx={{ fontSize: { xs: "11px", md: "12px" }, fontWeight: "500" }}
          color="primary.main"
          component="div">
          Category: {ApiCard.category}
        </Typography>
        {ApiCard.type === "Technologie" ? (
          <Typography
            sx={{ fontSize: { xs: "11px", md: "12px" }, fontWeight: "300" }}
            color="primary.maintext"
            component="div">
            Experience : {ApiCard.experienceYears}+ Years
          </Typography>
        ) : (
          ""
        )}

        <Typography
          sx={{
            overflow: "hidden",
            fontSize: { xs: "9px", md: "10px" },
            maxHeight: { xs: "40px", md: "60px" },
          }}
          color="secondary.main">
          {ApiCard.overview}
        </Typography>
      </CardContent>
      {ApiCard.type === "project" ? (
        <CardActions>
          <Link
            to={`/Projects/${ApiCard._id}`}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              fontSize: "12px",
              fontWeight: "700",
              textDecoration: "none",
            }}>
            More Details
          </Link>
        </CardActions>
      ) : (
        ""
      )}
    </Card>
  );
}
