import React from "react"
import { Link } from "react-router-dom"

import s from "./Style/Header.module.sass"
import "./Style/Header.sass"

const Header: React.FC = () => {
  return (
    <Link to="/">
      <div className={`${s.root} RotateContainer`}>
        <div className={`${s.content} RotateItem`}>
          <span className={s.Title}>SEPCASH</span>
          <span className={s.subTitle}>exchange rates</span>
        </div>
      </div>
    </Link>
  );
}

export default Header
