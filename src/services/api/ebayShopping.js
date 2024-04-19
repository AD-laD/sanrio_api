const getEbayProducts = async function(characterName) {
    characterName = characterName + '-sanrio';
    const url = `https://ebay-search-result.p.rapidapi.com/search/${characterName}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e6bd8a19b3mshb40a5d5f98cbd43p1ce1e5jsna1032cfdcb59',
            'X-RapidAPI-Host': 'ebay-search-result.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        console.log(url);
        if (response.ok) {
            return await response.json();
        } else {
            throw new Error(response.statusText);
        }
    } catch (error) {
        console.error(error);
    }
}

export default getEbayProducts;

