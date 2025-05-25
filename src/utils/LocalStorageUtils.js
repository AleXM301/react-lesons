export const STORAGE_KEYS = {
    EMOJI: 'emoji',
    THEME: 'theme',
};

export function getJSONFromStorage(key, defaultValue) {
    let item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
}

export function setJSONToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function getFromStorage(key, defaultValue) {
    let item = localStorage.getItem(key);
    return item ? item : defaultValue;
}

export function setToStorage(key, value) {
    localStorage.setItem(key, value);
}