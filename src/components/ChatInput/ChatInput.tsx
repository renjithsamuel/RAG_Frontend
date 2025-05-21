"use client";
import { Box, Button, IconButton, TextField, useTheme } from "@mui/material";
import { useChatInputStyles } from "./ChatInput.styles";
import { useChatInput } from "./ChatInput.hooks";
import { IoIosSend } from "react-icons/io";
import { GoPaperclip } from "react-icons/go";

interface ChatInputParams {
  onSend: (question: string) => void;
}

export const ChatInput = ({ onSend }: ChatInputParams) => {
  const theme = useTheme();
  const classes = useChatInputStyles();
  const { question, handleInput, handleSubmit } = useChatInput(onSend);

  return (
    <Box className={classes.root}>
      <Box display={"flex"} alignItems="center" width={"100%"} gap={2}>
        <IconButton sx={{ margin: 0, padding: 0 }}>
          <GoPaperclip
            size={theme.spacing(3)}
            color={theme.palette.button.main}
            opacity={0.7}
          />
        </IconButton>
        <TextField
          fullWidth
          multiline
          maxRows={8}
          value={question}
          onChange={handleInput}
          className={classes.input}
          onKeyPress={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit();
            }
          }}
          placeholder="How may I assist you?"
          variant="standard"
          InputProps={{
            disableUnderline: true,
            style: { color: theme.palette.text.primary },
          }}
          sx={{ width: "85%" }}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "auto",
          display: "flex",
          justifyContent: "flex-end",
          p: 1,
        }}
      >
        <Button
          variant="contained"
          onClick={() => handleSubmit()}
          className={classes.button}
          sx={{
            fontWeight: 400,
            display: "flex",
            alignItems: "center",
            gap: theme.spacing(0.5),
            backgroundColor: theme.palette.button.main,
          }}
        >
          Send
          <IoIosSend size={theme.spacing(3)} />
        </Button>
      </Box>
    </Box>
  );
};
