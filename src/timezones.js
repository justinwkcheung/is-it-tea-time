// Ordered west to east by UTC offset
const TIMEZONES = [

    // Americas
    { label: 'Los Angeles', tz: 'America/Los_Angeles', x: 108, y: 178 },
    { label: 'Denver', tz: 'America/Denver', x: 138, y: 162 },
    { label: 'Mexico City', tz: 'America/Mexico_City', x: 145, y: 210 },
    { label: 'Chicago', tz: 'America/Chicago', x: 174, y: 158 },
    { label: 'Toronto', tz: 'America/Toronto', x: 200, y: 148 },
    { label: 'New York', tz: 'America/New_York', x: 213, y: 155 },
    { label: 'São Paulo', tz: 'America/Sao_Paulo', x: 266, y: 314 },

    // Europe
    { label: 'London', tz: 'Europe/London', x: 430, y: 125 },
    { label: 'Paris', tz: 'Europe/Paris', x: 447, y: 137 },
    { label: 'Cairo', tz: 'Africa/Cairo', x: 487, y: 174 },
    { label: 'Moscow', tz: 'Europe/Moscow', x: 518, y: 108 },

    // Africa
    { label: 'Nairobi', tz: 'Africa/Nairobi', x: 506, y: 244 },
    { label: 'Johannesburg', tz: 'Africa/Johannesburg', x: 490, y: 315 },

    // Middle East
    { label: 'Riyadh', tz: 'Asia/Riyadh', x: 520, y: 190 },
    { label: 'Dubai', tz: 'Asia/Dubai', x: 544, y: 186 },

    // Asia
    { label: 'Mumbai', tz: 'Asia/Kolkata', x: 576, y: 196 },
    { label: 'Bangkok', tz: 'Asia/Bangkok', x: 626, y: 212 },
    { label: 'Singapore', tz: 'Asia/Singapore', x: 648, y: 238 },
    { label: 'Seoul', tz: 'Asia/Seoul', x: 694, y: 158 },
    { label: 'Tokyo', tz: 'Asia/Tokyo', x: 710, y: 168 },

    // Oceania
    { label: 'Sydney', tz: 'Australia/Sydney', x: 720, y: 320 },

];

export default TIMEZONES;
