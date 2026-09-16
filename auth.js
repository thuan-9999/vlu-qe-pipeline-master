const lockedAccounts = ['locked_user'];

function login(username, password) {
  if (lockedAccounts.includes(username)) {
    return false; // Tài khoản bị khóa
  }
  if (username === 'admin' && password === '123') {
    return true;
  }
  return false;
}

module.exports = { login };
