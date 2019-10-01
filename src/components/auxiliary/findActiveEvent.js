import breakingUpIntoPartsId from "./breakingUpIntoPartsId";

export default function findActiveEvent(allEvent, id, eventOrOtherArray) {
    const {year, fromTime, monthAndDate} = breakingUpIntoPartsId(id);
    return allEvent.filter((item) => {
        return eventOrOtherArray ?
            (item.year === +year &&
            item.monthAndDate === monthAndDate &&
            item.from === fromTime)
        :
        (!(item.year === +year &&
            item.monthAndDate === monthAndDate &&
            item.from === fromTime))
    });

}
