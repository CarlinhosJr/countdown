

export function CountDown(){
    let data = '2022/09/22';
    let falta = (new Date(data).getTime() - new Date().getTime()) / 1000;
    let segundos = Math.round(falta % 60);
    let minutos = Math.round(falta / 60 % 60);
    let horas = Math.round(falta / 60 / 60 % 24);
    let dias = Math.round(falta / 60 / 60 / 24);
    let divs = document.querySelectorAll('#Count div');
    
    setInterval(function() {
        if (segundos == 0) {
            segundos = 60;
            minutos--;
        }
        if (minutos == 0) {
            minutos = 60;
            horas--;
        }
        if (horas == 0) {
            horas = 24;
            dias--;
        }
        segundos--;
        var contador = [dias, horas, minutos, segundos].forEach(function (parcela, i) {
            divs[i].innerHTML = parcela;
        });
    
    }, 1000);
    
    return(
        <div className="flex mt-5 gap-10 text-7xl px-5" id="Count">
            <div></div>
            <span>:</span>
            <div></div>
            <span>:</span>
            <div></div>
            <span>:</span>
            <div></div>
        </div>
    )
}





