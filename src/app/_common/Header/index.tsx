import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineLogin } from "@react-icons/all-files/ai/AiOutlineLogin";
import S from "./header.module.css";

const Header = () => {
  return (
    <header className={S.Header}>
      <Link href="/" className={S.Logo}>
        <span className={S.LogoIcon}>
          <Image src="/images/logo.svg" alt="logo" width={45} height={45} />
        </span>
      </Link>
      <ul className={S.UserMenu}>
        <li>
          <Link href="library">서재</Link>
        </li>
        {/* 로그인은 모달창으로 만듦 */}
        <li>
          <Link href="/login" title="로그인">
            <span className={S.MenuIcon}>
              <AiOutlineLogin size={24} />
            </span>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
