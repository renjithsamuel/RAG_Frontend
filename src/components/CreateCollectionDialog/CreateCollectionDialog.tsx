"use client";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  onCreate: (name: string) => void;
}

export const CreateCollectionDialog = ({ open, onClose, onCreate }: Props) => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (name.trim()) {
      onCreate(name.trim());
      setName("");
    }
  };

  return (
    <Dialog open={open} onClose={onClose} sx={{ backdropFilter: "blur(5px)" }}>
      <DialogTitle sx={{ bgcolor: "#f3f7f9", width: "50vw" }}>
        <Typography variant="h3">Create New Collection</Typography>
      </DialogTitle>
      <DialogContent sx={{ bgcolor: "#f3f7f9" }}>
        <TextField
          fullWidth
          variant="outlined"
          label="Collection Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{
            mt: 2,
            input: { color: "#525252" },
            label: { color: "#525252" },
          }}
        />
      </DialogContent>
      <DialogActions sx={{ bgcolor: "#f3f7f9", p: 2 }}>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{ bgcolor: "#0c2465", color: "#fff" }}
        >
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};
