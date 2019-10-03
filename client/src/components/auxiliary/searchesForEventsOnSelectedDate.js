
export default function searchesForEventsOnSelectedDate(year,activeDate,allEvent) {
        return allEvent.filter(function (date) {
            return date.year === year && date.monthAndDate === activeDate;
        });
    };