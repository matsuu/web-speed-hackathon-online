module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000/'],
      startServerCommand: 'yarn serve',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
