import { makeStyles } from "@mui/styles";
import { themeValues } from "doc-bot/constants/ThemeConstants";

export const useNavBarStyles = makeStyles((theme) => ({
  drawer: {
    width: theme.spacing(35),
    flexShrink: 0,
  },
  drawerPaper: {
    width: theme.spacing(35),
    backgroundColor: theme.palette.background.paper,
    boxShadow: "rgba(149, 157, 165, 0) 0px 8px 24px !important",
    borderRight: `1px solid transparent !important`, 
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // padding: theme.spacing(0.5),
  },
  listItem: {
    padding: theme.spacing(1, 2),
    // "&:hover": {
    //   backgroundColor: theme.palette.action.hover,
    // },
    borderRadius: themeValues.border.borderRadius,
    height: theme.spacing(5),
  },
  activeListItem: {
    backgroundColor: theme.palette.action.selected,
    "&:hover": {
      backgroundColor: theme.palette.action.selected,
    },
  },
}));
