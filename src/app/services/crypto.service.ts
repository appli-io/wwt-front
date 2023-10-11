import { Injectable } from '@angular/core';
import * as CryptoJS  from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private secretKey = 'secretKey'; // Replace with your own secret key

  encrypt(data: any) {
    return CryptoJS.AES.encrypt(JSON.stringify(data), this.secretKey).toString();
  }

  decrypt(data: any) {
    if (!data) return null;
    const bytes = CryptoJS.AES.decrypt(data, this.secretKey);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  }
}
