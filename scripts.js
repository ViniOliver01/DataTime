function timeNow(){
    let date = new Date(); 

    // Get Date
    let Day = date.getDate().toString();
    let Month = (date.getMonth()+1).toString();
    let Year = date.getFullYear().toString();
    // fix Month count

    // Get Time
    let H = date.getHours().toString();
    let M = date.getMinutes().toString();
    let S = date.getSeconds().toString();

    // Format Hour
    H.length==1 ? H="0"+H : false;
    M.length==1 ? M="0"+M : false;
    S.length==1 ? S="0"+S : false;

    

    // Format Date
    Day.length==1 ? Day="0"+Day : false;
    Month.length==1 ? Month="0"+Month : false;
    Year.length==1 ? Year="0"+Year : false;
    // Put in Html
    const elementHour = document.querySelector("#clock");
    elementHour.innerHTML = `${H}:${M}:${S}`
    const elementDate = document.querySelector("#dateTime");
    elementDate.innerHTML = `${Day}/${Month}/${Year}`
}

setInterval(timeNow, 500);