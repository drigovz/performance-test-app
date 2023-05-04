import { check, sleep } from 'k6';
import http from 'k6/http';
import { generateUser } from '../../generators/users/generateUser';
import { config } from '../../configuration/globals';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';
import { textSummary } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';

const urls = {
  add: `${config.BASE_URL}user/register/`,
};

export const options = {
  stages: [{ duration: '10s', target: 10 }],
  thresholds: {
    checks: ['rate > 0.95'],
    http_req_failed: ['rate < 0.01'],
    http_req_duration: ['p(95) < 500'],
  },
};

export default function () {
  const user = generateUser();
  //const payload = JSON.stringify(user);

  const res = http.post(urls.add, user);

  check(res, {
    'user created': r => r.status === 201,
  });

  sleep(1);
}

export function handleSummary(data) {
  //console.log('data' + data);
  return {
    '../../reports/add_users_report.html': htmlReport(data),
    stdout: textSummary(data, { indent: ' ', enableColors: true }),
  };
}
