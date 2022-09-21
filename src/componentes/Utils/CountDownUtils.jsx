export function getRemainingTime(){
    const data = new Date('2022-09-22 00:00:00');
    const falta = (data.getTime() - new Date().getTime()) / 1000;

    const seconds = Math.round(falta % 60);
    const minutes = Math.round(falta / 60 % 60);
    const hours = Math.round(falta / 60 / 60 % 24);
    const days = Math.round(falta / 60 / 60 / 24);

    if(seconds == 0){
        seconds = 60
        minutes -1
    }
    if(minutes == 0){
        minutes = 60
        hours -1
    }
    if(hours == 0){
        hours = 24
        days -1
    }
    seconds -1
}