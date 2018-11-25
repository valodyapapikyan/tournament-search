
export default  class Storage {

    static getElement (key) {
        return JSON.parse(localStorage.getItem(key))
    };

    static addElement (key, element) {
        localStorage.setItem(key ,JSON.stringify(element))
    }

}