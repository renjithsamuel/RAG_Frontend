import { useMutation, useQueryClient } from "react-query";
import { PublicAxios } from "..";
import { QueryKeys } from "doc-bot/constants/Querykeys";

export const useDeleteDocument = (collectionId: string) => {
  const queryClient = useQueryClient();

  return useMutation(
    async (docId: string) => {
      await PublicAxios.delete(
        `/collections/${collectionId}/documents/${docId}`
      );
    },
    {
      onSuccess: () => {
        // Invalidate the document list query for the same collection
        queryClient.invalidateQueries([
          QueryKeys.GET_DOCUMENTS,
          collectionId,
        ]);
      },
    }
  );
};
