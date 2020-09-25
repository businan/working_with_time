document.querySelector('#start').addEventListener("load", startTime())


function startTime() {
            
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    const today = new Date();
    const turkishDate = today.toLocaleDateString('tr-TR', options);
    document.getElementById('time').innerHTML = today.toLocaleTimeString();
    document.getElementById('week').innerHTML =  getWeek();
    document.getElementById('localeDate').innerHTML = setComma(turkishDate);

    setTimeout(startTime, 1000);
    
}
function setComma(str){
    const dateChar = str.slice(' ');
    let value = '';
    for( let i = 0 ; i < dateChar.length; i++){
        
        if (dateChar[i]==' '){
            value += ',';
        }
        value += dateChar[i];
    }
    
    return value;
    }

function getWeek(){
    const d = new Date();
    let yearStart = +new Date(d.getFullYear(), 0, 1);
    let today = +new Date(d.getFullYear(),d.getMonth(),d.getDate());
    let dayOfYear = ((today - yearStart + 1) / 86400000);
    let week = Math.ceil(dayOfYear / 7).toString();
    const resultWeek = ", " + week + '. Hafta';
    return resultWeek
    
    

}