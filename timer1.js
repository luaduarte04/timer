let numbers = process.argv.splice(2);

for(number of numbers) {
  if (Number(number) && number >= 0) {
    setTimeout(() => {process.stdout.write('\x07')}, number * 1000);
  }
}


