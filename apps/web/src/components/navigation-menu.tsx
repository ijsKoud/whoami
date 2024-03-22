import { SidebarIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NAVIGATION_LINKS } from "@/lib/constants";

import ThemeToggle from "./theme-toggle";

const NavigationMenu: React.FC = () => {
	return (
		<header className="top-0 sticky border-b dark:border-zinc-800 border-zinc-200 h-16 dark:bg-dark/80 bg-white/80 z-10 backdrop-blur-sm grid place-items-center">
			<nav className="flex items-center justify-between max-w-5xl w-full px-4">
				<div className="flex items-center">
					{/* MOBILE NAVIGATION MENU */}
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon" className="sm:hidden" aria-label="Open navigation menu">
								<SidebarIcon />
							</Button>
						</SheetTrigger>

						<SheetContent side="left">
							<SheetHeader>
								<SheetTitle className="w-full text-left">Daan Klarenbeek</SheetTitle>
							</SheetHeader>

							<div className="flex flex-col space-y-3 mt-4">
								{NAVIGATION_LINKS.map((item, key) => (
									<SheetClose key={key} asChild>
										<Link href={item.href}>{item.name}</Link>
									</SheetClose>
								))}
							</div>
						</SheetContent>
					</Sheet>

					<Link href="/" className="font-bold text-6">
						D
					</Link>

					{/* DESKTOP NAVIGATION MENU */}
					<div className="ml-6 flex gap-4 max-sm:hidden">
						{NAVIGATION_LINKS.map((item, key) => (
							<Link className="text-muted-foreground hocus:text-foreground transition-colors" key={key} href={item.href}>
								{item.name}
							</Link>
						))}
					</div>
				</div>

				<ThemeToggle />
			</nav>
		</header>
	);
};

export default NavigationMenu;
