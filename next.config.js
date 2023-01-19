/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
    publicRuntimeConfig: {
      GH_TOKEN: process.env.GH_TOKEN
    },
}
