import { useQuery } from "react-query";

export default function usePosts(relevance, keyword) {
    const param = relevance !== "topic" ? relevance : keyword;
    //weather and time needs to be chagned later
    return useQuery(
      param,
      async () => {
        let data = await fetch(`/api/custom/${param}`).then((res) => res.json());
        return data;
      },
      { refetchOnWindowFocus: false }
    );
  }