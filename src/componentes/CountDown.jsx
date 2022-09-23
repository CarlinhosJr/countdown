import { useEffect, useState } from "react";
import dayjs from 'dayjs';

const CountDown = () => {

    const nowDate = new Date()
    const date = new Date('2022-09-23 09:09:00');
    const falta = (date.getTime() - new Date().getTime()) / 1000;

    const [seconds, setSeconds] = useState(Math.round(falta % 60));
    const [minutes, setMinutes] = useState(Math.round(falta / 60 % 60));
    const [hours, setHours] = useState(Math.round(falta / 60 / 60 % 24));
    const [days, setDays] = useState(Math.round(falta / 60 / 60 / 24));

    useEffect(() =>{
        const intervalId = setInterval(() => {
            if(seconds == 0){
                setSeconds (60)
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
            if(date.getTime() < nowDate.getTime()){
                isTimeBefore()
            }

        }, 1000);
        return () => clearInterval(intervalId);
    }, [seconds, minutes, hours, days])

    const isTimeBefore = () => {
        setDays(0)
        setHours(0)
        setMinutes(0)
        setSeconds(0)
    }


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





