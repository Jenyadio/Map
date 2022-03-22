import ErrorRepository from '../app';

test('should find error text', () => {
  const map = new ErrorRepository();
  map.addError(404, 'Not found');
  map.addError(400, 'Bad request');

  expect(map.translate(404)).toEqual('Not found');
});

test('should not find error text', () => {
  const map = new ErrorRepository();
  map.addError(404, 'Not found');
  map.addError(400, 'Bad request');

  expect(map.translate(300)).toEqual('Unknown error');
});
