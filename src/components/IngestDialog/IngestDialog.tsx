"use client";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  useTheme,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDropzone } from "react-dropzone";
import { useIngestDialogStyles } from "./IngestDialog.styles";
import { useIngestDialog } from "./IngestDialog.hooks";

interface IngestDialogParams {
  open: boolean;
  onClose: () => void;
}

export const IngestDialog = ({ open, onClose }: IngestDialogParams) => {
  const theme = useTheme();
  const classes = useIngestDialogStyles();
  const { files, handleUpload, handleRemove, isUploading, onDrop } =
    useIngestDialog(onClose);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "text/*": [".txt"], "application/pdf": [".pdf"] },
  });

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      sx={{ backdropFilter: "blur(4px)" }}
    >
      <DialogTitle>
        <Typography variant="h4"> Upload Documents</Typography>
      </DialogTitle>
      <DialogContent>
        <div {...getRootProps({ className: classes.dropzone })}>
          <input {...getInputProps()} />
          <p>Drag & drop files here, or click to select files</p>
          <p>(Supports .txt and .pdf files)</p>
        </div>

        <List>
          {files.map((file) => (
            <ListItem key={file.name}>
              <ListItemText primary={file.name} />
              <IconButton onClick={() => handleRemove(file)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          sx={{ backgroundColor: theme.palette.button.contrastText }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleUpload}
          variant="contained"
          disabled={isUploading || files.length === 0}
          sx={{ backgroundColor: "#0c2465" }}
        >
          {isUploading ? "Uploading..." : "Upload"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
