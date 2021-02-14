import React, { useState, useEffect } from 'react'

const Time = () => {
  const [time, setTime] = useState<Date>(() => new Date(Date.now()))

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date(Date.now()))
    }, 1000)

    return () => {
      console.log('clean up')
      clearInterval(timer)
    }
  }, [])

  return <p>{time.toUTCString()}</p>
}

export default Time
