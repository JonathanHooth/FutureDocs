

import "./RecentPosting.css"

export default function RecentPosting(props){

  return(
    <>
    <div className="PostingContainer">
      <div className="Picture">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="48" viewBox="0 0 48 48" width="48">
          <g fill="#333">
            <path d="m33 17c0 4.9725-4.0275 9-9 9s-9-4.0275-9-9 4.0275-9 9-9 9 4.0275 9 9z"/>
            <path d="m24 28c-6.0075 0-18 3.0347-18 8v6h36v-6c0-4.9653-11.9925-8-18-8z"/>
          </g>
        </svg>
      </div>

      <div className="information">
        <div>
          Title
        </div>
        <div>
          Location
        </div>
        <div>
          Person
        </div>
      </div>
      
    </div>
    
    </>
  )
}