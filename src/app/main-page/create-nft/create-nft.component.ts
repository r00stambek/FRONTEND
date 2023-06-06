import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-nft',
  templateUrl: './create-nft.component.html',
  styleUrls: ['./create-nft.component.css']


})



export class CreateNftComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const uploadBox = document.getElementById('upload-box');

    if (uploadBox) {
      uploadBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadBox.classList.add('dragover');
      });

      uploadBox.addEventListener('dragleave', (e) => {
        e.preventDefault();
        uploadBox.classList.remove('dragover');
      });
      uploadBox.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadBox.classList.remove('dragover');
        const file = e.dataTransfer?.files[0]; // Добавлена проверка на null с использованием ?. оператора
        if (file) {
          // Handle the dropped file here
          console.log('Dropped file:', file);
        }
      });
    }
  }
}
