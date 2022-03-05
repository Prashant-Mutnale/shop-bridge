export default function isEmpty(str) {
    if (!str) return true;
    if (str.replace(/\s+/g, '').length === 0) {
        return true;
    } else {
        return false;
    }
}