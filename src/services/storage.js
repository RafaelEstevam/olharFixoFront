const getLocalStorageToken = () => {

    if(localStorage.getItem('token')){
        return true;
    }else{
        return false;
    }
}

const removeLocalStorage = () => {
    localStorage.removeItem('token');
}

export {getLocalStorageToken, removeLocalStorage};