import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        // Redirect every path except "/" and essential assets to the homepage
        source:
          "/:path((?!$|_next/|api/|favicon\\.ico|robots\\.txt|sitemap\\.xml|.*\\.(?:png|jpe?g|gif|webp|svg|ico|txt|xml|json|css|js|map|woff2?|ttf|eot)).*)",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
