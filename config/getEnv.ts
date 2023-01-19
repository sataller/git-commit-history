import getConfig from 'next/config'

export const getEnv = (param: string) => {
  const config = getConfig()
  return config.publicRuntimeConfig[param]
}