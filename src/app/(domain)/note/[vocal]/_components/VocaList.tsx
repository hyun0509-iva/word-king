"use client";
import { notFound, useParams } from "next/navigation";
import React from "react";
import { IResVocal, IVocalType, vocaList } from "../../page";

interface IProps {
  voca: IResVocal[];
}

const VocaList = ({ voca }: IProps) => {
  const vocalName = decodeURIComponent(useParams().vocal as string);
  const isExistQuery = vocaList.some(
    (item: IVocalType) => item.vocalName === vocalName
  );
  if (!isExistQuery) {
    notFound();
  }
  console.log({voca})
  return (
    <div>
      <div className="list">
        {voca.map(({ id, en, kor }) => (
          <div key={id}>
            <span>{en}</span>
            <span>{kor}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VocaList;
