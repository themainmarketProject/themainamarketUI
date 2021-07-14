export default function getToken(key: string) {
    if(localStorage.getItem(key) !== '' && localStorage.getItem(key) != null) {
        return localStorage.getItem(key);
    }
    return 'user'; 
}