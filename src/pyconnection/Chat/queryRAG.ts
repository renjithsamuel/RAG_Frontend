import {
  useMutation,
  useQueryClient,
} from "react-query";
import { PublicAxios } from "..";
import { Chat, IChat, ISource } from "doc-bot/entity/Content/Chat";

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
  collection_id,
  top_k = 5,
}: {
  query: string;
  collection_id: string;
  top_k?: number;
}): Promise<IChat> => {
  const response = await PublicAxios.post("/search", {
    query,
    collection_id,
    top_k,
  });

  return transformResponse(response.data);
};



export const useChatQuery = () => {
  const queryClient = useQueryClient();

  return useMutation<IChat, Error, { query: string; collection_id: string }>(
    ({ query, collection_id }) => queryRAG({ query, collection_id }),
    {
      onSuccess: (data) => {
        console.log("AI answer:", data.answer);
      },
    },
  );
};


const transformResponse = (response: {
  matches: {
    score: number;
    chunk_id: number;
    text: string;
    document_id: string;
    document_name: string;
  }[];
  ollama_answer: string;
}): IChat => {
  const sources: ISource[] = response.matches.map((match) => ({
    content: match.text,
    source: match.document_name,
    page: 0, // Page is missing, default to 0 or undefined
    score: match.score,
  }));

  return new Chat({
    answer: response.ollama_answer,
    sources,
    elapsed: undefined, // Optional, add if available
  });
};
