let args = process.argv.splice(2);

const alarm = (cmdLineArgs) => {
  if (cmdLineArgs.length) {
    for (let i = 0; i < cmdLineArgs.length; i++) {
      let timer = cmdLineArgs[i];
      if (!isNaN(Number(timer))) {
        if (timer >= 0) {
          setTimeout(() => process.stdout.write('\x07'), timer);
        } else {
          console.log(`Error ${timer} is negative!`);
        }
      } else {
        console.log(`Error ${timer} is not a number!`);
      }
    }
  } else {
    console.log('Please enter timers on command line when running the application!');
  }
};

alarm(args);