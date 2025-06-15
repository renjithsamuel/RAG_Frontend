import { useMutation } from "react-query";
import axios from "axios";

export const useUploadDocument = () =>
  useMutation(async ({ collectionId, file }: { collectionId: string; file: File }) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("collectionId", collectionId);
    return axios.post("/api/ingest", formData);
  });
