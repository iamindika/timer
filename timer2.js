// Sets timers from keyboard input

const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

// MAC System sound 
const beep = () => {
  process.stdout.write('\u0007');
}

const setTimer = (delay, callback) => {
  setTimeout(() => callback(), delay);
}

stdin.on('data', (key) => {
  const asciiKey = Number(key);
  if (key === '\u0003') {
    process.stdout.write('Thanks for using me, ciao!\n')
    process.exit();
  } else if (key === '\u0062') {
    beep();
  } else if (!isNaN(asciiKey) && asciiKey > 0) {
    process.stdout.write(`Setting timer for ${asciiKey} seconds...\n`);
    setTimer(asciiKey * 1000, beep)
  }
})