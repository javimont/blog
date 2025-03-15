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
    linkTitle: ` ${SITE.title} on Github`,
    icon: IconGitHub,
  },
  {
    name: "Mastodon",
    href: "https://mastodon.social/@jvmnt",
    linkTitle: `${SITE.title} on X`,
    icon: IconMast,
  },
  {
    name: "Mail",
    href: "mailto:jmonterohoyos@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    icon: IconMail,
  },
] as const;

export const SHARE_LINKS = [
  {
    name: "Mastodon",
    href: "https://x.com/intent/post?url=",
    linkTitle: `Share this post on Mastodon`,
    icon: IconMast,
  },
  {
    name: "Mail",
    href: "mailto:?subject=See%20this%20post&body=",
    linkTitle: `Share this post via email`,
    icon: IconMail,
  },
] as const;
