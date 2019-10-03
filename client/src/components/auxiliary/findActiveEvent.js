
export default function findActiveEvent(allEvent, id, eventOrOtherArray) {

    return allEvent.filter((item) => {
        return eventOrOtherArray ? (item._id === id):(!(item._id === id))
    });

}
