function cutMonth(date){
    // console.log(date);
    let components = date.split(' ');

    // Le mois est le dernier élément de components
    let month = components[0].toLowerCase();
    // console.log(month);
    return month;
};

export default cutMonth;