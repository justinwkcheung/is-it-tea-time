// Ordered west to east by UTC offset
const TIMEZONES = [
    // --- Pacific & Alaska (The Start of the Day) ---
    { label: 'Honolulu', tz: 'Pacific/Honolulu', x: 40, y: 195 },       // UTC-10
    { label: 'Anchorage', tz: 'America/Anchorage', x: 65, y: 120 },     // UTC-9

    // --- Americas (Your Home Base) ---
    { label: 'Los Angeles', tz: 'America/Los_Angeles', x: 108, y: 178 }, // UTC-8
    { label: 'Chicago', tz: 'America/Chicago', x: 174, y: 158 },         // UTC-6
    { label: 'Mexico City', tz: 'America/Mexico_City', x: 145, y: 210 }, // UTC-6
    { label: 'New York', tz: 'America/New_York', x: 213, y: 155 },       // UTC-5
    { label: 'Toronto', tz: 'America/Toronto', x: 200, y: 148 },         // UTC-5
    { label: 'São Paulo', tz: 'America/Sao_Paulo', x: 266, y: 314 },     // UTC-3

    // --- Atlantic Bridge ---
    { label: 'Nuuk', tz: 'America/Nuuk', x: 310, y: 85 },                // UTC-2

    // --- Europe & Africa ---
    { label: 'London', tz: 'Europe/London', x: 430, y: 125 },            // UTC+0
    { label: 'Paris', tz: 'Europe/Paris', x: 447, y: 137 },              // UTC+1
    { label: 'Cairo', tz: 'Africa/Cairo', x: 487, y: 174 },              // UTC+2
    { label: 'Moscow', tz: 'Europe/Moscow', x: 518, y: 108 },            // UTC+3
    { label: 'Dubai', tz: 'Asia/Dubai', x: 544, y: 186 },              // UTC+4

    // --- Central & South Asia ---
    { label: 'Mumbai', tz: 'Asia/Kolkata', x: 576, y: 196 },             // UTC+5.5
    { label: 'Kathmandu', tz: 'Asia/Kathmandu', x: 595, y: 185 },        // UTC+5.75
    { label: 'Bangkok', tz: 'Asia/Bangkok', x: 626, y: 212 },            // UTC+7

    // --- East Asia & Oceania ---
    { label: 'Beijing', tz: 'Asia/Shanghai', x: 665, y: 165 },           // UTC+8
    { label: 'Seoul', tz: 'Asia/Seoul', x: 694, y: 158 },                // UTC+9
    { label: 'Tokyo', tz: 'Asia/Tokyo', x: 710, y: 168 },                // UTC+9
    { label: 'Sydney', tz: 'Australia/Sydney', x: 720, y: 320 },         // UTC+11 (AEDT)
    { label: 'Auckland', tz: 'Pacific/Auckland', x: 780, y: 340 },       // UTC+13 (NZDT)
];

export default TIMEZONES;
