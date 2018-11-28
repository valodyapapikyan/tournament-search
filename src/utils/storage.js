
  class Storage {

    constructor() {
        if(!Storage.instance) {
            Storage.instance = this;
        }
        return Storage.instance;
    }

     getElement (key) {
        return JSON.parse(localStorage.getItem(key))
    };

     addElement (key, element) {
        localStorage.setItem(key ,JSON.stringify(element))
    }
}

const localStorageManager = new Storage();
export default localStorageManager;