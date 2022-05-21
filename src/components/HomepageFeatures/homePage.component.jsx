import React from "react";
import { HoverMenu } from "./components";
// import clsx from 'clsx';
import styles from "./styles.module.css";

export const HomepageFeatures = () => {
  return (
    <section className={styles.features}>
      <div className="container">
        {/* hover menu */}
        <HoverMenu />
        {/* animation tutorial */}
      </div>
    </section>
  );
};
