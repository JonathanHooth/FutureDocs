import { useTime } from './ClockLogic'

import './Clock.css'
import { useEffect } from 'react'

export const Clock = () => {
  const { date, hours, minutes, amOrPm } = useTime()

  return (
    <div className="clock">
      <time dateTime={date.toLocaleTimeString()}>
        <span className="">{hours}</span>
        <span className="">:</span>
        <span className="">
          {minutes}
          &nbsp;
          {amOrPm}
        </span>
      </time>
    </div>
  )
}