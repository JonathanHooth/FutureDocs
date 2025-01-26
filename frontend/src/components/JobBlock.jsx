import "./JobBlock.css"

export default function JobBlock(props){


  return(
    <>
    <div className="jobContainer">
      <div className="Header">
      <div className="title">
        {props.title}
      </div>
      <div className="date">
        {props.date}
      </div>
      </div>

      <div className="author">
        {props.author}
      </div>
      <div className="location">
        {props.location}
      </div>

      <div className="description">
        {props.description}
      </div>

    </div>
    </>
  )
}