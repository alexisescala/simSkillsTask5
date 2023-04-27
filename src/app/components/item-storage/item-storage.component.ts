import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Item } from 'src/app/interfaces/item';

@Component({
  selector: 'app-item-storage',
  templateUrl: './item-storage.component.html',
  styleUrls: ['./item-storage.component.scss'],
})
export class ItemStorageComponent implements OnInit {
  form: FormGroup;
  image: string;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ItemStorageComponent>
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: '',
      description: '',
      price: '',
      image: null,
    });
  }

  onImageSelected(event: any) {
    const image = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
      this.image = reader.result as string;
    };
  }

  saveData() {
    const item: Item = {
      name: this.form.value.name,
      description: this.form.value.description,
      price: this.form.value.price,
      image: this.image,
    };
    this.dialogRef.close(item);
  }
}
