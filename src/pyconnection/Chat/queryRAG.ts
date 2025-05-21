import { useMutation, useQuery, useQueryClient, UseQueryResult } from "react-query";
import { QueryKeys } from "doc-bot/constants/Querykeys";
import { PublicAxios } from "..";

export interface SourceDocument {
  content: string;
  source: string;
  page: number;
  score: number;
}

export interface QueryRAGAPIResponse {
  answer: string;
  sources: SourceDocument[];
  elapsed: number;
}

export interface QueryRAGResponse extends QueryRAGAPIResponse {
  // Add any additional frontend-specific fields here
}

export const queryRAG = async ({
  query,
}: {
  query: string;
}): Promise<QueryRAGResponse> => {
  const response = await PublicAxios.post<QueryRAGAPIResponse>("/api/v1/query", {
    question: query
  });

  return {
    answer: response.data.answer,
    sources: response.data.sources,
    elapsed: response.data.elapsed,
  };
};

export const useChatQuery = () => {
  const queryClient = useQueryClient();

  return useMutation<QueryRAGResponse, Error, string>(
    (message) => queryRAG({ query: message }),
    {
      onSuccess: (data) => {
        console.log("AI answer:", data.answer);
        // you can even invalidate or refetch other queries here if needed
      },
    }
  );
};