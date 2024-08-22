import { getBaseUrl } from "@/utils/getBaseUrl";

export const getWord = async () => {
  const data = await fetch(getBaseUrl("/api/word"), {
    next: { revalidate: 10 },
  }).then((res) => res.json());
  return data;
};
