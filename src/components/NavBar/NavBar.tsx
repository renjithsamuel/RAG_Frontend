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
import { RiChatNewLine } from "react-icons/ri";

interface NavBarParams {}

export const NavBar = ({}: NavBarParams) => {
  const theme = useTheme();
  const classes = useNavBarStyles();
  const {
    open,
    toggleDrawer,
    activeID,
    chats,
    handleListItemClick,
    handleNewChat,
  } = useNavBar();

  return (
    <>
      {!open && (
        <IconButton
          onClick={toggleDrawer}
          style={{
            margin: theme.spacing(2),
            padding: theme.spacing(3),
            position: "fixed",
          }}
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
          {/* New Chat Button */}
          <ListItemButton
            onClick={handleNewChat}
            sx={{
              padding: theme.spacing(1.5),
              borderRadius: themeValues.border.borderRadius,
              margin: theme.spacing(1),
              boxShadow: themeValues.shadow.boxShadowLight,
              "&:hover": {
                backgroundColor: "#e0e7eb",
              },
            }}
          >
            <RiChatNewLine
              fontSize="large"
              style={{ marginRight: theme.spacing(1) }}
            />
            <Typography fontWeight={500} fontSize={16}>
              New Chat
            </Typography>
          </ListItemButton>

          {/* prev chats */}
          <Box px={2} mt={4} mb={0.5}>
            <Typography
              variant="caption"
              sx={{ fontWeight: 600, color: theme.palette.text.secondary }}
            >
              Previous Chats
            </Typography>
          </Box>

          {chats.map((chat) => (
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
