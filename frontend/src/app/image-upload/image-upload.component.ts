import { Component, OnInit } from '@angular/core';
import { PokepicturesApiService } from '../pokepictures/pokepictures-api.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent implements OnInit {
  constructor(private PokePicturesApi: PokepicturesApiService) {}

  ngOnInit(): void {}

  public processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    this.PokePicturesApi.uploadPokepicture(file).subscribe((data) => {
      console.log(data);
    });
  }
}
