/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["tmdb.org", "themoviedb.org", "image.tmdb.org", "localhost"],
    deviceSizes: [300, 780, 1280],
  },
};
