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
    route("/home-geist", "routes/homeGeist.tsx"),
    route("/home-poppins-raleway", "routes/homePoppinsRaleway.tsx"),
    route("/home-open-source", "routes/homeOpenSource.tsx"),
    route("/home-inter-ibm", "routes/homeInterIBM.tsx"),
    route("/home-satoshi-erode", "routes/homeSatoshiErode.tsx"),
    route("/home-ibm-serif-roboto-serif", "routes/homeIBMSerifRobotoSerif.tsx"),
    route("/home-supreme-satoshi", "routes/homeSupremeSatoshi.tsx"),
    route("/home-be-open", "routes/homeBeOpen.tsx"),
    route("/testnet", "routes/testnet.tsx"),
    route("/developers", "routes/developers.tsx"),
    route("/roadmap", "routes/roadmap.tsx"),
    route("/ecosystem", "routes/ecosystem.tsx"),
    route("/publications", "routes/resources.tsx"),
    route("/resource/:category", "routes/overview.tsx"),
    route("/careers", "routes/careers.tsx"),
    route("/career/:slug", "routes/career-details.tsx"),
    route("/about", "routes/about-us.tsx"),
  ]),

  route("api/subscribe", "routes/api/subscribe.ts"),

  ...(await flatRoutes({ rootDirectory: "content" })),
] satisfies RouteConfig;
