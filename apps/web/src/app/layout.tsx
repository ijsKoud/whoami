import "../styles/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";

import Footer from "@/components/Footer";
import NavigationMenu from "@/components/NavigationMenu";

import Providers from "./providers";

const InterFont = Inter({ display: "swap", subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
	themeColor: "#50a0d4",
	metadataBase: new URL("https://ijskoud.dev"),
	title: { template: "Daan Klarenbeek - %s", default: "Daan Klarenbeek - Full-stack developer building apps for the internet" },
	description: "Full-stack developer building apps for the internet",
	twitter: { card: "summary" },
	openGraph: {
		title: "Daan Klarenbeek",
		description: "Full-stack developer building apps for the internet",
		images: [{ url: "/profile.png", alt: "Profile picture", type: "image/png" }]
	}
};

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<html suppressHydrationWarning className="scroll-smooth scroll-p-[5rem]">
			<head>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2" />
				<link rel="manifest" href="/site.webmanifest?v=2" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg?v=2" color="#131313" />
				<link rel="shortcut icon" href="/favicon.ico?v=2" />
				<meta name="msapplication-TileColor" content="#131313" />
			</head>
			<body className="dark:bg-dark bg-white" style={InterFont.style}>
				<Providers>
					<NavigationMenu />
					<div className="max-w-5xl m-auto px-4 pt-2">{children}</div>
					<Footer />
				</Providers>
			</body>
		</html>
	);
};

export default RootLayout;
