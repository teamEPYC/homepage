import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    route("/testnet", "routes/testnet.tsx"),
    route("/developers", "routes/developers.tsx"),
    route("/roadmap", "routes/roadmap.tsx"),
    route("/ecosystem", "routes/ecosystem.tsx"),
    route("/resources", "routes/resources.tsx"),
    route("/resources/:category", "routes/overview.tsx"),
    route("/careers", "routes/careers.tsx"),
    route("/career/:slug", "routes/career-details.tsx"),
    route("/press-release", "routes/press-release.tsx")
  ]),

  ...(await flatRoutes({ rootDirectory: "content" })),
] satisfies RouteConfig;
