"use client";
import { useEffect, useState } from "react";
import { Box, ButtonBase, CircularProgress, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/system";
import { FaPlus } from "react-icons/fa";
import { CreateCollectionDialog } from "../CreateCollectionDialog/CreateCollectionDialog";
import {
  useCollections,
  useCreateCollection,
} from "doc-bot/pyconnection/Collection/CreateCollection";
import { usePageContext } from "doc-bot/context/PageContext";

const GlassCard = styled(motion.div)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.15)",
  borderRadius: 20,
  width: 200,
  height: 120,
  margin: 20,
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.07)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden", // important for ripple clipping
}));

export const CollectionSelectorDialog = ({
  onSelect,
}: {
  onSelect: (id: string, name: string) => void;
}) => {
  const [visible, setVisible] = useState(true);
  const [createOpen, setCreateOpen] = useState(false);

  const { setSnackBarError } = usePageContext();
  // const { data: collections = [], isLoading, isError } = useCollections();
  // collection mock
  let isLoading = false
  let isError = false
  let collections = [
    { name: "Collection 1", id: "1" },
    { name: "Collection 2", id: "2" },
    { name: "Collection 3", id: "3" }
  ]

  const createCollection = useCreateCollection();

  useEffect(() => {
    if (isError) {
      setSnackBarError({
        ErrorMessage: "Failed to load collections",
        ErrorSeverity: "error",
      });
    }
  }, [isError]);

  // Handle create new
  const handleCreateNew = () => setCreateOpen(true);

  const handleCreateConfirm = async (name: string) => {
    try {
      let newCol = null;
      try {
        newCol = await createCollection.mutateAsync(name);
        setSnackBarError({
          ErrorMessage: "Collection created successfully",
          ErrorSeverity: "success",
        });
      } catch (error) {
        setSnackBarError({
          ErrorMessage: "Error uploading files",
          ErrorSeverity: "error",
        });
        throw error;
      }
      setCreateOpen(false);
      // onSelect(newCol.id, newCol.name);
      // setVisible(false);
    } catch (err) {
      console.error("Create collection failed", err);
    }
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
          <Typography variant="h2" sx={{ mb: 4, userSelect: "none" }}>
            Collections
          </Typography>
        </motion.div>

        {isLoading ? (
          <CircularProgress />
        ) : (
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            {collections.map((col, i) => (
              <GlassCard
                key={col.id}
                initial={{ opacity: 0, x: -100 * (i - 1) }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
                whileHover={{ scale: 1.05 }}
              >
                <ButtonBase
                  onClick={() => {
                    onSelect(col.id, col.name);
                    setVisible(false);
                  }}
                  sx={{
                    position: "absolute",
                    inset: 0, // stretch across the card
                    borderRadius: 2,
                  }}
                  focusRipple
                >
                  <Typography variant="h6" sx={{ zIndex: 1 }}>
                    {col.name}
                  </Typography>
                </ButtonBase>
              </GlassCard>
            ))}
            {/* add button */}
            <GlassCard
              whileHover={{ scale: 1.05 }}
              sx={{ border: "2px dashed grey", boxShadow: "none" }}
            >
              <ButtonBase
                onClick={handleCreateNew}
                sx={{ position: "absolute", inset: 0, borderRadius: 2 }}
                focusRipple
              >
                <FaPlus size={30} style={{ zIndex: 1 }} />
              </ButtonBase>
            </GlassCard>
          </Box>
        )}
      </Box>
    </Box>
  );
};
