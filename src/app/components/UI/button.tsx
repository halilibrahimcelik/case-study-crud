"use client";
import React, { useMemo } from "react";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/";
type Props = {
  variant: "text" | "outlined" | "contained" | undefined;
  text: string;
  color:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | undefined;
  customClass?: string;
};

const CustomButon = ({ variant, text, color, customClass }: Props) => {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: "#111",
            light: "#999",
          },
          secondary: {
            main: "#5B44F3",
          },
        },
      }),
    []
  );
  return (
    <ThemeProvider theme={theme}>
      <Button
        className={customClass}
        sx={{ textTransform: "none" }}
        variant={variant}
        color={color}
      >
        {text}
      </Button>
    </ThemeProvider>
  );
};
export default CustomButon;
