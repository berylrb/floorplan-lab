import Oven from "./Oven"
import Sink from "./Sink"


const Kitchen = (props) => {
  return (
    <>
      <div className="Kitchen">
        <h3>Kitchen</h3>
        <ul>
          <Oven />
          <Sink />
        </ul>
      </div>
    </>
  )
}

export default Kitchen