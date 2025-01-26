import { useTime } from './ClockLogic'

import './Clock.css'
import { useEffect } from 'react'
//&nbsp;
export const Date = () => {
  const { date, day, month, year } = useTime()
  
  useEffect(()=>(
    console.log(day)
  ),[])

  return(<>
    <div className="clock">
      <time dateTime={date.toLocaleTimeString()}>
        <span className="">{day}</span>
        <span className=""> {month} &nbsp; </span>
        <span className=""> {year} </span>
      </time>
    </div>
  </>)
}