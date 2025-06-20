import { useQuery, useMutation, useQueryClient } from "react-query";
import { PublicAxios } from "..";
import { QueryKeys } from "doc-bot/constants/Querykeys";
import { ICollection } from "doc-bot/entity/Collection/Collection";

// Fetch collections
export const useCollections = () =>
  useQuery<ICollection[]>(QueryKeys.CREATE_COLLECTIONS, async () => {
    const res = await PublicAxios.get("/collections");
    return res.data.collections;
  });

// Create collection
export const useCreateCollection = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (name: string) => {
      const res = await PublicAxios.post<ICollection>("/collections", { name });
      return res.data;
    },
    {
      onSuccess: () => queryClient.invalidateQueries(QueryKeys.CREATE_COLLECTIONS),
    }
  );
};
