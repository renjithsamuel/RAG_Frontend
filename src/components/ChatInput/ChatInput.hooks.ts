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

      const loadingId = Date.now();

      setMessages((prev) => [
        ...prev,
        { content: "", isUser: false, isLoading: true, id: loadingId },
      ]);

      // Add bot message
      chatQuery.mutate(question, {
        onSuccess: (data) => {
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === loadingId
                ? {
                    content: data.answer,
                    isUser: false,
                    sources: data.sources,
                    isLoading: false,
                    id: loadingId,
                  }
                : msg,
            ),
          );
        },
        onError: (err) => {
          // optional: show an error message
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === loadingId
                ? {
                    content: `**Oops, something went wrong**: ${err.message}`,
                    isUser: false,
                    isLoading: false,
                    id: loadingId,
                  }
                : msg,
            ),
          );
        },
      });

      //  clean up the input field
      setQuestion("");
    }
  };

  return { question, handleInput, handleSubmit };
};
