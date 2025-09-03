import { makeStyles } from "@mui/styles";
import { themeValues } from "doc-bot/constants/ThemeConstants";

export const useDocumentManagerButtonStyles = makeStyles(() => ({
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    // backgroundColor: "#fff !important",
    // boxShadow: "0 2px 4px rgba(0, 0, 0, 0.53)",
    border: "2px solid #b5b5b5 !important",
    color: "#0c2465",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0, // ✨ remove extra padding
    margin: 0, // ✨ remove margin to align with capsule
    "&:hover": {
      backgroundColor: "#eaeff2",
    },
  },
}));
