import { useState } from "react";

interface ChatInputHook {
  message: string;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
}

export const useChatInput = (
  onSend: (message: string) => void
): ChatInputHook => {
  const [message, setMessage] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  return { message, handleInput, handleSubmit };
};