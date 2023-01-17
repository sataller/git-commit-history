import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import HomeComponent from '../components/Home'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          <span className="text-blue-600">
            There are
          </span>
          {' 13 commits'}
        </h1>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <div className='mt-6 container rounded-xl
                          border p-6 text-left 
                          hover:border-blue-600 
                          hover:text-blue-600 
                          focus:text-blue-600 
                          focus:border-blue-600 
                          cursor-pointer'
          >
            <h3 className="text-2xl">
              Title
            </h3>
            <div className='flex justify-between'>
              <p className="mt-4 text-base">
                Test text commit
              </p>
              <p className="mt-4 text-xl text-slate-500">
                Test time view
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
