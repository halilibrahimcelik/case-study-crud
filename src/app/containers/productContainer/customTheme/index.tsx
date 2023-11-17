"use client";
import React, { useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
type Props = {
  children: React.ReactNode;
};

const ProductTheme = ({ children }: Props) => {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: "#5B44F3",
            light: "#999",
          },
          secondary: {
            main: "#ffcb13",
          },
        },
      }),
    []
  );
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default ProductTheme;
