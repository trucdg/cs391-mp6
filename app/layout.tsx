import React from "react";
import Provider from "./components/Provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </Provider>
  );
}
