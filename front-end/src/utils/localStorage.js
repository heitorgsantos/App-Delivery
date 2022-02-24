export const clearLocalStorage = () => localStorage.clear();

const saveLocalStorage = (data) => localStorage.setItem('user', JSON.stringify(data));

export default saveLocalStorage;
