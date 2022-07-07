import Oven from "./Oven"
import Sink from "./Sink"


const Kitchen = (props) => {
    return (
      <>
        <div id="kitchen" className="centered-flex">
          <h3>Kitchen</h3>
          <div id="kitchen-stuff">
            <Oven />
            <Sink />
          </div>
        </div>
      </>
    )
  }

export default Kitchen