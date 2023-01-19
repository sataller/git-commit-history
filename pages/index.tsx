import type { GetServerSideProps, NextPage } from 'next'
import { Data, getCommits } from '../src/fetch/commits'
import { UpdateIcon } from '../public/update.icon'

const Home: NextPage<{ commits: Data[] }> = (props) => {

  const formatDate = (date: string) => {
    const currentDate = new Date(date)
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', hour: "2-digit", minute: '2-digit' };
    console.log(typeof currentDate.toLocaleDateString("en-US", options))
    return currentDate.toLocaleDateString("en-US", options)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          <span className="text-blue-600">
            There are
          </span>
          {` ${props.commits.length} commits`}
        </h1>

        <div className='mt-6'>
          <button
            className='bg-gray-200 border hover:border-black p-3 rounded-xl hover:bg-gray-200 active:bg-gray-300 '
            onClick={() => { console.log('click') }}
          >
            <UpdateIcon />
          </button>
        </div>
        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          {
            props.commits.map(item => {
              return (
                <div
                  key={item.sha}
                  className='mt-6 container rounded-xl
                  border p-6 text-left 
                  hover:border-blue-600 
                  hover:text-blue-600 
                  focus:text-blue-600 
                  focus:border-blue-600 
                  cursor-pointer'
                >
                  <h3 className="text-2xl">
                    {item.commit.message}
                  </h3>
                  <div className='flex justify-between'>
                    <p className="mt-4 text-base">
                      {`by ${item.commit.author.name}`}
                    </p>
                    <p className="mt-4 text-xl text-slate-500">
                      {formatDate(item.commit.author.date)}
                    </p>
                  </div>
                </div>
              )
            })
          }
        </div>

      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
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
