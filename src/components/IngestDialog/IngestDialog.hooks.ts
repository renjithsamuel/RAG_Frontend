import { useCallback, useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import { usePageContext } from "doc-bot/context/PageContext";
import { useUploadDocument } from "doc-bot/pyconnection/Document/UploadDocument";

interface IngestDialogHook {
  files: File[];
  handleUpload: () => Promise<void>;
  handleRemove: (file: File) => void;
  onDrop: (acceptedFiles: File[]) => void;
  isUploading: boolean;
}

export const useIngestDialog = (onClose: () => void): IngestDialogHook => {
  const [files, setFiles] = useState<File[]>([]);
  const { setSnackBarError, collectionId } = usePageContext();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles((prev) => [...prev, ...acceptedFiles]);
  }, []);

  const uploadDocument = useUploadDocument();

  const handleUpload = async () => {
    try {
      for (const file of files) {
        await uploadDocument.mutateAsync({ collectionId, file });
      }
      setSnackBarError({
        ErrorMessage: "Files uploaded successfully",
        ErrorSeverity: "success",
      });
      setFiles([]);
      onClose();
    } catch (err) {
      console.error("Upload failed:", err);
      setSnackBarError({
        ErrorMessage: "Error uploading files",
        ErrorSeverity: "error",
      });
    }
  };

  const handleRemove = (file: File) => {
    setFiles(files.filter((f) => f !== file));
  };

  return {
    files,
    handleUpload,
    handleRemove,
    onDrop,
    isUploading: uploadDocument.isLoading,
  };
};
