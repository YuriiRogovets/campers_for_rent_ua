import { RotatingLines } from "react-loader-spinner"

const Loader = () => {
  return (
   <RotatingLines
    visible={true}
    margin="0 auto"      
    height="96"
    width="96"
    color="grey"
    strokeColor="blue"
    strokeWidth="4"
    animationDuration="0.75"
    ariaLabel="rotating-lines-loading"
    wrapperStyle={{}}
    wrapperClass=""
  />

  )
}

export default Loader