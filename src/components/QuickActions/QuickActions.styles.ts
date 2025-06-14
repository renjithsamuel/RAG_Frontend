import { makeStyles } from "@mui/styles";
import { themeValues } from "doc-bot/constants/ThemeConstants";

export const useQuickActionsStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "center",
    gap: themeValues.spacing(3),
    textAlign: "start",
    alignSelf: "center",
    // backgroundColor: "red",
    width: "80%",
  },
  logo: {
    // marginBottom: themeValues.spacing(4),
  },
  title: {
    fontWeight: themeValues.font.fontWeightThick,
    color: theme.palette.text.primary,
    marginBottom: themeValues.spacing(2),
    // backgroundColor: "red",
    width: "50%",
  },
  actionsContainer: {
    gap: themeValues.spacing(1),
    // backgroundColor: "red",
    width: "60%",
  },
  actionButton: {
    width: "fit-content",
    padding: themeValues.spacing(2),
    border: themeValues.border.defaultborderGrey,
    borderRadius: themeValues.border.borderRadius,
    "&:hover": {
      backgroundColor: theme.palette.button.main,
    },
  },
}));
