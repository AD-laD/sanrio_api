const getLoveCalculator = async function(characterName, userInputName) {

    const url = `https://love-calculator.p.rapidapi.com/getPercentage?fname=${userInputName}&sname=${characterName}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e6bd8a19b3mshb40a5d5f98cbd43p1ce1e5jsna1032cfdcb59',
            'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        // const result = await response.text();
        if (response.ok) {
            return await response.json();
        } else {
            throw new Error(response.statusText);
        }
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}


export default getLoveCalculator;