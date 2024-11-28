import type { Metadata } from "next";
import "./globals.css";




export const metadata: Metadata = {
  title: "ChopProductivity",
  description: "Be Productive with the help of Chop Timers or Pomodoro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang="en" suppressHydrationWarning>
			<body suppressHydrationWarning>{children}</body>
		</html>
	);
}
