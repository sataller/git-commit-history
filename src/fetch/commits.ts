import { Octokit } from 'octokit'

type AuthorDataType = {
  date: string,
  email: string,
  name: string,
}

export type Data = {
  author: null | string,
  comments_url: string,
  commit: {
    author: AuthorDataType,
    comment_count: number,
    committer: AuthorDataType,
    message: string,
    tree: {
      sha: string,
      url: string,
    },
    url: string,
    verification: {
      payload: null | string,
      reason: string,
      signature: null | string,
      verified: boolean,
    }
  }
  committer: null | string,
  html_url: string,
  node_id: string,
  parents: [{
      sha: string,
      url: string,
      html_url: string,
    }],
  sha: string,
  url: string,
}

const octokit = new Octokit({
  auth: process.env.GH_TOKEN
})

export const getCommits = async () => {
console.log('asdadsada',  process.env, '===================================================' , process.env.GH_TOKEN)

  const test = await octokit.request('GET /repos/{owner}/{repo}/commits{?sha,path,author,since,until,per_page,page}', {
    owner: 'sataller',
    repo: 'git-commit-history'
  })
  const data = await test.data
  return data
}