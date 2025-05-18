"use client";
import { Box, Button, Chip, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { useQuickActionsStyles } from "./QuickActions.styles";
import { Merriweather } from "next/font/google";
import clsx from "clsx";
import { usePageContext } from "doc-bot/context/PageContext";

interface QuickActionsParams {
  onActionClick: (action: string) => void;
}

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const QuickActions = ({ onActionClick }: QuickActionsParams) => {
  const theme = useTheme();
  const { navBarOpen } = usePageContext();
  const classes = useQuickActionsStyles();
  const actions = [
    "Factory reset guide",
    "Activate license key",
    "Set user permissions",
    "Steps to update firmware",
  ];

  return (
    <Box className={classes.container} sx={{ marginLeft: navBarOpen ? 0 : theme.spacing(30) }}>
      <Image
        src="/applied-logo.svg"
        alt="Applied Materials"
        width={80}
        height={60}
        className={classes.logo}
      />
      <Typography
        variant="h2"
        className={clsx(`${merriweather.variable}`, classes.title)}
      >
        {"Say Goodbye to Manual Chaos"}
      </Typography>
      <Box className={classes.actionsContainer}>
        {actions.map((action) => (
          <Chip
            key={action}
            label={action}
            className={classes.actionButton}
            style={{
              backgroundColor: theme.palette.button.contrastText,
              color: theme.palette.button.main,
              fontWeight: 500,
              marginRight: theme.spacing(1.5),
              marginBottom: theme.spacing(1.5),
            }}
            variant="filled"
            onClick={() => onActionClick(action)}
            clickable
          />
        ))}
      </Box>
    </Box>
  );
};
