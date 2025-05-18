import { themeValues } from "doc-bot/constants/ThemeConstants";
import { makeStyles } from "@mui/styles";

export const useLoginDialogStyles = makeStyles((theme) => ({
  loginDialog: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    borderRadius: themeValues.border.borderRadiusHigh,
    boxShadow: themeValues.shadow.boxShadowLight,
    transition: themeValues.transition.defaultTansition,
    animation: themeValues.animation.slideUp,
    "&:hover": {
      boxShadow: themeValues.shadow.boxShadowAttatched,
      cursor: "pointer",
    },
  },
  loginWrap: {
    backgroundColor: themeValues.color.accentBlue,
    border: themeValues.border.defaultborderGrey,
    boxShadow: themeValues.shadow.boxShadowLight,
  },
  loginButton: {
    backgroundColor: themeValues.color.backgroundGray,
    "&:hover": {
      backgroundColor: themeValues.color.accentBlue,
    },
  },
  textField: {
    marginTop: theme.spacing(2),
    width: "100%",
    textAlign: "left",
  },
  switcher: {
    color: themeValues.color.accentBlue,
    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
}));
