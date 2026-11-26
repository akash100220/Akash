import { createFileRoute } from "@tanstack/react-router";
import { App } from "@/components/portfolio/App";

const title = "Amir Hossain Akash";
const description =
  "Portfolio of Amir Hossain Akash, a Freelance Full Stack Developer building accessible, performant React.js, Next.js and Node.js websites and web applications.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: App,
});
