let args = process.argv.splice(2);

const alarm = (cmdLineArgs) => {
  let timers = [];
  for (let i = 0; i < cmdLineArgs.length; i++) {
    if (!isNaN(Number(cmdLineArgs[i]))) {
      if (cmdLineArgs[i] >= 0) {
        timers.push(Number(cmdLineArgs[i]));
      } else {
        console.log(`Error ${cmdLineArgs[i]} is negative!`);
      }
    } else {
      console.log(`Error ${cmdLineArgs[i]} is not a number!`);
    }
  }

  if (!timers.length) {
    console.log('Invalid input! Please enter only numbers');
    return;
  }

  for (const timer of timers) {
    setTimeout(() => process.stdout.write('\x07'), timer);
  }
};

alarm(args);