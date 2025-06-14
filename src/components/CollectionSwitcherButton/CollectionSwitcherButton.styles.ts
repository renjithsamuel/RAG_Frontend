import { makeStyles } from "@mui/styles";
import { themeValues } from "doc-bot/constants/ThemeConstants";

export const useCollectionSwitcherStyles = makeStyles(() => ({
  container: {
    display: "flex",
    alignItems: "center",
    padding: "6px 12px",
    borderRadius: "999px", // capsule
    boxShadow: "0 2px 4px rgba(0,0,0,0.08)",
    backgroundColor: "#fff",
    // backgroundColor: "blue",
    color: "#0c2465",
    marginLeft: "auto",
    height: 36,
    userSelect: "none",
  },
  text: {
    paddingRight: themeValues.spacing(1),
    fontWeight: "700 !important",
    color: "#0c2465",
    minHeight: 24, // ✨ ensures consistent height
    display: "flex",
    alignItems: "center",
  },

  iconButton: {
    padding: 4,
    color: "#0c2465",
  },
}));
