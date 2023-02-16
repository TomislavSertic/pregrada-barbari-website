import Image from "next/image";
import React from "react";
import styles from "./UnderConstruction.module.scss";
export const UnderConstruction = () => {
  return (
    <div className={styles["under-construction"]}>
      <Image
        src={"/images/UnderConstruction2.png"}
        width={2000}
        height={1500}
        alt="under construction website"
      />
    </div>
  );
};
