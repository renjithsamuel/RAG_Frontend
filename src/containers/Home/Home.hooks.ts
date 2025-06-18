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
    "**Equipment Adaptor**\n=====================\n\nThe Equipment Adaptor is a crucial component of the E3 architecture, serving as the equipment integration component. It enables real-time information collection from the equipment and sends it to E3, while also sending messages from E3 back to the equipment (like R2R parameter updates).\n\n**Functions of Equipment Adaptor**\n--------------------------------\n\nThe Equipment Adaptor performs several key functions:\n\n* Provides the interface connection between the equipment and E3\n* Retrieves equipment configuration information from E3 to be used by the equipment controller\n* Instructs the equipment controller to collect data from the equipment\n* Receives events, data, and alarms from the equipment and sends them to E3\n* Maps the equipment messages to the E3 Process Type messages\n* Sends messages from E3 to the equipment controller and waits for the reply\n* Provides logging and error notification capability\n\n**Equipment Adaptor Integration Options**\n--------------------------------------\n\nThe Equipment Adaptor provides flexible equipment connection options by supporting multiple types of equipment drivers, such as:\n\n* SECS/GEM\n* Interface A (EDA)\n* OPC\n* Offline saved files\n\nThis means that E3 can communicate with various types of equipment through existing drivers or custom-written drivers using APIs.\n\n**Equipment Adaptor Architecture**\n---------------------------------\n\nThe Equipment Adaptor architecture consists of the following components:\n\n* **Equipment adapter SDK**: provides the .NET XML/SOAP connection to E3 and exposes the equipment connection APIs to the Collector and custom equipment controller applications\n* **Data collector**: schedules and requests data collection from the equipment driver according to the data collection plan and provides a subset of the SDK APIs to the equipment driver\n* **Optional plug-in DLL**: optionally written Custom DLL to handle unique or special equipment scenarios\n* **Equipment driver**: written specifically for different types of equipment communications, interfaces directly with the equipment communications software layer to interact with the equipment\n\n**Equipment Adaptor Workflow**\n-----------------------------\n\nThe Equipment Adaptor workflow describes the ordering of messages performed in a normal SDK to E3 setup. The following messaging diagram shows the communication between the equipment, EAP, SDK, and E3.\n\n**Querying Sensor Data Programmatically**\n--------------------------------------\n\nTo facilitate easier data query mechanisms from external applications, ClientService hosts several REST API's. These APIs provide easy access to data such as tools, sensors, runs, sensor data, events, alarm, and EC. The APIs work transparently with both Oracle and KDB databases.\n\n**Conclusion**\n----------\n\nIn summary, the Equipment Adaptor is a vital component of the E3 architecture, enabling real-time information collection from equipment and sending messages between the equipment and E3. Its flexible integration options and workflow make it an essential tool for seamless communication between different types of equipment and E3.",

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
