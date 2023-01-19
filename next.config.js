/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
    publicRuntimeConfig: {
      GH_TOKEN: process.env.GH_TOKEN,
      OWNER: process.env.OWNER,
      REPO:  process.env.REPO,
      
    },
}
