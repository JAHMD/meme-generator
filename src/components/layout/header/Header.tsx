import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HomeIcon, Menu } from "lucide-react";
import Link from "next/link";
import SearchBar from "./components/SearchBar";

const links = [
	{
		href: "/",
		title: "home",
	},
];

export default function Header() {
	return (
		<header className="sticky top-0 border-b bg-background">
			<div className="container flex h-16 items-center gap-4">
				<nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
					<Link
						href="#"
						className="flex items-center gap-2 text-lg font-semibold md:text-base"
					>
						<HomeIcon className="h-6 w-6" />
						<span className="sr-only">Acme Inc</span>
					</Link>
					{links.map((link) => (
						<Link
							key={link.title}
							href={link.href}
							className="text-muted-foreground capitalize transition-colors hover:text-foreground"
						>
							{link.title}
						</Link>
					))}
				</nav>
				<Sheet>
					<SheetTrigger asChild>
						<Button
							variant="outline"
							size="icon"
							className="shrink-0 md:hidden"
						>
							<Menu className="h-5 w-5" />
							<span className="sr-only">Toggle navigation menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent side="left">
						<nav className="grid gap-6 text-lg font-medium">
							<Link
								href="#"
								className="flex items-center gap-2 text-lg font-semibold"
							>
								<HomeIcon className="h-6 w-6" />
								<span className="sr-only">Acme Inc</span>
							</Link>
							{links.map((link) => (
								<Link
									key={link.title}
									href={link.href}
									className="text-muted-foreground capitalize hover:text-foreground"
								>
									{link.title}
								</Link>
							))}
						</nav>
					</SheetContent>
				</Sheet>
				<SearchBar />
			</div>
		</header>
	);
}
