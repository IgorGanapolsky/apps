import * as Sentry from 'sentry-expo';
import { SENTRY_DSN, ENVIRONMENT } from '@env';

export const initializeSentry = () => {
  Sentry.init({
    dsn: SENTRY_DSN,
    enableInExpoDevelopment: true,
    debug: ENVIRONMENT !== 'production',
    environment: ENVIRONMENT,
  });
};
