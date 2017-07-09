import { ok } from 'assert';
import { generateUUID } from '../src/uuid';

// Defines a Mocha test suite to group tests of similar kind together
suite('Extension Tests', () => {
  test('generate uuid', () => {
    const uuid = generateUUID();

    ok(uuid.length === 36, 'Did not a generate an uuid');
  });
});
