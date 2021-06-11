const sum = require('./chart');

test('button have to works', () => {
  const c = screen.getByText("Luis's Challenge");
  expect(c).toHaveClass(container);
});

