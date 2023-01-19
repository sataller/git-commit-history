import { UpdateIcon } from "../../public/update.icon"
import { Loader } from "./Loader"

export const UpdateButton = ({
  loading,
  loadNewCommitsList,
}:{
  loading: boolean,
  loadNewCommitsList: () => void,
}) => {
  return (
    <div className='mt-6'>
      <button
        className='bg-gray-200 border hover:border-black p-3 rounded-xl hover:bg-gray-200 active:bg-gray-300 '
        disabled={loading}
        onClick={loadNewCommitsList}
      >
        {loading
          ? <Loader />
          : <UpdateIcon />
        }
      </button>

    </div>
  )
} 