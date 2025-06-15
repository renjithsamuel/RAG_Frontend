"use client";
import { Box, Divider } from "@mui/material";
import { useChatMessagesStyles } from "./ChatMessages.styles";
import { useChatMessages } from "./ChatMessages.hooks";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useEffect, useRef } from "react";
import { ISource } from "doc-bot/entity/Content/Chat";
import { SourceList } from "../SourceList/SourceList";
import rehypeRaw from "rehype-raw";
import Skeleton from "@mui/material/Skeleton";

interface ChatMessagesParams {
  messages: Array<{
    content: string;
    isUser: boolean;
    sources: ISource[];
  }>;
}

export const ChatMessages = ({ messages }: ChatMessagesParams) => {
  const classes = useChatMessagesStyles();
  const { formattedMessages } = useChatMessages({ messages }) as {
    formattedMessages: Array<{
      content: string;
      isUser: boolean;
      sources?: ISource[];
      isLoading?: boolean;
    }>;
  };

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
          {message.isLoading ? (
            <>
              <Skeleton
                variant="text"
                width="25vw"
                height={24}
                animation="wave"
                sx={{ mb: 1 }}
              />
              <Skeleton
                variant="text"
                width="110%"
                height={24}
                animation="wave"
                sx={{ mb: 1 }}
              />
              <Skeleton
                variant="text"
                width="70%"
                height={24}
                animation="wave"
                sx={{ mb: 1 }}
              />
              <Skeleton
                variant="text"
                width="80%"
                height={24}
                animation="wave"
              />
            </>
          ) : (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
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
          )}

          {/* Sources if available */}
          {!message.isUser && !message.isLoading && message.sources && (
            <>
              <Divider sx={{ my: 2 }} />
              <SourceList sources={message.sources} />
            </>
          )}
        </Box>
      ))}
      {/* THIS is the magic scroll anchor */}
      <div ref={messagesEndRef} />
    </Box>
  );
};
