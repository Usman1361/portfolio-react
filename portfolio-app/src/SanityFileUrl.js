import { getFileAsset } from "@sanity/asset-utils";
// import sanityConfig from ".././personal-portfolio/sanity.config";

export function getSanityFileUrl(sanityFile) {
  const fileUrl = getFileAsset(sanityFile, {
    projectId: "eminwtr1",
    dataset: "production",
  });
  return fileUrl.url;
}
