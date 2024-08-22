import React from "react";
import { MdCreateNewFolder } from "@react-icons/all-files/md/MdCreateNewFolder";
import S from "./addBtn.module.css";

const AddBtn = () => {
  return (
    <div className={S.AddBtnWrap}>
      <button>
        <span>
          <MdCreateNewFolder size={35}/>
        </span>
      </button>
    </div>
  );
};

export default AddBtn;
