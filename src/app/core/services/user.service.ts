import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { BehaviorSubject, firstValueFrom, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userInfo$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(
    null
  );
  user$: Observable<User | null> = this.userInfo$.asObservable();

  constructor(public afs: AngularFirestore) {}

  getUserByUid(uid: string): Promise<User | null> {
    return firstValueFrom(
      this.afs
        .collection('users')
        .doc<User>(uid)
        .get()
        .pipe(
          map((u) => {
            console.log(u);
            if (u.exists) {
              this.setUser(u.data() as User);
            }
            return u.exists ? (u.data() as User) : null;
          })
        )
    );
  }

  setUser(user: User) {
    console.log(user);
    this.userInfo$.next(user);
    localStorage.setItem('user', JSON.stringify(user));
    JSON.parse(localStorage.getItem('user')!);
  }
}
