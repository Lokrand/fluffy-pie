import React from "react";

import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import styles from "./root-layout.module.css";

const RootLayout = () => {
  return (
    <Box component="section" className={styles.layout}>
      <Box className={styles.layout__header}>
        <h1 style={{ margin: 0 }}>Пушистый пирожок</h1>
      </Box>
      <Box className={styles.layout__content}>
        <Box className={styles.layout__section}>
          <Outlet />
        </Box>
      </Box>
      <Box className={styles.layout__footer}>
        <p>© Дмитрий Платонов</p>
        <p>2024г.</p>
      </Box>
    </Box>
  );
};

export default RootLayout;
