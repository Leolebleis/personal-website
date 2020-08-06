/* src/analytics.js */
import Analytics from "analytics";
import simpleAnalyticsPlugin from "analytics-plugin-simple-analytics";

const analytics = Analytics({
  app: "personal-website",
  plugins: [
    // Load simple analytics! 🎉
    simpleAnalyticsPlugin(),
  ],
});

/* All page views are now tracked by simple analytics */
export default analytics