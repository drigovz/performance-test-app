import addUsers from './sceneries/users/test.addUsers';
import { group } from 'k6';

export default () => {
  group('Endpoint add user - Controller Users - APITest.K6', () => {
    addUsers();
  });
};
