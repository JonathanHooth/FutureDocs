import "./JobBlock.css"

export default function JobBlock(props){


  return(
    <>
    <div className="jobContainer">
      <div className="Header">
      <div className="title">
        {props.job.title}
      </div>
      <div className="date">
        {new Date(props.job.date).toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        })}
      </div>
      </div>

      <div className="author">
        {props.job.author}
      </div>
      <div className="location">
        {props.job.location}
      </div>

      <div className="description">
        {props.job.description}
      </div>

    </div>
    </>
  )
}