import { useMediaQuery, useTheme } from "@mui/material";

interface connectingToServerDialogHookProps {}

interface connectingToServerDialogHook {
  fullScreen: boolean;
}

export const useConnectingToServerDialog =
  ({}: connectingToServerDialogHookProps): connectingToServerDialogHook => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
    return {
      fullScreen,
    };
  };
