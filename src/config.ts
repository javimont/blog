export const SITE = {
  website: "https://jvmnt.pages.dev/", // replace this with your deployed domain
  author: "Javier Montero",
  profile: "null",
  desc: "Blog personal de Javier Montero",
  title: "jvmnt",
  ogImage: "ogimage.svg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    url: "https://github.com//javimont/blog/edit/main/src/content/blog",
    text: "¿Errores?",
    appendFilePath: true,
  },
  dynamicOgImage: true,
} as const;
