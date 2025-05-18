import { usePageContext } from "doc-bot/context/PageContext";
import { useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

interface loginDialogHookProps {}

interface loginDialogHook {
  fullScreen: boolean;
  openDialog: boolean;
  handleCloseDialog: () => void;
}

export const useLoginDialog = ({}: loginDialogHookProps): loginDialogHook => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [openDialog, setOpenDialog] = useState<boolean>(true);


  // const {
  //   mutateAsync: loginUser,
  //   isLoading: isLoginError,
  //   isSuccess: isLoginSuccess,
  // } = useLoginUserAPI();


  const { setSnackBarError } = usePageContext();

  const handleCloseDialog = () => {
    setOpenDialog(false);
  }


  // useEffect(() => {
  //   if (isLoginSuccess) {
  //     handleCloseDialog();
  //     setSnackBarError({
  //       ErrorMessage: "login success",
  //       ErrorSeverity: "success",
  //     });
  //   }
  // }, [isLoginSuccess]);


  return {
    fullScreen,
    openDialog,
    handleCloseDialog,
  };
};
