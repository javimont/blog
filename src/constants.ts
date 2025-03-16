import IconMail from "@/assets/icons/IconMail.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconMast from "@/assets/icons/IconMast.svg";

import { SITE } from "@/config";

export const LOCALE = {
  lang: "es", // html lang code. Set this empty and default will be "en"
  langTag: ["es-ES"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const SOCIALS = [
  {
    name: "Github",
    href: "https://github.com/javimont",
    linkTitle: ` ${SITE.title} en Github`,
    icon: IconGitHub,
  },
  {
    name: "Mastodon",
    href: "https://mastodon.social/@jvmnt",
    linkTitle: `${SITE.title} en Mastodon`,
    icon: IconMast,
  },
  {
    name: "Mail",
    href: "mailto:jmonterohoyos@gmail.com",
    linkTitle: `Envía un email a ${SITE.title}`,
    icon: IconMail,
  },
] as const;

export const SHARE_LINKS = [
  {
    name: "Mastodon",
    href: "https://x.com/intent/post?url=",
    linkTitle: `Comparte en Mastodon`,
    icon: IconMast,
  },
  {
    name: "Mail",
    href: "mailto:?subject=See%20this%20post&body=",
    linkTitle: `Envía este post por email`,
    icon: IconMail,
  },
] as const;
