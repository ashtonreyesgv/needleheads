// works out whether the shop is open right now. always in new york time, so somebody checking
// from another time zone still gets the right answer
import { hours } from '../data/business.js';

const DAY_INDEX = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

// 10 -> "10am", 18 -> "6pm"
export function formatHour(hour) {
    const suffix = hour >= 12 ? 'pm' : 'am';
    const twelve = hour % 12 === 0 ? 12 : hour % 12;
    return `${twelve}${suffix}`;
}

function newYorkNow(date) {
    const parts = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/New_York',
        weekday: 'short',
        hour: 'numeric',
        minute: 'numeric',
        hourCycle: 'h23'
    }).formatToParts(date);

    const get = (type) => parts.find((part) => part.type === type).value;

    return {
        dayIndex: DAY_INDEX[get('weekday')],
        time: Number(get('hour')) + Number(get('minute')) / 60
    };
}

export function getOpenStatus(date = new Date()) {
    const { dayIndex, time } = newYorkNow(date);
    const today = hours[dayIndex];

    if (today.open !== null && time >= today.open && time < today.close) {
        return { isOpen: true, dayIndex, label: 'Open now', detail: `until ${formatHour(today.close)}` };
    }

    // still to open today
    if (today.open !== null && time < today.open) {
        return { isOpen: false, dayIndex, label: 'Closed right now', detail: `opens ${formatHour(today.open)} today` };
    }

    // otherwise walk forward to the next day with hours
    for (let step = 1; step <= 7; step++) {
        const next = hours[(dayIndex + step) % 7];
        if (next.open !== null) {
            const when = step === 1 ? 'tomorrow' : next.day;
            return { isOpen: false, dayIndex, label: 'Closed right now', detail: `opens ${formatHour(next.open)} ${when}` };
        }
    }

    return { isOpen: false, dayIndex, label: 'Closed', detail: '' };
}
