const setStorage = (key,data) => {
    try{
        localStorage.setItem(key,JSON.stringify(data));
        return true;
    }
    catch(e){
        return false;
    }
}
const getStorage = (key) => {
    try{
        return JSON.parse(localStorage.getItem(key));
    }
    catch(e){
        return null;
    }
}
const removeStorage = (key) => {
    try{
        return localStorage.removeItem(key);
    }
    catch(e){
        return null;
    }
}

export default { setStorage, getStorage, removeStorage};