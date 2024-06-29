// src/sanityImageUrl.js
import imageUrlBuilder from '@sanity/image-url';
import client from './SanityClient';

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
