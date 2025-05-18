// import { useQuery, UseQueryResult } from "react-query";
// import { QueryKeys } from "doc-bot/constants/Querykeys";

// export const useGenerateContentIdea = (
//   query: string,
//   requestId: string | null
// ): UseQueryResult<GenerateContentIdeaResponse, Error> => {
//   return useQuery<GenerateContentIdeaResponse, Error>(
//     [QueryKeys.GENERATE_CONTENT_IDEA, { query }],
//     () => generateContentIdea(query),
//     {
//       enabled: !!requestId,
//       cacheTime: 0,
//       staleTime: 0,
//       refetchOnMount: false,
//       keepPreviousData: false,
//     }
//   );
// };