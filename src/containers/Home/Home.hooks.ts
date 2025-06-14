import { usePageContext } from "doc-bot/context/PageContext";
import { useState } from "react";

interface HomeHook {
  messages: any[];
  handleSendMessage: (message: string) => void;
  handleQuickAction: (action: QuickActionKey) => void;
}

export const useHome = (): HomeHook => {
  const { messages, setMessages } = usePageContext();

  const handleSendMessage = (message: string) => {
    // Add user message
    setMessages((prev) => [...prev, { content: message, isUser: true }]);
    // // Add temporary bot response after 1 second
    // setTimeout(() => {
    //   setMessages((prev) => [
    //     ...prev,
    //     {
    //       content: `
    // **🤖 Doc Bot:**
    // # Thank you for reaching out!
    // ### Your message has been received and is important to us.

    // **Here's what you can do next:**
    // - Ask me anything about your documents or data.
    // - Use **keywords** or **phrases** for more accurate answers.
    // - If you need help, just type \`help\`.

    // _I'm here to assist you with all your document-related queries!_
    // `,
    //       isUser: false,
    //     },
    //   ]);
    // }, 1000);
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
          sources: [
            {
              source: "Device_Manual.pdf",
              content:
                "To perform a factory reset, ensure the device is powered off. Locate the reset pinhole, insert a paperclip, and hold for 10 seconds. This will restore all settings to default and erase user data. Refer to the troubleshooting section for post-reset steps.",
            },
            {
              source: "QuickStart_Guide.pdf",
              content:
                "Before resetting, disconnect all cables and peripherals. The reset process may take a few minutes. Once complete, the device will reboot automatically and display the initialization sequence on the main screen.",
            },
            {
              source: "User_Guide.pdf",
              content:
                "After a factory reset, you must reconfigure your network settings and restore any backed-up data. The device will prompt you to complete the initial setup wizard, including language and region selection.",
            },
            {
              source: "Troubleshooting_FAQ.pdf",
              content:
                "If the device does not respond after a reset, check the power supply and repeat the process. Persistent issues may require contacting technical support or referring to the advanced troubleshooting appendix.",
            },
            {
              source: "Admin_Reference.pdf",
              content:
                "Factory resets are recommended before transferring ownership or disposing of the device. Always backup important files beforehand, as this process is irreversible and all user data will be lost.",
            },
            {
              source: "Security_Best_Practices.pdf",
              content:
                "Performing a factory reset ensures that all personal information and credentials are removed from the device. This is a critical step for maintaining data privacy and security compliance.",
            },
          ],
        },
      ]);
    }, 500);
  };

  return {
    messages,
    handleSendMessage,
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
  "Configure network settings":
    "# 🌐 Configure Network Settings\n\nTime to plug your device into the Matrix. Here's how to set it up:\n\n1. Go to **Settings → Network**.\n2. Choose your connection type:\n   - **Wi-Fi** (lazy wireless warrior 🧘‍♂️)\n   - **Ethernet** (for those who live life in the fast lane 🏎️)\n3. For Wi-Fi:\n   - Click **Scan** and select your network.\n   - Enter the **Wi-Fi password** (no typos, please 🙏).\n4. For Ethernet:\n   - Plug the cable in... that’s it, you're done. Welcome to 1999.\n5. (Optional) Assign a static IP if you're feeling fancy:\n\n   ```bash\n   sudo ifconfig eth0 192.168.1.100 netmask 255.255.255.0\n   ```\n\n6. Test it with:\n\n   ```bash\n   ping google.com\n   ```\n\n> _Tip:_ No connection? Try turning it off and on again. Classic IT wizardry. 🧙‍♂️",
};

type QuickActionKey = keyof typeof quickActionMap;
