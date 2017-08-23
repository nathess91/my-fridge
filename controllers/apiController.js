function index(req, res) {
  res.json({
    message: 'Welcome to the table of contents.',
    documentation_url: 'https://github.com/nathess91',
    base_url: 'localhost:3000',
    endpoints: [
      {
        method: 'GET', path: '/api', description: 'Describes available endpoints'
      },
      {
        method: 'GET', path: '/api/groceryItems', description: 'Lists all grocery items'
      },
      {
        method: 'GET', path: '/api/groceryItems/:id', description: 'Gets a single grocery item'
      },
    ]
  });
}

module.exports = {
  index: index,
};
