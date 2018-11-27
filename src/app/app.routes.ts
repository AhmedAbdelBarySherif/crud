import { Routes } from '@angular/router';

import { DetailsComponent } from './components/details/details.component';
import { NewsComponent } from './components/news/news.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { VideosComponent } from './components/videos/videos.component';
import { ContentComponent } from './components/content/content.component';

export const routes: Routes = [
    {path: '', component: ContentComponent},
    {path: 'details/:title', component: DetailsComponent},
    {path: 'home', component: ContentComponent},
    {path: 'news', component: NewsComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: 'videos', component: VideosComponent},
    {path: '**', component: ContentComponent}
]; 