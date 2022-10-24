import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokepicturesApiService } from '../pokepictures/pokepictures-api.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent implements OnInit {
  constructor(
    private PokePicturesApi: PokepicturesApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  public processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    let url = '';
    this.PokePicturesApi.uploadPokepictureToS3(file).subscribe(
      (response: any) => {
        url = response;
        console.log(url);
      }
    );
    console.log('made it here');
    this.PokePicturesApi.updateDbWithPokepicture(
      url,
      this.route.snapshot.params['id']
    );

    console.log('made it here 2');
  }
}
