"use client";
import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/system";
import { FaPlus } from "react-icons/fa";
import { CreateCollectionDialog } from "../CreateCollectionDialog/CreateCollectionDialog";

const GlassCard = styled(motion.div)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.15)",
  borderRadius: 20,
  padding: 20,
  width: 200,
  height: 120,
  margin: 20,
  // color: "#fff",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.07)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
}));

export const CollectionSelectorDialog = ({
  onSelect,
}: {
  onSelect: (id: string, name: string) => void;
}) => {
  const [visible, setVisible] = useState(true);
  const [createOpen, setCreateOpen] = useState(false);

  const [collections, setCollections] = useState([
    { id: "1", name: "E3" },
    { id: "2", name: "Dashboard" },
    { id: "3", name: "Analytics" },
  ]);

  // Handle create new
  const handleCreateNew = () => setCreateOpen(true);

  const handleCreateConfirm = (name: string) => {
    const newColId = Date.now().toString();
    const newCollection = { id: newColId, name };
    setCollections((prev) => [...prev, newCollection]);
    setCreateOpen(false);
    // onSelect(newColId);
    // setVisible(false);
  };

  if (createOpen)
    return (
      <CreateCollectionDialog
        open={createOpen}
        onClose={() => setCreateOpen(false)}
        onCreate={handleCreateConfirm}
      />
    );

  if (!visible) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        zIndex: 9999,
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        bgcolor: "rgba(0,0,0,0.3)", // semi-transparent overlay
        backdropFilter: "blur(5px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          bgcolor: "rgba(243, 247, 249, 0.95)", // ✅ Background color here
          borderRadius: 4,
          p: 4,
          minWidth: 500,
          maxWidth: "90vw",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h2" sx={{ mb: 4 }}>
            Collections
          </Typography>
        </motion.div>

        <Box display="flex" flexWrap="wrap" justifyContent="center">
          {collections.map((col, i) => (
            <GlassCard
              key={col.id}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -100 * (i - 1) }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i }}
              onClick={() => {
                onSelect(col.id, col.name);
                setVisible(false);
              }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h6">{col.name}</Typography>
            </GlassCard>
          ))}
          <GlassCard
            whileHover={{ scale: 1.05 }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px dashed grey",
              boxShadow: "none",
            }}
            onClick={handleCreateNew}
          >
            <FaPlus size={30} />
          </GlassCard>
        </Box>
      </Box>
    </Box>
  );
};
