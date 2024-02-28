"use client";

import { ThemeProvider } from "next-themes";

export const Providers = ({ children, ...props }) => (
    <ThemeProvider {...props}>{children}</ThemeProvider>
);
