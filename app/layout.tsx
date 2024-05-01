import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
  // will turn on the font
});

export const metadata: Metadata = {
  title: "Imaginify",
  description: "AI-powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
    appearance={{
      variables:{colorPrimary:'#624cf5'}
    }}
    // appearance={{
    //   layout:{
    //     logoImageUrl:'/logo.png',
    //     socialButtonsVariant:'iconButton'
    //   },
    //   variables:{
    //     colorText:"#fff",
    //     colorPrimary:"#0E78F9",
    //     colorBackground:"#1c1f2e",
    //     colorInputBackground:"#252a41",
    //     colorInputText:"#fff"
    //   }
    // }}
    >
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

/* antialiases is css property which makes font easy to read
.variable implements the actual font
*/
