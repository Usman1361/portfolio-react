import { createClient } from "@sanity/client";

export default createClient({
  projectId: "eminwtr1", // Replace with your project ID
  dataset: "production", // Replace with your dataset name
  useCdn: true, // `false` if you want to ensure fresh data
});
