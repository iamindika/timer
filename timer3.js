// Sets timers from command line arguments

const args = process.argv.slice(2);

const dot = (isLastTimer) => {
  process.stdout.write('.');
  if (isLastTimer) {
    process.stdout.write('\n');
  }
};

const setTimer = (callback, delay, isLastTimer = false) => {
  setTimeout(() => callback(isLastTimer), delay);
};

const alarm = timers => {
  if (timers.length) {
    const validTimers = timers.filter(timer => !isNaN(timer) && Number(timer) >= 0);
    validTimers.map((timer, i, timerArr) => {
      const convertTimer = Number(timer);
      const isLastTimer = i === (timerArr.length - 1);
      process.stdout.write(`Alarm set for ${convertTimer} seconds...\n`);
      isLastTimer ? setTimer(dot, convertTimer * 1000, true) : setTimer(dot, convertTimer * 1000);
    })
  }
}

alarm(args);