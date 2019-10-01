export default function breakingUpIntoPartsId(id) {
    // id edit event: XXXX(year) XXXXXXX(month & date) XX:XX(time 'from')
    const year = id.substr(0, 4);
    const fromTime = id.substr(-5);
    const monthAndDate = id.slice(0, -6).slice(5);

    return {
        year,
        fromTime,
        monthAndDate
    }
}