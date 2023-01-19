import { Octokit } from 'octokit'
import { getEnv } from '../../config/getEnv'
import { GH_TOKEN, OWNER, REPO } from '../../config/configVariables'

export const getCommits = async () => {
  const token = getEnv(GH_TOKEN)
  const owner = getEnv(OWNER)
  const repoName = getEnv(REPO)

  const octokit = new Octokit({
    auth: token
  })
  const response = await octokit.request('GET /repos/{owner}/{repo}/commits', {
    owner: owner,
    repo: repoName
  })
  const data = await response.data
  return data
}
