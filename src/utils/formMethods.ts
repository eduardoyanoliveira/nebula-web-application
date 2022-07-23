export const reloadScreen = (timeout: number = 2000) => {
    setTimeout(() => {
        window.location.reload();
    },timeout);
};

function addZeroToDate(numb : number){
    if (numb <= 9) 
        return "0" + numb;
    else
        return numb; 
}

export const formatDate  = (date : Date, getTime = true) => {
    let fullDate = (addZeroToDate(date.getDate()).toString() + "/" + (addZeroToDate(date.getMonth()+1).toString()) + "/" + date.getFullYear());
    fullDate =  getTime ? fullDate + ' ' + addZeroToDate(date.getHours()) + ':' + addZeroToDate(date.getMinutes()) : fullDate;
    return fullDate;
}