export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "CEDT-Community",
	description: "CEDT-Chula student community website",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "life@cedt",
			href: "/",
		},
		{
			label: "Intern",
			href: "/blog",
		},
		{
			label: "About",
			href: "/about",
		}
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "life@cedt",
			href: "/",
		},
		{
			label: "Intern",
			href: "/blog",
		},
		{
			label: "About",
			href: "/about",
		}
	],
	links: {
		github: "https://github.com/CEDT-Chula",
		// twitter: "https://twitter.com/getnextui",
		// docs: "https://nextui.org",
		// discord: "https://discord.gg/9b6yyZKmH4",
		// sponsor: "https://patreon.com/jrgarciadev"
	},
};
