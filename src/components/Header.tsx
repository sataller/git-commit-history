export const HeaderComponent = ({
  commitsNumber,
}:{
  commitsNumber: number,
}) => {
  return (
    <h1 className="text-6xl font-bold">
    <span className="text-blue-600">
      There are
    </span>
    {` ${commitsNumber} commits`}
  </h1>
  )
}