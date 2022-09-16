import { Rol } from './rol';

export interface User {
  uid: string;
  firstName: string;
  lastName: string;
  avatar: string;
  email: string;
  password: string;
  roles: Rol[];
  emailVerified?: boolean;
  photoURL?: string;
  displayName?: string;
}
