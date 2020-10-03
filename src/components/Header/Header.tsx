import React from "react"
import { Link } from "react-router-dom"

import s from "./Style/Header.module.sass"

const Header: React.FC = () => {
  return (
    <Link to="/">
      <div className={s.content}>
        <span className={s.Title}>SEPCASH</span>
        <span className={s.subTitle}>exchange rates</span>
      </div>
    </Link>
  );
}

export default Header
