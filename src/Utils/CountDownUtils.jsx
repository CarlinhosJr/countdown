export function getRemainingTime(){
    const data = new Date('2022-09-22 00:00:00');
    const falta = (data.getTime() - new Date().getTime()) / 1000;

    const [segundos, setSegundos] = useState(Math.round(falta % 60));
    const [minutos, setMinutos] = useState(Math.round(falta / 60 % 60));
    const [horas, setHoras] = useState(Math.round(falta / 60 / 60 % 24));
    const [dias, setDias] = useState(Math.round(falta / 60 / 60 / 24));

}