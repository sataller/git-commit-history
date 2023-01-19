import React, { useCallback, useState } from 'react'
import { Data } from '../src/types/commitsType'
import { getCommits } from '../src/fetch/commits'
import type { GetServerSideProps, NextPage } from 'next'
import { CommitItem } from '../src/components/CommitItem'
import { HeaderComponent } from '../src/components/Header'
import { UpdateButton } from '../src/components/UpdateButton'

const Home: NextPage<{ commits: Data[] }> = ({
  commits
}) => {
  const [currentCommits, setCurrentCommits] = useState(commits)
  const [error, setError] = useState<unknown>()
  const [loading, setLoading] = useState(false)

  const loadNewCommitsList = useCallback(async () => {
    try {
      setLoading(true)
      const newCommits = await getCommits()
      if (newCommits) {
        setCurrentCommits(newCommits as Data[])
      }
    } catch (e) {
      setError(e)
    } finally {
      setLoading(false)
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="relative flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <HeaderComponent commitsNumber={currentCommits.length} />
        <UpdateButton
          loading={loading}
          loadNewCommitsList={loadNewCommitsList}
        />
        {
          error
            ? <>{JSON.stringify(error)}</>
            : <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
              {currentCommits.map(item => {
                return (
                  <CommitItem
                    key={item.sha}
                    message={item.commit.message}
                    date={item.commit.author.date}
                    authorName={item.commit.author.name}
                  />
                )
              })
              }
            </div>
        }
      </main>
    </div>
  )
}

export const getStaticProps: GetServerSideProps = async ({
  req,
  res,
  query,
}) => {
  const commits = await getCommits()
  return {
    props: {
      commits
    }
  }
};

export default Home
