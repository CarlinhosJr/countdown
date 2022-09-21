import { useEffect, useState } from "react";


const CountDown = () => {
    
    const data = new Date('2022-09-22 00:00:00');
    const falta = (data.getTime() - new Date().getTime()) / 1000;

    const [seconds, setSeconds] = useState(Math.round(falta % 60));
    const [minutes, setMinutes] = useState(Math.round(falta / 60 % 60));
    const [hours, setHours] = useState(Math.round(falta / 60 / 60 % 24));
    const [days, setDays] = useState(Math.round(falta / 60 / 60 / 24));

    useEffect(() =>{
        const intervalId = setInterval(() => {
            if(seconds == 0){
                setSeconds (sec => sec = 60)
                setMinutes(minutes -1)
            }
            if(minutes == 0){
                setMinutes(min => min = 60)
                setHours(hours - 1)
            }
            if(hours == 0){
                setHours(hr => hr = 24)
                setDays(days - 1)
            }
            setSeconds(sec => sec -1)
        }, 1000);
        return () => clearInterval(intervalId);
    }, [seconds, minutes, hours, days])

    return (
        <div className="flex mt-5 gap-10 text-7xl px-5">
            <div>{days}</div>
            <span>:</span>
            <div>{hours}</div>
            <span>:</span>
            <div>{minutes}</div>
            <span>:</span>
            <div>{seconds}</div>
        </div>
    )
}

export default CountDown;





