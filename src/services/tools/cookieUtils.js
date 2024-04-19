export function saveInputData(inputName, inputValue) {
    if (inputValue.trim() !== '') {
            document.cookie = `${inputName}=${inputValue}; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/`;
    }
}

export function getInputData(inputName) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(inputName + '=')) {
            return cookie.substring(inputName.length + 1);
        }
    }
    return null;
}

export function displayCookieContent(elementId, cookieName) {
    const cookieContent = getInputData(cookieName);
    if (cookieContent) {
        document.getElementById(elementId).textContent = cookieContent;
    } else {
        document.getElementById(elementId).textContent = '';
    }
}