import { Box, ButtonBase, Typography } from "@mui/material";
import { themeValues } from "doc-bot/constants/ThemeConstants";
import { ISource } from "doc-bot/entity/Content/Chat";
import { FormatTextUtil } from "doc-bot/utils/formatText";
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
    <motion.div whileHover={{ scale: 1.03 }}>
      <ButtonBase
        onClick={onClick}
        focusRipple
        sx={{
          background: "rgba(243, 247, 249, 0.95)",
          border: "1px solid rgba(12, 36, 101, 0.2)",
          borderRadius: 2,
          width: themeValues.spacing(23),
          height: themeValues.spacing(9),
          padding: 1.5,
          color: "#0c2465",
          backdropFilter: "blur(4px)",
          cursor: "pointer",
          overflow: "hidden",
          userSelect: "none",
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Typography variant="subtitle2" fontWeight={600}>
          {truncate(data.source || "", 15)}
        </Typography>
        <Typography variant="caption" mt={1}>
            {truncate(FormatTextUtil.removeExtraDots(data.content))}
        </Typography>
      </ButtonBase>
    </motion.div>
  );
};
