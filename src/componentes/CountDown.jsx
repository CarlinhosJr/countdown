import { useState } from "react";


const CountDown = () => {
    const data = new Date('2022-09-22 00:00:00');
    const falta = (data.getTime() - new Date().getTime()) / 1000;

    const [segundos, setSegundos] = useState(Math.round(falta % 60));
    const [minutos, setMinutos] = useState(Math.round(falta / 60 % 60));
    const [horas, setHoras] = useState(Math.round(falta / 60 / 60 % 24));
    const [dias, setDias] = useState(Math.round(falta / 60 / 60 / 24));

    const setCountDown = () => {
        setSegundos(Math.round(new Date().getSeconds()))
    }

    setInterval(function () {
        setCountDown();
    }, 1000);

    return (
        <div className="flex mt-5 gap-10 text-7xl px-5">
            <div>{dias}</div>
            <span>:</span>
            <div>{horas}</div>
            <span>:</span>
            <div>{minutos}</div>
            <span>:</span>
            <div>{segundos}</div>
        </div>
    )
}

export default CountDown;





