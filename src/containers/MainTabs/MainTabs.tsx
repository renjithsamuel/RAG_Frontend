"use client";
import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { useMainTabsStyles } from "./MainTabs.styles";
import { Home } from "../Home/Home";
import { Atlassian } from "../Atlassian/Atlassian";
import { BiMessageRoundedDots } from "react-icons/bi";
import { SiAtlassian } from "react-icons/si";

export const MainTabs = () => {
  const classes = useMainTabsStyles();
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Box className={classes.root}>
      {/* Modern Tab Slider */}
      <Box className={classes.tabContainer}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          className={classes.tabs}
          variant="standard"
          TabIndicatorProps={{
            style: { display: "none" }
          }}
        >
          <Tab
            icon={<BiMessageRoundedDots size={24} />}
            label="AI Chat"
            className={`${classes.tab} ${selectedTab === 0 ? classes.activeTab : ''}`}
          />
          <Tab
            icon={<SiAtlassian size={24} />}
            label="Atlassian"
            className={`${classes.tab} ${selectedTab === 1 ? classes.activeTab : ''}`}
          />
        </Tabs>
      </Box>

      {/* Tab Content */}
      <Box className={classes.content}>
        {selectedTab === 0 && <Home />}
        {selectedTab === 1 && <Atlassian />}
      </Box>
    </Box>
  );
};
