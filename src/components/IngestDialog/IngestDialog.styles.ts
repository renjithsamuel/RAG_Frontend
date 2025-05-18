import { makeStyles } from "@mui/styles";
import { themeValues } from "doc-bot/constants/ThemeConstants";

export const useIngestDialogStyles = makeStyles((theme) => ({
  dropzone: {
    border: `2px dashed ${themeValues.color.borderLight}`,
    borderRadius: themeValues.border.borderRadius,
    padding: theme.spacing(4),
    textAlign: "center",
    backgroundColor: themeValues.color.backgroundGray,
    color: themeValues.color.textSecondary,
    transition: themeValues.transition.defaultTansition,
    "&:hover": {
      borderColor: themeValues.color.accentBlue,
      backgroundColor: themeValues.color.contentBackground,
    },
  },
}));
