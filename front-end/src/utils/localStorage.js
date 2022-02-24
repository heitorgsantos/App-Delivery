export const clearLocalStorage = () => localStorage.clear();

const saveLocalStorage = (data) => localStorage.user(JSON.stringify(data));

export default saveLocalStorage;
