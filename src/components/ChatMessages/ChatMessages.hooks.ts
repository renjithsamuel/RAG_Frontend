import { useMemo } from "react";

interface ChatMessagesHookProps {
  messages: Array<{
    content: string;
    isUser: boolean;
  }>;
}

interface ChatMessagesHook {
  formattedMessages: Array<{
    content: string;
    isUser: boolean;
  }>;
}

export const useChatMessages = ({
  messages,
}: ChatMessagesHookProps): ChatMessagesHook => {
  // Massage message.content: trim whitespace *and* remove leading/trailing fences
  const formattedMessages = useMemo(() => {
    return messages.map((msg) => {
      let md = msg.content || "";

      // 1️⃣ Trim off leading/trailing blank lines:
      md = md.replace(/^\s*\n/, "").replace(/\n\s*$/, "");

      // 2️⃣ Compute minimal indent of all non-blank lines:
      const indents = md
        .split("\n")
        .filter((line) => line.trim().length > 0)
        .map((line) => line.match(/^(\s*)/)![1].length);
      const minIndent = indents.length ? Math.min(...indents) : 0;

      // 3️⃣ Remove that indent from every line:
      if (minIndent > 0) {
        const dedentRegex = new RegExp(`^\\s{${minIndent}}`, "gm");
        md = md.replace(dedentRegex, "");
      }

      return { ...msg, content: md };
    });
  }, [messages]);



  return { formattedMessages };
};
