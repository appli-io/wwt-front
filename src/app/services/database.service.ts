import { Injectable } from '@angular/core';
import { Storage }    from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(private storage: Storage) {
    this.storage.create();
  }

  getUserInfo() {
    return this.storage.get('userInfo');
  }

  saveUserInfo(userInfo: any) {
    return this.storage.set('userInfo', userInfo);
  }

  removeUserInfo() {
    return this.storage.remove('userInfo');
  }
}
