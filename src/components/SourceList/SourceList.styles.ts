import { makeStyles } from "@mui/styles";
import { themeValues } from "doc-bot/constants/ThemeConstants";
import { scale } from "framer-motion";

export const useSourceListStyles = makeStyles(() => ({
  wrapper: {
    marginTop: themeValues.spacing(2),
  },
  title: {
    color: "#0c2465",
    fontWeight: 600,
    marginBottom: themeValues.spacing(1),
  },
  cards: {
    display: "flex",
    alignItems: "center",
    // justifyContent: "center",
    flexWrap: "wrap",
    gap: themeValues.spacing(2),
  },
  moreCard: {
    width: 100,
    height: 70,
    background: "rgba(243, 247, 249, 0.95)",
    border: "1px solid rgba(12, 36, 101, 0.2)",
    borderRadius: 20,
    backdropFilter: "blur(6px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#0c2465",
    cursor: "pointer",
    // "&:hover": {
    //   scale: 1.03,
    // },
  },
}));
