const Bedroom = (props) => {
  return (
    <>
      <div className="Bedroom" id={`bed-${props.bedNum}`}>
        {/* took the id from the solution ty */}
        <h3>Bedroom {props.bedNum}</h3>
      </div>
    </>
  )
}

export default Bedroom