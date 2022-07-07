const Bath = (props) => {
  return (
    <>
      <div id={`bath-${props.size.toLowerCase()}`} className="centered-flex">
        <h3>{props.size} Bath</h3>
      </div>
    </>
  )
}


export default Bath