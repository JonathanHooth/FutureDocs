import { useEffect, useState } from 'react'

export const useTime = (interval = 1000) => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, interval)

    return () => clearInterval(timer)
  }, [interval])

  return {
    date,
    day: String(date.getDate()),
    month: String(date.toLocaleDateString('default', { month : 'short'})),
    year : String(date.getFullYear()),
    hours: String(date.getHours()).padStart(2, '0'),
    minutes: String(date.getMinutes()).padStart(2, '0'),
    amOrPm: date.toLocaleTimeString([], {hour: 'numeric'}).replace(/\d*/, '').trim().toLocaleLowerCase(),
  }
}