import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageViewComponent } from './pages/image-view/image-view.component';
import { PageUploadComponent } from './pages/page-upload/page-upload.component';
import { ImageTemporaryComponent } from './ui/image-temporary/image-temporary.component';

const routes: Routes = [
  { path: '', component: ImageViewComponent },
  { path: 'upload', component: PageUploadComponent },
  { path: 'image', component: ImageTemporaryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
