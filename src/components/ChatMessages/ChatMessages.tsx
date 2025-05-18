"use client";
import { Box } from "@mui/material";
import { useChatMessagesStyles } from "./ChatMessages.styles";
import { useChatMessages } from "./ChatMessages.hooks";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useEffect, useRef } from "react";

interface ChatMessagesParams {
  messages: Array<{
    content: string;
    isUser: boolean;
  }>;
}

export const ChatMessages = ({ messages }: ChatMessagesParams) => {
  const classes = useChatMessagesStyles();
  const { formattedMessages } = useChatMessages({ messages });

  const codeTheme = materialLight as { [key: string]: React.CSSProperties };

  // Anchor at end of chat
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Scroll on every new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Box className={classes.messagesContainer}>
      {formattedMessages.map((message, index) => (
        <Box
          key={index}
          className={`${classes.message} ${
            message.isUser ? classes.userMessage : classes.botMessage
          }`}
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ className, children, ...restProps }) {
                const match = /language-(\w+)/.exec(className || "");
                const { ref, ...propsForSH } = restProps as any;
                return match ? (
                  <SyntaxHighlighter
                    style={codeTheme}
                    language={match[1]}
                    PreTag="div"
                    {...propsForSH}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...propsForSH}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {message.content}
          </ReactMarkdown>
        </Box>
      ))}
      {/* THIS is the magic scroll anchor */}
      <div ref={messagesEndRef} />
    </Box>
  );
};
