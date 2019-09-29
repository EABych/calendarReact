export default function doublesTheNumber (number) {
    const formatter = new Intl.NumberFormat('en', {minimumIntegerDigits: 2, useGrouping: false});
    return formatter.format(number);
}