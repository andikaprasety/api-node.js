const {
  pustbook,
  getAllBook,
  getDetailBookById,
  editBookById,
  deleteBookById,
} = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (() => '<h1>Consume myAPI!!</h1>'),
  },
  {
    method: 'POST',
    path: '/books',
    handler: pustbook,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBook,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getDetailBookById,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookById,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookById,
  },
];

module.exports = routes;
