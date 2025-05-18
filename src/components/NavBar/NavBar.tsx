import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  ListItemButton,
  useTheme,
  Divider,
  Typography,
  Box,
} from "@mui/material";
import { useNavBarStyles } from "./NavBar.styles";
import { useNavBar } from "./NavBar.hooks";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import clsx from "clsx";
import { themeValues } from "doc-bot/constants/ThemeConstants";

interface NavBarParams {}

export const NavBar = ({}: NavBarParams) => {
  const theme = useTheme();
  const classes = useNavBarStyles();
  const { open, toggleDrawer, activeID, handleListItemClick } = useNavBar();

  // Mock previous chats
  const previousChats = [
    { id: 1, title: "Chat 1", date: "2024-03-01" },
    { id: 2, title: "Document Analysis", date: "2024-03-02" },
    { id: 3, title: "Project Discussion", date: "2024-03-03" },
  ];

  return (
    <>
      {!open && (
        <IconButton
          onClick={toggleDrawer}
          style={{ margin: theme.spacing(2), padding: theme.spacing(3), position: "fixed" }}
        >
          <MenuIcon />
        </IconButton>
      )}
      <Drawer
        variant="persistent"
        open={open}
        onClose={toggleDrawer}
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
      >
        <Toolbar className={classes.toolbar}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* logo and title */}
            <img
              src="/applied-logo.svg"
              alt="Logo"
              style={{
                width: "20px",
                height: "20px",
                marginRight: theme.spacing(1),
              }}
            />
            {/* <Typography variant="body1" noWrap> */}
            <img
              src="/applied-title.svg"
              alt="Logo"
              style={{
                width: "160px",
                height: "40px",
                marginRight: theme.spacing(1),
              }}
            />
            {/* Applied Materials  */}
            {/* </Typography> */}
          </Box>
          {/* collapse icon */}
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        {/* list of items */}
        <List>
          {previousChats.map((chat) => (
            <ListItemButton
              onClick={() => handleListItemClick(chat.id)}
              key={chat.id}
              style={{
                padding: 0,
                borderRadius: themeValues.border.borderRadius,
                margin: theme.spacing(0.5),
              }}
            >
              <ListItem
                key={chat.id}
                className={clsx(classes.listItem, {
                  [classes.activeListItem]: activeID === chat.id,
                })}
                disablePadding
              >
                <ListItemText primary={chat.title} />
              </ListItem>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
};
