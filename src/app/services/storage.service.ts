import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private fs: Firestore) {}

  addItem(item:Item){
    const itemRef = collection(this.fs,'items');
    return addDoc(itemRef,item);
  }

  
}
