import { firebaseConfig } from '../app/core/config/firebase';
export const environment = {
  production: true,
  firebase: { ...firebaseConfig },
};
