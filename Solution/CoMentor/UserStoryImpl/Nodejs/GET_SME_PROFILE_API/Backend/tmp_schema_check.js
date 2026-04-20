const db = require('./config/db');
const queries = [
  'SHOW COLUMNS FROM users;',
  'SHOW COLUMNS FROM personal_informations;',
  'SHOW COLUMNS FROM runtimes;'
];
let i = 0;
function run() {
  if (i >= queries.length) {
    db.end();
    return;
  }
  db.query(queries[i], (err, res) => {
    if (err) {
      console.error('ERROR', queries[i], err.message);
      db.end();
      return;
    }
    console.log('---', queries[i], '---');
    console.table(res);
    i++;
    run();
  });
}
run();
