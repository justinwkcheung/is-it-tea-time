import React, { useState, useEffect } from "react";
import TIMEZONES from './timezones.js'
import './App.css';

const TEA_START = 15;
const TEA_END = 17;

const YES_QUIPS = [
    "Put the kettle on.",
    "Milk in first, or you're wrong.",
    "Earl Grey is the correct answer.",
    "Do not let this moment pass.",
    "Matcha? Yes, please."
];

const NO_QUIPS = [
    "Patience. It shall come.",
    "The kettle waits for no one.",
    "Not yet, dear.",
    "Count the minutes. We'll wait.",
];

function isTeaTime(tz) {
    const str = new Date().toLocaleString('en-US', { timeZone: tz, hour: 'numeric', minute: 'numeric', hour12: false });
    const [h, m] = str.split(':').map(Number);
    const mins = h * 60 + m;
    return mins >= TEA_START * 60 && mins < TEA_END * 60;
}

function formatTime(tz) {
    return new Date().toLocaleTimeString('en-GB', { timeZone: tz, hour: '2-digit', minute: '2-digit' });
}

function pickQuip(arr) {
    return arr[Math.floor(Date.now() / 60000) % arr.length];
}

function TeaCup() {
    return (
        <svg width="56" height="56" viewBox="0 0 64 64" fill="none">
            <g stroke="#C4873A" strokeWidth="1.5" strokeLinecap="round" opacity="0.7">
                <path className="steam-1" d="M24 18 Q26 13 24 8" />
                <path className="steam-2" d="M32 18 Q34 12 32 7" />
                <path className="steam-3" d="M40 18 Q38 13 40 8" />
            </g>
            <path d="M12 24 L52 24 L47 48 Q46 52 40 52 L24 52 Q18 52 17 48 Z" fill="#FAF6EE" stroke="#C4873A" strokeWidth="1.5" />
            <path d="M14 28 L50 28 L47 48 Q46 52 40 52 L24 52 Q18 52 17 48 Z" fill="#C4873A" opacity="0.18" />
            <path d="M52 28 Q64 30 63 38 Q62 46 52 44" stroke="#C4873A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <ellipse cx="32" cy="55" rx="22" ry="4" fill="#FAF6EE" stroke="#C4873A" strokeWidth="1" />
        </svg>
    );
}

function Answer({ tea }) {
    return (
        <div className="answer-block">
            {/*<p className="answer-label">Is it afternoon tea time right now, where you are?</p>*/}
            <h1>Is it <em>afternoon tea</em> time where you are?</h1>
            <div className={`big-answer ${tea ? 'yes' : 'no'}`}>{tea ? 'YES' : 'NO'}</div>
            <p className="answer-sub">{tea ? pickQuip(YES_QUIPS) : pickQuip(NO_QUIPS)}</p>
        </div>
    );
}

function TimezonePill({ label, time, active }) {
    return (
        <div className={`tz-pill ${active ? 'active' : ''}`}>
            <div className="tz-pip" />
            <span>{label}</span>
            <span className="tz-time">{time}</span>
        </div>
    );
}

function WorldMap({ zones }) {
    const continents = [
        'M85 55 L195 50 L230 60 L235 75 L210 80 L215 95 L230 105 L235 130 L225 145 L215 150 L218 160 L205 165 L185 170 L165 195 L155 220 L148 235 L140 230 L135 215 L125 210 L118 215 L108 225 L100 220 L95 210 L88 200 L80 185 L75 165 L72 145 L68 125 L70 105 L75 85 Z',
        'M200 250 L225 245 L245 255 L258 268 L265 285 L272 305 L270 325 L260 348 L250 365 L240 372 L230 368 L222 355 L215 335 L208 315 L200 295 L195 275 Z',
        'M415 85 L445 80 L465 85 L480 90 L490 100 L500 110 L498 125 L488 135 L475 140 L458 145 L445 148 L430 145 L418 138 L415 125 L412 110 L413 98 Z',
        'M428 155 L465 150 L490 155 L508 168 L520 185 L525 205 L522 228 L515 248 L510 268 L505 290 L500 315 L493 332 L482 340 L468 340 L455 330 L445 310 L438 288 L432 265 L428 242 L425 220 L423 198 L424 178 Z',
        'M490 60 L560 55 L630 60 L690 65 L730 70 L755 80 L760 95 L745 110 L720 120 L710 140 L720 155 L715 170 L700 178 L680 175 L660 180 L645 195 L640 215 L630 225 L615 220 L600 215 L585 210 L570 205 L555 195 L542 190 L530 195 L518 195 L510 188 L500 178 L492 165 L488 148 L490 130 L495 115 L500 100 L498 85 L492 72 Z',
        'M680 290 L730 285 L760 292 L775 308 L770 328 L755 340 L735 345 L715 340 L700 328 L692 312 Z',
        'M762 345 L782 342 L792 352 L788 365 L773 370 L762 362 Z',
    ];

    return (
        <div className="map-wrap">
            <svg viewBox="0 0 900 460" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
                <rect width="900" height="460" fill="#EAE4D9" />
                {continents.map((d, i) => (
                    <path key={i} d={d} fill="#D0C8BC" stroke="#B8AFA2" strokeWidth="0.8" strokeLinejoin="round" />
                ))}
                {zones.map(({ label, x, y, active }) => (
                    <g key={label}>
                        <title>{label}</title>
                        <circle
                            cx={x} cy={y}
                            r={active ? 7 : 5}
                            fill={active ? '#C4873A' : '#B8AFA2'}
                            stroke="#FAF6EE"
                            strokeWidth="1.5"
                            style={{ transition: 'all 0.4s ease' }}
                        />
                    </g>
                ))}
            </svg>
            <div className="map-legend">
                <div className="legend-item"><div className="legend-dot dot-tea" /> Tea time</div>
                <div className="legend-item"><div className="legend-dot dot-rest" /> Not yet</div>
            </div>
        </div>
    );
}

function App() {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const id = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(id);
    }, []);

    const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const localTea = isTeaTime(localTz);
    const localTime = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });

    const zones = TIMEZONES.map(z => ({
        ...z,
        active: isTeaTime(z.tz),
        time: formatTime(z.tz),
    }));

    return (
        <div className="page">
            <header>
                <p className="eyebrow">A Tea-riffic question</p>
                {/*<h1>Is it <em>afternoon tea</em> time?</h1>*/}
                <div className="teacup"><TeaCup /></div>
            </header>

            <div className="local-time">
                <span className="local-time-label">it is currently</span>
                <span className="local-time-clock">{localTime}</span>
            </div>

            <div className="divider">☕</div>

            <Answer tea={localTea} />

            <div className="divider">🍵</div>

            <p className="section-heading">Who is having afternoon tea right now?</p>
            <div className="tz-row">
                {TIMEZONES.map(z => (
                    <TimezonePill key={z.label} label={z.label} time={formatTime(z.tz)} active={isTeaTime(z.tz)} />
                ))}
            </div>

            {/*<div className="divider">☕</div>*/}

            {/*<div className="teacup"><TeaCup /></div>*/}

            {/*<p className="section-heading">Around the world</p>*/}
            {/*<WorldMap zones={zones} />*/}

            <footer>Afternoon tea is 3:00–5:00 pm local time</footer>
        </div>
    );
}

export default App;