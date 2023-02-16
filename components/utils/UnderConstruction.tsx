import Image from "next/image";
import React from "react";
import styles from "./UnderConstruction.module.scss";
export const UnderConstruction = () => {
  return (
    <div className={styles["under-construction"]}>
      <Image
        src={"/images/UnderConstruction3.png"}
        width={760}
        height={800}
        alt="under construction website"
      />
    </div>
  );
};
