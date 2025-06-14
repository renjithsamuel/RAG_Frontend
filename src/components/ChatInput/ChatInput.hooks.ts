import { usePageContext } from "doc-bot/context/PageContext";
import { useChatQuery } from "doc-bot/pyconnection/Chat/queryRAG";
import { useEffect, useState } from "react";

interface ChatInputHook {
  question: string;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
}

export const useChatInput = (
  onSend: (message: string) => void,
): ChatInputHook => {
  const [question, setQuestion] = useState("");
  const chatQuery = useChatQuery();
  const { setMessages } = usePageContext();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = () => {
    if (question.trim()) {
      // add user message
      onSend(question);

      // Add bot message
      chatQuery.mutate(question, {
        onSuccess: (data) => {
          setMessages((prev) => [
            ...prev,
            { content: data.answer, isUser: false },
          ]);
        },
        onError: (err) => {
          // optional: show an error message
          setMessages((prev) => [
            ...prev,
            {
              content: `**Oops, something broke**: ${err.message}`,
              isUser: false,
            },
          ]);
        },
      });

      //  clean up the input field
      setQuestion("");
    }
  };

  return { question, handleInput, handleSubmit };
};
