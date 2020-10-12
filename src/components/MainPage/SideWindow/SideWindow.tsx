import React from "react";

import s from "./Style/SideWindow.module.sass"

const SideWindow: React.FC = () => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.sideWindow}>
          SideWindow!
        </div>
      </div>
    </div>
  );
}

export default SideWindow
