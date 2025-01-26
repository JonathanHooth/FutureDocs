import "./JobBlock.css"

export default function JobBlock(props){


  return(
    <>
    <div className="jobContainer">
      <div className="Header">
      <div className="title">
        Title
      </div>
      <div className="date">
        Date
      </div>
      </div>

      <div className="author">
        Professional
      </div>
      <div className="location">
        Location
      </div>

      <div className="description">
        This is a long description to simulate an overflow in the text and to prevent it from overflowing and I have needed to type a lot if I want to test this out.
      </div>

    </div>
    </>
  )
}