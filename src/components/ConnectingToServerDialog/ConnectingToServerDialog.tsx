import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  Typography,
} from "@mui/material";
import { useConnectingToServerDialogStyles } from "./ConnectingToServerDialog.styles";
import { useConnectingToServerDialog } from "./ConnectingToServerDialog.hooks";
import { themeValues } from "doc-bot/constants/ThemeConstants";

interface loginDialogParams {}

export const ConnectingToServerDialog = ({}: loginDialogParams) => {
  const { fullScreen } = useConnectingToServerDialog({});
  const classes = useConnectingToServerDialogStyles(themeValues);
  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={true}
        aria-labelledby="responsive-dialog-title"
        sx={{ backdropFilter: "blur(2px)" }}
      >
        <Box className={classes.progressBarContainer}>
          <Typography
            variant="h5"
            sx={{ fontWeight: themeValues.font.fontWeightThick }}
          >
            {" "}
            {"Connecting to Server"}
          </Typography>
          <CircularProgress sx={{ color: "#ffffff" }} />
        </Box>
      </Dialog>
    </>
  );
};
