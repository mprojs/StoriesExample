import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@shared/guards/auth.guard';
import { CpLayoutComponent } from './components/cp-layout/cp-layout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cp' },
  {
    path: 'cp',
    canActivate: [ AuthGuard ],
    component: CpLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'stories' },
      {
        path: 'stories',
        loadChildren: () => import('./modules/stories/stories.module').then((m) => m.StoriesModule)
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { enableTracing: false }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
