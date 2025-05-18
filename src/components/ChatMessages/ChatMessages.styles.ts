import { makeStyles } from "@mui/styles";
import { themeValues } from "doc-bot/constants/ThemeConstants";

export const useChatMessagesStyles = makeStyles((theme) => ({
  messagesContainer: {
    flex: 1,
    overflowY: "auto",
    padding: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    width: "100%",
    maxWidth: "800px",
    margin: "0 auto",
  },
  message: {
    maxWidth: "85%",
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    width: "fit-content",

    // Core text handling
    overflowWrap: "anywhere",
    wordBreak: "break-word",

    // Main Markdown container (ReactMarkdown wraps in div)
    "& > div": {
      padding: theme.spacing(1),
      width: "100%",
      whiteSpace: "pre-wrap",
      overflowWrap: "anywhere",
      wordBreak: "break-word",
    },

    // Code blocks
    "& pre": {
      margin: 0,
      padding: theme.spacing(2),
      // borderRadius: theme.shape.borderRadius,
      background: "#f5f5f5",
      overflowX: "auto", // horizontal scroll for super-long lines
      whiteSpace: "pre-wrap", // wrap lines if needed
      wordBreak: "break-word",
      overflowWrap: "anywhere",
    },

    "& code": {
      fontFamily: "Monaco, Courier New, monospace",
      fontSize: "0.875rem",
      background: "#f0f0f0",
      padding: "0.2em 0.4em",
      borderRadius: "4px",
      wordBreak: "break-word",
      overflowWrap: "anywhere",
      whiteSpace: "pre-wrap",
    },

    // Tables
    "& table": {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: theme.spacing(1),
    },
    "& th, & td": {
      border: `1px solid ${theme.palette.divider}`,
      padding: theme.spacing(1),
      textAlign: "left",
      overflowWrap: "anywhere",
      wordBreak: "break-word",
    },

    // Blockquote
    "& blockquote": {
      borderLeft: `4px solid ${theme.palette.divider}`,
      margin: theme.spacing(2, 0),
      padding: theme.spacing(1, 2),
      color: theme.palette.text.secondary,
      backgroundColor: "#f9f9f9",
    },
  },

  userMessage: {
    marginLeft: "auto",
    backgroundColor: theme.palette.userMessage.main,
    color: theme.palette.userMessage.contrastText,
    boxShadow: "rgba(149, 157, 165, 0.08) 0px 8px 24px",
    borderBottomLeftRadius: themeValues.border.borderRadiusHigh,
    borderBottomRightRadius: themeValues.border.borderRadiusHigh,
    borderTopLeftRadius: themeValues.border.borderRadiusHigh,
  },
  botMessage: {
    marginRight: "auto",
    backgroundColor: theme.palette.botMessage.main,
    color: theme.palette.botMessage.contrastText,
    alignSelf: "flex-start",
  },
}));
