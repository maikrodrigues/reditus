import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-page-upload',
  templateUrl: './page-upload.component.html',
  styleUrls: ['./page-upload.component.scss'],
})
export class PageUploadComponent implements OnInit {
  isActive = true;
  imageUrl!: File ;
  constructor(private route: ActivatedRoute, private sharedService: SharedService) {}
  ngOnInit(): void {
    // Obtenha a URL da imagem do estado da rota
    // const temporaryData = this.sharedService.getTemporaryData();
    // this.imageUrl = temporaryData?.file || null;
  }
}
