import { usePageContext } from "doc-bot/context/PageContext";
import { useState } from "react";

interface HomeHook {
  messages: any[];
  handleSendMessage: (message: string) => void;
  isIngestOpen: boolean;
  handleIngestOpen: () => void;
  handleIngestClose: () => void;
  handleQuickAction: (action: QuickActionKey) => void;
}

export const useHome = (): HomeHook => {
  const { messages, setMessages } = usePageContext();
  const [isIngestOpen, setIsIngestOpen] = useState(false);

  const handleSendMessage = (message: string) => {
    // Add user message
    setMessages((prev) => [...prev, { content: message, isUser: true }]);
    // Add temporary bot response after 1 second
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          content: `
    **🤖 Doc Bot:**  
    # Thank you for reaching out!  
    ### Your message has been received and is important to us.

    **Here's what you can do next:**
    - Ask me anything about your documents or data.
    - Use **keywords** or **phrases** for more accurate answers.
    - If you need help, just type \`help\`.


    _I'm here to assist you with all your document-related queries!_  
    `,
          isUser: false,
        },
      ]);
    }, 1000);
  };

  const handleQuickAction = (action: QuickActionKey) => {
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          content: action,
          isUser: true,
        },
        {
          content: quickActionMap[action],
          isUser: false,
        },
      ]);
    }, 500);
  };

  return {
    messages,
    handleSendMessage,
    isIngestOpen,
    handleIngestOpen: () => setIsIngestOpen(true),
    handleIngestClose: () => setIsIngestOpen(false),
    handleQuickAction,
  };
};

const quickActionMap: Record<string, string> = {
  "Factory reset guide":
    "# 🛠️ Factory Reset Guide\n\nFollow these steps to return your device to its out-of-the-box glory:\n\n1. **Power off** the device by holding the power button for 5 seconds.\n2. **Unplug** all cables and peripherals.\n3. **Press & hold** the **Reset** pinhole (use a paperclip) for 10 seconds.\n4. **Reboot** and wait for the **🔄 Initialization** sequence to complete.\n\n```sh\n# Example CLI reset\ndevice-cli reset --factory\n```\n\n> _Pro tip:_ Backup your data or prepare for a fresh start—no mercy! 😜",

  "Activate license key":
    "# 🔑 Activate License Key\n\nReady to unleash the full power of your software? Here’s how:\n\n1. Navigate to **Settings → License**.\n2. Click **Activate New License**.\n3. Paste your key into the field:\n\n   ```text\n   XXXX-YYYY-ZZZZ-ABCD\n   ```\n4. Hit **Submit** and wait for the confirmation toast.\n\n- If you see a ✅ “License Valid!” message, you’re golden.\n- If not, double-check for typos and try again.",

  "Set user permissions":
    "# 👥 Set User Permissions\n\nGrant rights like a benevolent overlord:\n\n| Role      | Permissions                 |\n|-----------|-----------------------------|\n| **Admin** | All access (read/write)     |\n| **Editor**| Edit content, no user mgmt  |\n| **Viewer**| Read-only                  |\n\n1. Go to **Users → Manage**.\n2. Select a user and click **Edit Role**.\n3. Choose the desired role from the dropdown.\n4. Click **Save** and rejoice.\n\n> _Note:_ Always keep at least one Admin around—don’t lock yourself out! 🤣",

  "Steps to update firmware":
    "# ⚙️ Steps to Update Firmware\n\nStay cutting-edge with these quick steps:\n\n1. Download the latest firmware `.bin` from our website.\n2. Connect device via USB.\n3. Open terminal and run:\n\n   ```bash\n   sudo fw-update --file firmware_v2.0.bin --device /dev/ttyUSB0\n   ```\n4. Wait for the `Update successful` message.\n5. Reboot your device:\n\n   ```bash\n   sudo reboot\n   ```\n\n> _Warning:_ Don’t pull the plug mid-flash or you’ll be staring at a brick. Literally. 😅",
};

type QuickActionKey = keyof typeof quickActionMap;
