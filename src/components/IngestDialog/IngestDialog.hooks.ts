import { useCallback, useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import { usePageContext } from "doc-bot/context/PageContext";

interface IngestDialogHook {
  files: File[];
  handleUpload: () => Promise<void>;
  handleRemove: (file: File) => void;
  onDrop: (acceptedFiles: File[]) => void
  isUploading: boolean;
}

export const useIngestDialog = (onClose: () => void): IngestDialogHook => {
  const [files, setFiles] = useState<File[]>([]);
  const { setSnackBarError } = usePageContext();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(prev => [...prev, ...acceptedFiles]);
  }, []);


  const uploadMutation = useMutation((file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    return axios.post("/api/ingest", formData);
  });

  const handleUpload = async () => {
    try {
      await Promise.all(files.map(file => uploadMutation.mutateAsync(file)));
      setSnackBarError({
        ErrorMessage: "Files uploaded successfully",
        ErrorSeverity: "success",
      });
      setFiles([]);
      onClose();
    } catch (err) {
      setSnackBarError({
        ErrorMessage: "Error uploading files",
        ErrorSeverity: "error",
      });

      console.error("Error uploading files:", err);
    }
  };

  const handleRemove = (file: File) => {
    setFiles(files.filter(f => f !== file));
  };

  return {
    files,
    handleUpload,
    handleRemove,
    onDrop,
    isUploading: uploadMutation.isLoading,
  };
};