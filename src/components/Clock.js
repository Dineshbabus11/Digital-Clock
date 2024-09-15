import React, { useEffect, useState } from 'react'
import '../css/Clock.css'
export const Clock = () => {

    var [mode,setMode]=useState("Dark Mode")
    var [bgColor,setBgColor]=useState("black")
    var [tColor,setTColor]=useState("white")

    var [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
        var timer = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    function formatTime(hour) {
        return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour
    }
    function formatHour(num) {
        return num < 10 ? `0${num}` : num
    }

    function formatDate(date) {
        var option = { weekday: "long", year: "numeric", month: "long", day: "numeric" }
        return date.toLocaleDateString(undefined, option)
    }
    return (
            <div className='digital-clock'>
                <h1>Digital Clock</h1>
                <div className='time'>{formatHour(formatTime(currentTime.getHours()))} : {formatHour(currentTime.getMinutes())} : {formatHour(currentTime.getSeconds())} {currentTime.getHours < 12 ? "AM" : "PM"}</div>
                <div className='date'>{formatDate(currentTime)}</div>
            </div>
    )
}
