import { randEmail, randFirstName, randLastName, randUserName } from '@ngneat/falso';

export const generateUser = () => ({
  username: `test_${randUserName()}`,
  first_name: randFirstName(),
  last_name: randLastName(),
  email: randEmail(),
  password: randFirstName(),
});
