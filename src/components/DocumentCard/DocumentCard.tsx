import { Box, Typography, IconButton, Tooltip } from "@mui/material";
import { MdDelete } from "react-icons/md";
import { FaRegFilePdf } from "react-icons/fa6";
import { CiTextAlignCenter, CiImageOn } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { themeValues } from "doc-bot/constants/ThemeConstants";
import { FaRegFileLines } from "react-icons/fa6";

interface Props {
  name: string;
  onDeleteRequest: () => void;
}

export const DocumentCard = ({ name, onDeleteRequest }: Props) => {
  const [hovered, setHovered] = useState(false);


  const ext = name.split(".").pop()?.toLowerCase();
  
  let icon = <FaRegFileLines size={24}/>;
  if (ext === "pdf") icon = <FaRegFilePdf size={24} color="#D33D3D" />;
  else if (["png", "jpg", "jpeg", "webp", "gif"].includes(ext || ""))
    icon = <CiImageOn size={24} />;
  // else if (["txt", "md", "docx"].includes(ext || ""))
  //   icon = <CiTextAlignCenter size={24} />;


  return (
    <AnimatePresence>
      <Box
        component={motion.div}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        sx={{
          width: 250,
          height: 60,
          borderRadius: 2,
          backgroundColor: "#f3f7f9",
          // boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
          boxShadow: themeValues.shadow.boxShadowHeavy,
          m: 1.2,
          display: "flex",
          alignItems: "center",
          px: 2,
          justifyContent: "space-between",
          position: "relative",
          overflow: "hidden",
          transition: "0.2s all ease",
        }}
      >
        <Box>{icon}</Box>
        <Typography
          noWrap
          sx={{
            flex: 1,
            fontSize: 14,
            ml: 1,
            color: "#0c2465",
            fontWeight: 500,
            userSelect: "none",
          }}
        >
          {name}
        </Typography>

        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{ position: "absolute", top: 4, right: 4 }}
          >
            <Tooltip title="Delete" arrow>
              <IconButton
                size="small"
                onClick={onDeleteRequest}
                sx={{
                  backgroundColor: "rgba(255,255,255,0.8)",
                  "&:hover": { backgroundColor: "#eee" },
                }}
              >
                <MdDelete size={18} color="#D33D3D" />
              </IconButton>
            </Tooltip>
          </motion.div>
        )}
      </Box>
    </AnimatePresence>
  );
};
