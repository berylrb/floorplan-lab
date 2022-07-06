const Bath = (props) => {
  return (
    <>
      <div className="Bath" id={`bath-${props.size}`}>
        {props.size} Bath
      </div>
    </>
  )
}


export default Bath