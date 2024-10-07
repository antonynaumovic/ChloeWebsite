export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "ChloDev",
  description:
    "Chloe De Los Santos' Artist Page",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ],
  links: {
    artstation: "https://chloedlos.artstation.com",
  },
};
