// import { useGetUserAPI } from "doc-bot/pyconnection/User/getUser";
import { globalConstants } from "doc-bot/constants/GlobalConstants";
import { usePageContext } from "doc-bot/context/PageContext";
import { useUserContext } from "doc-bot/context/UserContext";
import { User } from "doc-bot/entity/User/User";
import {
  AlertSnackbarHook,
  useAlertSnackbar,
} from "doc-bot/hooks/AlertSnackBar.hooks";
import { Cookie } from "doc-bot/utils/cookies";
import { useEffect, useState } from "react";
import { mockUser } from "doc-bot/entity/User/User.mock";

type BaseLayoutHook = {
  user: User;
  isSuccess: boolean;
  isError: boolean;
  isLoading: boolean;
  isFetched: boolean;
  authenticated: boolean;
  inUnauthorizedPage: boolean;
  isAlertSnackbarOpen: AlertSnackbarHook["isAlertSnackbarOpen"];
  alertSnackbarMessage: AlertSnackbarHook["alertSnackbarMessage"];
  handleCloseAlertSnackbar: AlertSnackbarHook["handleCloseAlertSnackbar"];
};

type BaseLayoutParams = {
  authenticatedOnly: boolean;
};

export const useBaseLayout = ({
  authenticatedOnly,
}: BaseLayoutParams): BaseLayoutHook => {
  const [inUnauthorizedPage, setInUnauthorizedPage] = useState<boolean>(false);
  const { setUser, setAuthenticated, authenticated, user } = useUserContext();

  const {
    snackBarError,
    setSnackBarError,
    // setCurrentSideMenu,
    // currentSideMenu,
  } = usePageContext();

  const getAccessToken = (): string => {
    let access_token = "";

    // try {
    //   access_token = Cookie.access_token;
    // } catch (e) {
    //   if (authenticatedOnly) throw e;
    // }

    return access_token;
  };

  // const {
  //   data: getUserResponse,
  //   isError,
  //   isSuccess,
  //   isLoading,
  //   isFetched,
  // } = useGetUserAPI(!!getAccessToken());

  // mocking
  const getUserResponse = { data: mockUser };
  const isError = false;
  const isSuccess = true;
  const isLoading = false;
  const isFetched = true;

  useEffect(() => {
    if (isSuccess) {
      // verify if token is present or not

      // setAuthenticated(true);
      if (!!getAccessToken()) {
        setAuthenticated(true);
      }
      // else show pop up to login

      if (getUserResponse?.data) {
        setUser(new User(getUserResponse.data));
      }
    }
  }, [getUserResponse?.data, isSuccess]);

  const {
    alertSnackbarMessage,
    handleCloseAlertSnackbar,
    isAlertSnackbarOpen,
    openAlertSnackbar,
  } = useAlertSnackbar();

  useEffect(() => {
    if (isError) {
      openAlertSnackbar("Something went wrong!", "error");
    }
  }, [isError]);

  // call alert snackbar from where ever you want
  useEffect(() => {
    if (
      snackBarError?.ErrorMessage &&
      snackBarError?.ErrorMessage?.length > 0
    ) {
      openAlertSnackbar(
        snackBarError?.ErrorMessage,
        snackBarError?.ErrorSeverity
      );
      setSnackBarError(undefined);
      setTimeout(() => {
        handleCloseAlertSnackbar(undefined, "timeout");
      }, globalConstants.snackBarDelay);
    }
  }, [snackBarError?.ErrorMessage]);

  return {
    user,
    isSuccess,
    isFetched,
    isError,
    isLoading,
    authenticated,
    alertSnackbarMessage,
    inUnauthorizedPage,
    isAlertSnackbarOpen,
    handleCloseAlertSnackbar,
  };
};
