"use client";
import { Poppins } from "next/font/google";
import "./globals.css";
import { CssBaseline, GlobalStyles, NoSsr } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { BaseLayout } from "doc-bot/containers/Baselayout/BaseLayout";
import { PageContextProvider } from "doc-bot/context/PageContext";
import { UserContextProvider } from "doc-bot/context/UserContext";
import { ThemeProvider } from "doc-bot/context/ThemeContext";
import { ThemeWrapper } from "doc-bot/components/ThemeWrapper/ThemeWrapper";
import { ReactQueryDevtools } from "react-query/devtools";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// export const metadata: Metadata = {
//   title: "Doc Bot",
//   description: "AI-Powered Content Generation Tool",
// };

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Header /> */}
      {/* <header
        style={{ display: "flex", alignItems: "center", padding: "1rem" }}
      >
        <img src="/applied-logo.svg" alt="App Logo" width={40} height={40} />
        <span
          style={{ marginLeft: "1rem", fontWeight: "bold", fontSize: "1.5rem" }}
        >
          Doc Bot
        </span>
      </header> */}
      <NoSsr>
        <ThemeProvider>
          <CssBaseline />
          <GlobalStyles
            styles={{
              body: { backgroundColor: "#f3f7f9" },
              a: { color: "#0071ff" },
            }}
          />
          <ThemeWrapper>
            <QueryClientProvider client={queryClient}>
              <body
                className={`${poppins.variable}`}
                suppressHydrationWarning={true}
              >
                <PageContextProvider>
                  <UserContextProvider>
                    <ReactQueryDevtools />
                    <BaseLayout authenticatedOnly={false}>
                      {children}
                    </BaseLayout>
                  </UserContextProvider>
                </PageContextProvider>
              </body>
            </QueryClientProvider>
          </ThemeWrapper>
        </ThemeProvider>
      </NoSsr>
    </html>
  );
}
