import React from "react";
import Link from "next/link";
import { MdMenu } from "@react-icons/all-files/md/MdMenu";
import { MdHome } from "@react-icons/all-files/md/MdHome";
import { MdNote } from "@react-icons/all-files/md/MdNote";
import { MdVideogameAsset } from "@react-icons/all-files/md/MdVideogameAsset";

import S from "./bottomNav.module.css";

const BottomNav = () => {
  return (
    <nav className={S.BottomNavWrap}>
      <ul className={S.Menu}>
        <li className={S.MenuItem}>
          <span className={S.MenuIcon}>
            <MdMenu />
          </span>
          <span className={S.ItemTxt}>메뉴</span>
        </li>
        <li className={S.MenuItem}>
          <Link href="/">
            <span className={S.MenuIcon}>
              <MdHome />
            </span>
            <span className={S.ItemTxt}>홈</span>
          </Link>
        </li>
        <li className={S.MenuItem}>
          <Link href="/note">
            <span className={S.MenuIcon}>
              <MdNote />
            </span>
            <span className={S.ItemTxt}>내단어장</span>
          </Link>
        </li>
        <li className={S.MenuItem}>
          <Link href="/game">
            <span className={S.MenuIcon}>
              <MdVideogameAsset />
            </span>
            <span className={S.ItemTxt}>게임</span>
          </Link>
        </li>
        {/* <li className={S.MenuItem}>
          <Link href="/friends">
            <span className={S.MenuIcon}>
              <MdGroup />
            </span>
            <span className={S.ItemTxt}>친구</span>
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default BottomNav;
