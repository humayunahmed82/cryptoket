import { Poppins } from "next/font/google";

import { Providers } from "./providers";
import "./globals.css";

// coustom Compoenents
import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer/page";

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
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
        <body
            className={`${poppins.variable} font-poppins`}
            suppressHydrationWarning
        >
            <Providers attribute="class" defaultTheme="system" enableSystem>
                <div className="dark:bg-nft-dark bg-white min-h-screen">
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </div>
            </Providers>
        </body>
    </html>
);
export default RootLayout;

// [SIC]14 Reusable Logic == 02:28
