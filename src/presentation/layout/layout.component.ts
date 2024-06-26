import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from '../../app/app.routes';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ThemeService } from '../../data/base/services/theme-service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatSlideToggleModule,
    AsyncPipe,
    RouterLink,
    RouterLinkActive
  ]
})
export class LayoutComponent {
  themeService: ThemeService = inject(ThemeService);

  toggleTheme() {

    this.themeService.updateTheme();
  }
  // private breakpointObserver = inject(BreakpointObserver);
 //rootRoutes = routes.filter(r=>r.path);

  // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  //   .pipe(
  //     map(result => result.matches),
  //     shareReplay()
  //   );
}
