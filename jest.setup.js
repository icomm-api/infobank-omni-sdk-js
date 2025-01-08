// jest.setup.js
beforeAll(() => {
    jest.spyOn(console, 'log').mockImplementation((...args) => {
      process.stdout.write(args.join(' ') + '\n');
    });
  });
  