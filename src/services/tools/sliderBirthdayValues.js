function sliderBirthdayValues(value){
    if(value==="0"){
        return "all";
    }
    else if (value==="8"){
        return "january";
    } else if (value==="16"){
        return "february";
    } else if (value==="24"){
        return "march";
    } else if (value==="32"){
        return "april";
    } else if (value==="40"){
        return "may";
    }else if (value==="48"){
        return "june";
    }else if (value==="56"){
        return "july";
    }else if (value==="64"){
        return "august";
    }else if (value==="72"){
        return "september";
    }else if (value==="80"){
        return "october";
    }else if (value==="88"){
        return "november";
    }else if (value==="96"){
        return "december";
    }
};

export default sliderBirthdayValues;