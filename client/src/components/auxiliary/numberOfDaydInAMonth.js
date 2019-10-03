 
export default function numberOfDaysInAMonthInYear (year) {
         let monthNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
            .reduce((acc, monthOneNumber) => {
                const name = new Date(year, monthOneNumber, 1).toLocaleString('en-US', {month: 'long'});
                const firstDayOfMonth = new Date(year, monthOneNumber, 1);
                const lastDayOfMonth = new Date(year, monthOneNumber + 1, 0);
                const numberOfDaysPerMonth = firstDayOfMonth.getDay();
                acc[name] = new Array(numberOfDaysPerMonth).fill(0);
                for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
                    acc[name].push(i)
                }
                return acc;
            }, {});
        return monthNumber;
    };
    
