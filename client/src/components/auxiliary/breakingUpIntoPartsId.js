export default function breakingUpIntoPartsId(id) {
    // id edit event: XXXX(year) XXXXXXX(month & date) XX:XX:00(time 'from')
    const year = id.substr(0, 4);
    const fromTime = id.substr(-8);
    const monthAndDate = id.slice(0, -9).slice(5);
    return {
        year,
        fromTime,
        monthAndDate
    }
}