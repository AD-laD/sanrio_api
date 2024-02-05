const getSanrioData = async function() {
    try {
        const response = await fetch('https://sanrioapi.onrender.com/App/Characters');
        if (response.ok) {
            return await response.json();
        } else {
            throw new Error(response.statusText);
        }
    } catch (error) {
        console.error(error);
    }
};

export default getSanrioData;
