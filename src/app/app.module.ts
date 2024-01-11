import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageComponent } from './ui/image/image.component';
import { LogoComponent } from './ui/logo/logo.component';
import { UploadComponent } from './ui/upload/upload.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageUploadComponent } from './pages/page-upload/page-upload.component';
import { InputComponent } from './ui/input/input.component';
import { ImageViewComponent } from './pages/image-view/image-view.component';
import { ImageTemporaryComponent } from './ui/image-temporary/image-temporary.component';
import { SaveComponent } from './ui/save/save.component';
import { SaveService } from './service/save.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './ui/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    LogoComponent,
    UploadComponent,
    PageUploadComponent,
    ImageViewComponent,
    InputComponent,
    ImageTemporaryComponent,
    SaveComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SaveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
