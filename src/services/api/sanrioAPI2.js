const getSanrioDataLittleApi = async function() {
    try {
        const response = await fetch('https://github.com/carolstran/sanrio-api/blob/main/characters.json');
        if (response.ok) {
            return await response.json();
        } else {
            throw new Error(response.statusText);
        }
    } catch (error) {
        console.error(error);
    }
};

export default getSanrioDataLittleApi;
