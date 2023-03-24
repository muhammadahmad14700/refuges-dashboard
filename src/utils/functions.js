export function Truncate(str) {
    return str.length > 12 ? str.substring(0, 12) + "..." : str;
}
export function TruncateEmail(str) {
    return str.length > 15 ? str.substring(0, 15) + "..." : str;
}
export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}