"use client";
import React from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { ThemeProvider } from "@/context/ThemeContext";
import MicrosoftClarity from "@/components/MicrosoftClarity";

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
      <MicrosoftClarity />
    </>
  );
};

export default Providers;
