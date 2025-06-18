import { useMutation } from "react-query";
import { PublicAxios } from "..";

export const useUploadDocument = () =>
  useMutation(async ({ collectionId, file }: { collectionId: string; file: File }) => {
    const formData = new FormData();
    formData.append("file", file);
    // console.log("File object:", file);
    // const reader = new FileReader();
    // reader.onload = function (e) {
    //   console.log("File binary data:", e.target?.result);
    // };
    // reader.readAsArrayBuffer(file);

    formData.append("collection_id", collectionId);
    return PublicAxios.post("/ingest", formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  });
