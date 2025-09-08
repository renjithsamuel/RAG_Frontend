"use client";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import { useAtlassianLoginModalStyles } from "./AtlassianLoginModal.styles";
import { AtlassianCredentials } from "doc-bot/containers/Atlassian/Atlassian.hooks";
import { FiX, FiEye, FiEyeOff } from "react-icons/fi";
import { SiAtlassian } from "react-icons/si";

interface AtlassianLoginModalProps {
  open: boolean;
  onClose: () => void;
  onLogin: (credentials: AtlassianCredentials) => void;
}

export const AtlassianLoginModal = ({ open, onClose, onLogin }: AtlassianLoginModalProps) => {
  const classes = useAtlassianLoginModalStyles();
  const [username, setUsername] = useState("");
  const [pat, setPat] = useState("");
  const [showPat, setShowPat] = useState(false);
  const [errors, setErrors] = useState<{ username?: string; pat?: string }>({});

  const handleSubmit = () => {
    const newErrors: { username?: string; pat?: string } = {};

    if (!username.trim()) {
      newErrors.username = "Username or email is required";
    }
    if (!pat.trim()) {
      newErrors.pat = "Personal Access Token is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onLogin({ username: username.trim(), pat: pat.trim() });
    setUsername("");
    setPat("");
    setErrors({});
  };

  const handleClose = () => {
    setUsername("");
    setPat("");
    setErrors({});
    onClose();
  };

  return (
    <Dialog 
      open={open} 
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      className={classes.dialog}
    >
      <DialogTitle className={classes.title}>
        <Box className={classes.titleContent}>
          <Box className={classes.titleLeft}>
            <SiAtlassian size={24} color="#0052cc" />
            <Typography variant="h6">Connect to Atlassian</Typography>
          </Box>
          <IconButton onClick={handleClose} size="small">
            <FiX />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent className={classes.content}>
        <Typography variant="body2" className={classes.description}>
          Enter your Atlassian credentials to access your Jira tickets and related documentation.
        </Typography>

        <Box className={classes.form}>
          <TextField
            fullWidth
            label="Username or Email"
            variant="outlined"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              if (errors.username) {
                setErrors(prev => ({ ...prev, username: undefined }));
              }
            }}
            error={!!errors.username}
            helperText={errors.username}
            className={classes.textField}
          />

          <TextField
            fullWidth
            label="Personal Access Token (PAT)"
            variant="outlined"
            type={showPat ? "text" : "password"}
            value={pat}
            onChange={(e) => {
              setPat(e.target.value);
              if (errors.pat) {
                setErrors(prev => ({ ...prev, pat: undefined }));
              }
            }}
            error={!!errors.pat}
            helperText={errors.pat || "Generate a PAT from your Atlassian account settings"}
            className={classes.textField}
            InputProps={{
              endAdornment: (
                <IconButton
                  onClick={() => setShowPat(!showPat)}
                  edge="end"
                  size="small"
                >
                  {showPat ? <FiEyeOff /> : <FiEye />}
                </IconButton>
              ),
            }}
          />
        </Box>

        <Box className={classes.infoBox}>
          <Typography variant="caption" className={classes.infoText}>
            <strong>How to generate a PAT:</strong><br />
            1. Go to Atlassian Account Settings<br />
            2. Navigate to Security → API tokens<br />
            3. Create a new token with appropriate permissions<br />
            4. Copy and paste the token above
          </Typography>
        </Box>
      </DialogContent>

      <DialogActions className={classes.actions}>
        <Button onClick={handleClose} className={classes.cancelButton}>
          Cancel
        </Button>
        <Button 
          onClick={handleSubmit} 
          variant="contained" 
          className={classes.connectButton}
          disabled={!username.trim() || !pat.trim()}
        >
          Connect
        </Button>
      </DialogActions>
    </Dialog>
  );
};
