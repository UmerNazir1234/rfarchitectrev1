"use client";
import React from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { ThemeProvider } from "@/context/ThemeContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider>
        {children}
        <ProgressBar
          height="3px"
          color="#002475"
          options={{ showSpinner: false }}
          shallowRouting
        />
      </ThemeProvider>
    </>
  );
};

export default Providers;
