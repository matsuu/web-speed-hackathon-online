module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      url: [
        'http://localhost:3000/',
        'http://localhost:3000/b0000',
        'http://localhost:3000/b0006/entry/e0028',
        'http://localhost:3000/b0004/entry/e0001',
        'http://localhost:3000/404'
      ],
      startServerCommand: 'yarn serve'
    },
    upload: {
      target: 'filesystem',
      outputDir: './lhci'
    }
  }
};
