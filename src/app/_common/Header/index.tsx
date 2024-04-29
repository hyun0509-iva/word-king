import Image from "next/image";
import Link from "next/link";
import React from "react";
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
        <li><Link href="/login">로그인</Link></li> {/* 로그인은 모달창으로 만듦 */}
        <li><Link href="/my">마이페이지</Link></li>
      </ul>
    </header>
  );
};

export default Header;
