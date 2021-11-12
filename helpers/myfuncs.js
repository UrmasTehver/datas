/** Muudab kuupäeva kujult YYYY-MM-DD kujule DD.MM.YYY */

function convertDate(strDate) {
    let parts = strDate.split('-');
    return parts[2] + '.' + parts[1] + '.' + parts[0];
}

/** Muudab Eesnimi Perekonnanimi kujule E.Perenimi */
function joinNames(firstname, lastname) {
    return firstname.charAt(0) + '. ' + lastname;
}


/** Tuvastab, kas täna on sünnipäev */
function isBirthday(date) {
    let today =  new Date();
    let day = today.getDate();
    let month = today.getMonth()+1;
    let parts = date.split('-');
    if (day == parts[2] && month == parts[1]) {
        return true;
    } else {
        return false;
    }
}


/** Et saaks funktsioone mujal kasutada */
module.exports = {
    convertDate: convertDate,
    joinNames: joinNames,
    isBirthday: isBirthday
}