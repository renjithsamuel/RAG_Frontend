"use client";
import { Box, IconButton, Avatar, Typography, Tooltip } from "@mui/material";
import { useAtlassianHeaderStyles } from "./AtlassianHeader.styles";
import { FiUser } from "react-icons/fi";
import { SiAtlassian } from "react-icons/si";

interface AtlassianHeaderProps {
  isLoggedIn: boolean;
  onUserIconClick: () => void;
}

export const AtlassianHeader = ({ isLoggedIn, onUserIconClick }: AtlassianHeaderProps) => {
  const classes = useAtlassianHeaderStyles();

  return (
    <Box className={classes.header}>
      <Box className={classes.leftSection}>
        <SiAtlassian size={28} className={classes.logo} />
        <Typography variant="h5" className={classes.title}>
          Atlassian Workspace
        </Typography>
      </Box>

      <Tooltip title={isLoggedIn ? "Account Settings" : "Login to Atlassian"}>
        <IconButton onClick={onUserIconClick} className={classes.userButton}>
          <Avatar className={classes.avatar}>
            <FiUser size={20} />
          </Avatar>
        </IconButton>
      </Tooltip>
    </Box>
  );
};
