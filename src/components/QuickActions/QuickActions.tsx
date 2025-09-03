"use client";
import { Box, Button, Chip, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { useQuickActionsStyles } from "./QuickActions.styles";
import { Merriweather } from "next/font/google";
import clsx from "clsx";
import { usePageContext } from "doc-bot/context/PageContext";
import { themeValues } from "doc-bot/constants/ThemeConstants";

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
    "Activate license key",
    "Set user permissions",
    "Steps to update firmware",
    "Eqipment Adaptor",
    "E3 Adapters",
  ];

  return (
    <Box
      className={classes.container}
      sx={{ marginLeft: navBarOpen ? theme.spacing(20) : theme.spacing(60) }}
    >
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
        sx={{ userSelect: "none" }}
      >
        {"Say Goodbye to Manual Chaos"}
      </Typography>
      <Box className={classes.actionsContainer}>
        {actions.map((action) => (
          <Chip
            key={action}
            label={action}
            className={classes.actionButton}
            sx={{
              backgroundColor: theme.palette.button.contrastText,
              color: theme.palette.button.main,
              fontWeight: 500,
              marginRight: theme.spacing(1.5),
              marginBottom: theme.spacing(1.5),
              boxShadow: themeValues.shadow.boxShadowboxy,
              transition: "background-color 0.3s, box-shadow 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: theme.palette.button.dark,
                boxShadow: themeValues.shadow.boxShadowHeavy,
              },
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
