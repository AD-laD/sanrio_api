function cutMonth(date){
    let components = date.split(' ');
    let month = components[0].toLowerCase();
    return month;
};

export default cutMonth;