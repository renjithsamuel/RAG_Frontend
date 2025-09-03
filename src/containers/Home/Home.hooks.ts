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
              source: "E3ProgrammersGuide.pdf",
              content:
                ". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .398 Applied Materials Confidenti al | 1 Applied E3 10.1 Programmer’s Guide Equipment adapter component in E3 architecture CHAPTER 1 E3 EQUIPMENT ADAPTER Equipment adapter component in E3 architecture The following diagram illustrates the basic architecture of E3 highlighting the Equipment Adapter components. For more information about Equipment Adapter, see the “About equipment adapter” section. About equipment adapter Equipment adapter is the equipment integration component of E3. It can collect real-time information from the equipment and send it to E3. It can also send messages from E3 back to the equipment (like R2R parameter updates). Equipment adapter performs the following functions: • Provides the interface connection between the equipment and E3 • Retrieves equipment configuration information from E3 to be used by the equipment controller • Instructs the equipment controller to collect data from the equipment • Receives events, data, and alarms from the equipment and sends them to E3 • Maps the equipment messages to the E3 Process Type messages • Sends messages from E3 to the equipment controller and waits for the reply • Provides logging and error notification capability Applied Materials Confidenti al | 2 Applied E3 10.1 Programmer’s Guide About equipment adapter CHAPTER 1 E3 EQUIPMENT ADAPTER Equipment adapter integration options Equipment adapter provides flexible equipment connection options by supporting multiple types of equipment drivers such as SECS/GEM, Interface A (EDA), OPC, and offline saved files. The Equipment Adapter is comprised of a set of components used by each driver and it can be extended to custom drivers through the use of APIs. This means that no matter what type of communication the equipment requires, E3 can communicate with it through an existing driver or through the writing of a new driver. Equipment adapter architecture The following diagram illustrates the basic architecture of the E3 equipment adapter.",
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
  "Activate license key":
    "# 🔑 Activate License Key\n\nReady to unleash the full power of your software? Here’s how:\n\n1. Navigate to **Settings → License**.\n2. Click **Activate New License**.\n3. Paste your key into the field:\n\n   ```text\n   XXXX-YYYY-ZZZZ-ABCD\n   ```\n4. Hit **Submit** and wait for the confirmation toast.\n\n- If you see a ✅ “License Valid!” message, you’re golden.\n- If not, double-check for typos and try again.",

  "Set user permissions":
    "# 👥 Set User Permissions\n\nGrant rights like a benevolent overlord:\n\n| Role      | Permissions                 |\n|-----------|-----------------------------|\n| **Admin** | All access (read/write)     |\n| **Editor**| Edit content, no user mgmt  |\n| **Viewer**| Read-only                  |\n\n1. Go to **Users → Manage**.\n2. Select a user and click **Edit Role**.\n3. Choose the desired role from the dropdown.\n4. Click **Save** and rejoice.\n\n> _Note:_ Always keep at least one Admin around—don’t lock yourself out! 🤣",

  "Steps to update firmware":
    "# ⚙️ Steps to Update Firmware\n\nStay cutting-edge with these quick steps:\n\n1. Download the latest firmware `.bin` from our website.\n2. Connect device via USB.\n3. Open terminal and run:\n\n   ```bash\n   sudo fw-update --file firmware_v2.0.bin --device /dev/ttyUSB0\n   ```\n4. Wait for the `Update successful` message.\n5. Reboot your device:\n\n   ```bash\n   sudo reboot\n   ```\n\n> _Warning:_ Don’t pull the plug mid-flash or you’ll be staring at a brick. Literally. 😅",
  "Eqipment Adaptor":
    "**Equipment Adaptor**\n=====================\n\nThe Equipment Adaptor is a crucial component of the E3 architecture, serving as the equipment integration component. It enables real-time information collection from the equipment and sends it to E3, while also sending messages from E3 back to the equipment (like R2R parameter updates).\n\n**Functions of Equipment Adaptor**\n--------------------------------\n\nThe Equipment Adaptor performs several key functions:\n\n* Provides the interface connection between the equipment and E3\n* Retrieves equipment configuration information from E3 to be used by the equipment controller\n* Instructs the equipment controller to collect data from the equipment\n* Receives events, data, and alarms from the equipment and sends them to E3\n* Maps the equipment messages to the E3 Process Type messages\n* Sends messages from E3 to the equipment controller and waits for the reply\n* Provides logging and error notification capability\n\n**Equipment Adaptor Integration Options**\n--------------------------------------\n\nThe Equipment Adaptor provides flexible equipment connection options by supporting multiple types of equipment drivers, such as:\n\n* SECS/GEM\n* Interface A (EDA)\n* OPC\n* Offline saved files\n\nThis means that E3 can communicate with various types of equipment through existing drivers or custom-written drivers using APIs.\n\n**Equipment Adaptor Architecture**\n---------------------------------\n\nThe Equipment Adaptor architecture consists of the following components:\n\n* **Equipment adapter SDK**: provides the .NET XML/SOAP connection to E3 and exposes the equipment connection APIs to the Collector and custom equipment controller applications\n* **Data collector**: schedules and requests data collection from the equipment driver according to the data collection plan and provides a subset of the SDK APIs to the equipment driver\n* **Optional plug-in DLL**: optionally written Custom DLL to handle unique or special equipment scenarios\n* **Equipment driver**: written specifically for different types of equipment communications, interfaces directly with the equipment communications software layer to interact with the equipment\n\n**Equipment Adaptor Workflow**\n-----------------------------\n\nThe Equipment Adaptor workflow describes the ordering of messages performed in a normal SDK to E3 setup. The following messaging diagram shows the communication between the equipment, EAP, SDK, and E3.\n\n**Querying Sensor Data Programmatically**\n--------------------------------------\n\nTo facilitate easier data query mechanisms from external applications, ClientService hosts several REST API's. These APIs provide easy access to data such as tools, sensors, runs, sensor data, events, alarm, and EC. The APIs work transparently with both Oracle and KDB databases.\n\n**Conclusion**\n----------\n\nIn summary, the Equipment Adaptor is a vital component of the E3 architecture, enabling real-time information collection from equipment and sending messages between the equipment and E3. Its flexible integration options and workflow make it an essential tool for seamless communication between different types of equipment and E3.",
  "E3 Adapters":
    "**E3 Adapters**\n================\n\nIn this comprehensive guide, we will delve into the world of E3 adapters and explore their role in integrating equipment and applications with E3. As we navigate through the various types of adapters, you'll gain a deeper understanding of how they work together to facilitate seamless communication between different systems.\n\n### Equipment Adapter\n-------------------\n\nThe **Equipment Adapter** is an essential component of E3 that enables real-time data exchange between E3 and external equipment. Its primary function is to provide an interface connection between the equipment and E3, allowing for the collection and transmission of information in both directions.\n\n#### Key Features:\n• Provides interface connection between equipment and E3\n• Retrieves equipment configuration information from E3\n• Instructs equipment controller to collect data from equipment\n• Receives events, data, and alarms from equipment and sends them to E3\n• Maps equipment messages to E3 Process Type messages\n\n### Application Adapter\n-------------------------\n\nThe **Application Adapter** is another crucial component of E3 that facilitates integration with external applications. Its primary function is to implement the application programming interface (API) for integrating external applications into E3.\n\n#### Key Features:\n• Web service APIs to connect external applications with E3\n• Support for messages conforming to Process Control Systems (PCS) standards\n• Registration of external applications as Action Providers within E3\n\n### Integration Options\n------------------------\n\nE3 adapters offer flexible integration options by supporting multiple types of equipment drivers, such as SECS/GEM, Interface A (EDA), OPC, and offline saved files. This means that no matter what type of communication the equipment requires, E3 can communicate with it through an existing driver or through the writing of a new driver.\n\n### Architecture\n----------------\n\nThe architecture of E3 adapters is designed to provide a scalable and flexible integration platform. The Equipment Adapter is comprised of a set of components used by each driver, which can be extended to custom drivers through the use of APIs.\n\n### Conclusion\n----------\n\nIn conclusion, E3 adapters play a vital role in integrating equipment and applications with E3. By understanding the key features and architecture of these adapters, you'll be better equipped to leverage their capabilities and create seamless integrations between different systems.\n\n### Further Reading:\n------------------------\n\nFor more information on E3 adapters, please refer to the following sections:\n\n* About Equipment Adapter\n* About Application Adapter\n* Equipment Adapter Integration Options\n* Application Adapter Methods",
};

type QuickActionKey = keyof typeof quickActionMap;

