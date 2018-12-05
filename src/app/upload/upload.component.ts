import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  endpoint: string = 'https://qa-hr.caerusconnections.io/recruiters/ce8b72c3-69d2-4885-8705-9f6e4a6c40ea/image';
  selectedFile = null;

  fileSelected(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post(this.endpoint, fd).subscribe(res => {
      console.log(res)
    })
  }

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

}
