
(function () {
  "use strict";

  // Avoid creating the clock more than once.
  if (document.getElementById("archive-clock")) return;

  const style = document.createElement("style");

  style.textContent = `
    #archive-clock {
      position: fixed !important;
      right: 24px !important;
      bottom: 24px !important;
      width: 145px !important;
      height: 145px !important;
      display: block !important;
      visibility: visible !important;
      opacity: 1 !important;
      z-index: 999999 !important;
      pointer-events: none !important;
      filter: drop-shadow(3px 5px 6px rgba(0,0,0,0.3));
    }

    #archive-clock svg {
      display: block;
      width: 100%;
      height: 100%;
      overflow: visible;
    }

    @media (max-width: 600px) {
      #archive-clock {
        width: 105px !important;
        height: 105px !important;
        right: 12px !important;
        bottom: 12px !important;
      }
    }
  `;

  document.head.appendChild(style);

  const clock = document.createElement("div");
  clock.id = "archive-clock";
  clock.setAttribute("aria-label", "Live analog clock");

  clock.innerHTML = `
    <svg viewBox="0 0 200 200"
         xmlns="http://www.w3.org/2000/svg"
         role="img"
         aria-label="Analog clock with Roman numerals">

      <circle cx="100" cy="100" r="98" fill="#241c19"/>
      <circle cx="100" cy="100" r="93" fill="#78604a"/>
      <circle cx="100" cy="100" r="88" fill="#241c19"/>
      <circle cx="100" cy="100" r="82" fill="#e8dcc7"/>

      <circle cx="100" cy="100" r="77"
              fill="none" stroke="#78604a" stroke-width="1.5"/>
      <circle cx="100" cy="100" r="73"
              fill="none" stroke="#241c19" stroke-width="0.8"/>

      <g stroke="#241c19" stroke-width="2.2">
        <line x1="100" y1="24" x2="100" y2="34"/>
        <line x1="100" y1="24" x2="100" y2="34" transform="rotate(30 100 100)"/>
        <line x1="100" y1="24" x2="100" y2="34" transform="rotate(60 100 100)"/>
        <line x1="100" y1="24" x2="100" y2="34" transform="rotate(90 100 100)"/>
        <line x1="100" y1="24" x2="100" y2="34" transform="rotate(120 100 100)"/>
        <line x1="100" y1="24" x2="100" y2="34" transform="rotate(150 100 100)"/>
        <line x1="100" y1="24" x2="100" y2="34" transform="rotate(180 100 100)"/>
        <line x1="100" y1="24" x2="100" y2="34" transform="rotate(210 100 100)"/>
        <line x1="100" y1="24" x2="100" y2="34" transform="rotate(240 100 100)"/>
        <line x1="100" y1="24" x2="100" y2="34" transform="rotate(270 100 100)"/>
        <line x1="100" y1="24" x2="100" y2="34" transform="rotate(300 100 100)"/>
        <line x1="100" y1="24" x2="100" y2="34" transform="rotate(330 100 100)"/>
      </g>

      <g fill="#241c19" font-family="Georgia, serif"
         font-size="16" text-anchor="middle"
         dominant-baseline="middle">
        <text x="100" y="46">XII</text>
        <text x="127" y="53">I</text>
        <text x="147" y="73">II</text>
        <text x="155" y="100">III</text>
        <text x="147" y="127">IV</text>
        <text x="127" y="147">V</text>
        <text x="100" y="155">VI</text>
        <text x="73" y="147">VII</text>
        <text x="53" y="127">VIII</text>
        <text x="45" y="100">IX</text>
        <text x="53" y="73">X</text>
        <text x="73" y="53">XI</text>
      </g>

      <line id="clock-hour"
            x1="100" y1="100" x2="100" y2="63"
            stroke="#241c19" stroke-width="5"
            stroke-linecap="round"/>

      <line id="clock-minute"
            x1="100" y1="100" x2="100" y2="43"
            stroke="#241c19" stroke-width="3.5"
            stroke-linecap="round"/>

      <line id="clock-second"
            x1="100" y1="112" x2="100" y2="38"
            stroke="#7c3025" stroke-width="1.5"
            stroke-linecap="round"/>

      <circle cx="100" cy="100" r="10"
              fill="none" stroke="#78604a" stroke-width="0.8"/>
      <circle cx="100" cy="100" r="6" fill="#241c19"/>
      <circle cx="100" cy="100" r="2" fill="#c5a783"/>
    </svg>
  `;

  document.body.appendChild(clock);

  function updateClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondAngle = seconds * 6;
    const minuteAngle = minutes * 6 + seconds * 0.1;
    const hourAngle = (hours % 12) * 30 + minutes * 0.5;

    document.getElementById("clock-second")
      .setAttribute("transform", "rotate(" + secondAngle + " 100 100)");

    document.getElementById("clock-minute")
      .setAttribute("transform", "rotate(" + minuteAngle + " 100 100)");

    document.getElementById("clock-hour")
      .setAttribute("transform", "rotate(" + hourAngle + " 100 100)");
  }

  updateClock();
  window.setInterval(updateClock, 1000);
})();
