import { useQuery } from "react-query";
import { PublicAxios } from "..";
import { QueryKeys } from "doc-bot/constants/Querykeys";
import { IDocument } from "doc-bot/entity/Document/Document";

export const useDocuments = (collectionId: string) =>
  useQuery<IDocument[]>(
    [QueryKeys.GET_DOCUMENTS, collectionId],
    async () => {
      const res = await PublicAxios.get("/api/documents", {
        params: { collectionId },
      });
      return res.data;
    },
    { enabled: !!collectionId }
  );
