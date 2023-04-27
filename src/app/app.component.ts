import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItemStorageComponent } from './components/item-storage/item-storage.component';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'task_5';
  constructor(
    private dialog: MatDialog,
    private storageService: StorageService
  ) {}



  openItemModal() {
    const dialogRef = this.dialog.open(ItemStorageComponent);

    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.storageService.addItem(data).then((response)=>{
          if (response){
            alert('Se guardo con exito!')
          }
        });
      }
    });
  }
}
