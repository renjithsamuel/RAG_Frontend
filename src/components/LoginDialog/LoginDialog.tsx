"use client";
import { Box, Dialog, Typography } from "@mui/material";
import { useLoginDialogStyles } from "./LoginDialog.styles";
import { themeValues } from "doc-bot/constants/ThemeConstants";
import { useLoginDialog } from "./LoginDialog.hooks";

interface loginDialogParams {}

export const LoginDialog = ({}: loginDialogParams) => {
  const { fullScreen, openDialog, handleCloseDialog } = useLoginDialog({});
  const classes = useLoginDialogStyles();
  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={openDialog}
        // onClose={handleCloseDialog}
        aria-labelledby="responsive-dialog-title"
        sx={{ backdropFilter: "blur(2px)" }}
      >
        <Box className={classes.loginWrap}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: themeValues.font.fontWeightThick,
              userSelect: "none",
            }}
          >
            {"Please Login"}
          </Typography>
          {/* {sign in with google} */}
        </Box>
      </Dialog>
    </>
  );
};
