
const getObjectFromLocalStorage = <T>(key: string): T | null => {
    const item = localStorage.getItem(key);
    if (item) {
        try {
            return item as T;
        } catch (error) {
            console.error('Error parsing item from localStorage:', error);
            return null;
        }
    }
    return null;
};

export default getObjectFromLocalStorage;