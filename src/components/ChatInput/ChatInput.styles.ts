import { makeStyles } from "@mui/styles";
import { themeValues } from "doc-bot/constants/ThemeConstants";

export const useChatInputStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: ` ${theme.spacing(2)} !important`,
    color: `${theme.palette.text.primary} !important`,
    margin: theme.spacing(3),
    padding: theme.spacing(1.5),
    // height: theme.spacing(7),
    width: theme.spacing(110),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: themeValues.color.backgroundGray,
    borderRadius: theme.spacing(2),
    boxShadow: "rgba(149, 157, 165, 0.24) 0px 8px 24px",
    transition: "box-shadow 0.3s ease-in-out",
    "&:hover": {
      boxShadow: "rgba(133, 136, 139, 0.35) 0px 8px 24px",
    },
  },
  input: {
    border: `1px solid transparent`,
    color: `${theme.palette.text.primary} !important`,
  },
  button: {
    // fontSize: theme.spacing(2.25), // Increase font size
    // fontWeight: 400,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
