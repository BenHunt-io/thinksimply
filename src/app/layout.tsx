import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { LineHeader } from "./components/LineHeader.tsx";
import { MainContent } from "./components/MainContent.tsx";
import { Providers } from "./providers/providers.tsx";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body>
        <Providers>
          <LineHeader />
          <MainContent>{children}</MainContent>
        </Providers>
      </body>
    </html>
  );
}
