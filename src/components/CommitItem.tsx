import { formatDate } from "../utils/formatDate"

export const CommitItem = ({
  date,
  message,
  authorName,
}: {
  message: string,
  authorName: string,
  date: string,
}) => {
  return (
    <div className='mt-6 container rounded-xl
      border p-6 text-left 
      hover:border-blue-600 
      hover:text-blue-600 
      focus:text-blue-600 
      focus:border-blue-600
      cursor-pointer'
    >
      <h3 className="text-2xl">
        {message}
      </h3>
      <div className='flex justify-between'>
        <p className="mt-4 text-base">
          {`by ${authorName}`}
        </p>
        <p className="mt-4 text-xl text-slate-500">
          {formatDate(date)}
        </p>
      </div>
    </div>
  )
}