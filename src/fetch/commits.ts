import { Octokit } from 'octokit'
import { getEnv } from '../../config/getEnv'
import { GH_TOKEN } from '../../config/configVariables'

export const getCommits = async () => {
  const token = getEnv(GH_TOKEN)
  const octokit = new Octokit({
    auth: token
  })
  const response = await octokit.request('GET /repos/{owner}/{repo}/commits', {
    owner: 'sataller',
    repo: 'git-commit-history'
  })
  const data = await response.data
  return data
}
