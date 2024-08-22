import { routeWrapperWithError } from "@/utils/routeWrapperWithError";
import { NextRequest, NextResponse } from "next/server";

// 임시 데이터베이스
// 단어장 테이블
const data = {
  vocalName: "수능 기출 어휘",
  list: [
    { id: 1, en: "acquire", kor: "획득하다" },
    { id: 2, en: "adverse", kor: "불리한" },
    { id: 3, en: "advocate", kor: "옹호하다" },
    { id: 4, en: "albeit", kor: "비록 ~하지만" },
    { id: 5, en: "albeit", kor: "혹은" },
    { id: 6, en: "alleviate", kor: "완화시키다" },
    { id: 7, en: "ambiguous", kor: "애매한" },
    { id: 8, en: "analogous", kor: "유사한" },
    { id: 9, en: "anonymous", kor: "익명의" },
    { id: 10, en: "apathy", kor: "무관심" },
    { id: 11, en: "apprehensive", kor: "겁내는" },
    { id: 12, en: "arbitrary", kor: "임의적인" },
    { id: 13, en: "arduous", kor: "힘든" },
    { id: 14, en: "ascertain", kor: "확인하다" },
    { id: 15, en: "assiduous", kor: "부지런한" },
    { id: 16, en: "assuage", kor: "완화시키다" },
    { id: 17, en: "audacious", kor: "대담한" },
    { id: 18, en: "auspicious", kor: "좋은 전망의" },
    { id: 19, en: "austere", kor: "절제된" },
    { id: 20, en: "autonomous", kor: "자율적인" },
  ],
};

export const GET = routeWrapperWithError(
  async (req: NextRequest, { params }: { params: { id: string } }) => {
    return NextResponse.json({ isOk: true, data });
  }
);
