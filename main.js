import blog, { ga, redirects } from "https://deno.land/x/blog@0.5.0/blog.tsx";

blog({
  title: "Kunal Shah",
  author: "Kunal Shah",
  avatar: "./sugawara.jpeg",
  avatarClass: "full",
  links: [
    { title: "Email", url: "mailto:hello@kunalshah.net" },
    { title: "GitHub", url: "https://github.com/faserbeam" },
    { title: "Twitter", url: "https://twitter.com/faserbeam" },
  ],
  background: "#fff",
  middlewares: [
    ga("UA-91675022-1"),
    redirects({
      "iocp-links.html": "iocp_links",
      "rant.html": "rant",
    }),
  ]
});
