const Bedroom = (props) => {
  return (
    <>
      <div className="centered-flex" id={`bed-${props.bedNum}`}>
        {/* took the id from the solution ty */}
        <h3>Bedroom {props.bedNum}</h3>
        {/* <div className="centered-flex bedroom-closet" id={`closet-${props.bedNum}`}>Closet</div> */}
      </div>
    </>
  )
}

export default Bedroom