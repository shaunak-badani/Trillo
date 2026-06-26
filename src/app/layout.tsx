import type { Metadata } from "next";
import "./globals.scss";



export const metadata: Metadata = {
  // title: "Trillo",
  description: "Your all in one app for booking, literally anything!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600" rel="stylesheet" />
        <link rel="stylesheet" href="css/style.css" />
        <link rel="shortcut icon" type="image/png" href="/img/favicon.png" />
        
        <title>trillo &mdash; Your all-in-one booking app</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
