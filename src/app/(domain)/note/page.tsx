import React from "react";
import AddBtn from "./_components/AddBtn";
import S from "./wordNote.module.css";
import Link from "next/link";

export interface IVocalType {
  id: number;
  vocalName: string;
}

export interface IResVocal { id: number , en: string, kor: string}

export const vocaList = [
  { id: 1, vocalName: "수능 영단어 1800 어휘" },
  { id: 2, vocalName: "토익 기출 단어 모음" },
  { id: 3, vocalName: "공무원 기초 단어 1200" },
];

const WordNote = () => {
  return (
    <div className={S.WordNoteWrap}>
      <div className={S.VocalList}>
        {vocaList.map(({ id, vocalName }) => (
          <Link href={`/note/${vocalName}`} className={S.Word} key={id}>
            {vocalName}
          </Link>
        ))}
      </div>
      <AddBtn />
    </div>
  );
};

export default WordNote;
