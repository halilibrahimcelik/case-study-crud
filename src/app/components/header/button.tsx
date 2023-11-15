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
};

const CustomButon = ({ variant, text, color }: Props) => {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: "#111",
            light: "#999",
          },
        },
      }),
    []
  );
  return (
    <ThemeProvider theme={theme}>
      <Button sx={{ textTransform: "none" }} variant={variant} color={color}>
        {text}
      </Button>
    </ThemeProvider>
  );
};
export default CustomButon;
