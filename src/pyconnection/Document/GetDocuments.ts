import { useQuery } from "react-query";
import { PublicAxios } from "..";
import { QueryKeys } from "doc-bot/constants/Querykeys";
import { IDocument } from "doc-bot/entity/Document/Document";

export const useDocuments = (collection_id: string) =>
  useQuery<IDocument[]>(
    [QueryKeys.GET_DOCUMENTS, collection_id],
    async () => {
      const res = await PublicAxios.get(`/collections/${collection_id}/documents`);
      const documents = res.data.documents as IDocument[];
      const uniqueDocuments = documents.filter(
        (doc, index, self) =>
          index === self.findIndex((d) => d.filename === doc.filename)
      );
      return uniqueDocuments;
    },
    { enabled: !!collection_id }
  );
