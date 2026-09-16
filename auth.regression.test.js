const { login } = require('./auth');

test('Sai mật khẩu trả về false', () => {
  expect(login('admin', 'wrongpass')).toBe(false);
});

test('Username rỗng trả về false', () => {
  expect(login('', '123')).toBe(false);
});

test('Mật khẩu chứa ký tự đặc biệt trả về false', () => {
  expect(login('admin', '123@#$')).toBe(false);
});

test('Tài khoản bị khóa trả về false dù đúng mật khẩu', () => {
  expect(login('locked_user', '123')).toBe(false);
});

test('Tài khoản không tồn tại trả về false', () => {
  expect(login('unknown_user', '123')).toBe(false);
});
