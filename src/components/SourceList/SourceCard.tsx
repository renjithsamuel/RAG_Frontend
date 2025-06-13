import { Box, Typography } from "@mui/material";
import { ISource } from "doc-bot/entity/Content/Chat";
import { motion } from "framer-motion";

const truncate = (text: string, limit = 15) =>
  text.length > limit ? text.slice(0, limit) + "..." : text;

export const SourceCard = ({
  data,
  onClick,
  index,
}: {
  data: ISource;
  onClick: () => void;
  index: number;
}) => {
  return (
    <Box
      component={motion.div}
      whileHover={{ scale: 1.03 }}
      onClick={onClick}
      sx={{
        background: "rgba(243, 247, 249, 0.95)",
        border: "1px solid rgba(12, 36, 101, 0.2)",
        borderRadius: 2,
        width: 180,
        height: 100,
        padding: 2,
        color: "#0c2465",
        backdropFilter: "blur(4px)",
        cursor: "pointer",
        overflow: "hidden",
      }}
    >
      <Typography variant="caption" fontWeight={600}>
        {data.source.split("\\").pop()} 
        {/* - Page {data.page} */}
      </Typography>
      <Typography variant="body2" mt={1}>
        {truncate(data.content)}
      </Typography>
    </Box>
  );
};
