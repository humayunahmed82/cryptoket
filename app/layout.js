import { Poppins } from "next/font/google";

import { Providers } from "./providers";
import "./globals.css";

const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-poppins",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
    title: "CryptoKet NTF Marketplace Next js app",
    description: "CryptoKet NTF Marketplace create next app",
};

const RootLayout = ({ children }) => (
    <html lang="en">
        <body className={`${poppins.variable} font-poppins`}>
            <Providers defaultTheme="system" enableSystem>
                <main className="">
                    <h1>Header</h1>
                    {children}
                    <h1>Footer</h1>
                </main>
            </Providers>
        </body>
    </html>
);
export default RootLayout;

// [SIC]14 Reusable Logic == 02:28
