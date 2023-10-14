import "../styles/globals.css";

import type React from "react";
import Providers from "./providers";
import { Inter } from "next/font/google";
import NavigationMenu from "@/components/NavigationMenu";
import { Metadata } from "next";

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
		<html suppressHydrationWarning>
			<head>
				{/* <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
				<link rel="manifest" href="/favicons/site.webmanifest" />
				<link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#343434" />
				<link rel="shortcut icon" href="/favicons/favicon.ico" />
				<meta name="apple-mobile-web-app-title" content="PaperPlane" />
				<meta name="application-name" content="PaperPlane" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="msapplication-config" content="/favicons/browserconfig.xml" />
				<meta name="theme-color" content="#343434" /> */}
			</head>
			<body className="dark:bg-dark bg-white" style={InterFont.style}>
				<Providers>
					<NavigationMenu />
					<div className="max-w-5xl m-auto px-4 pt-2">{children}</div>
				</Providers>
			</body>
		</html>
	);
};

export default RootLayout;
