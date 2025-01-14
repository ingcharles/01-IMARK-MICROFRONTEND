import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from '../data/base/services/themes.service';
import { LayoutComponent } from '../presentation/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '01-IMARK-MICROFRONTEND';
  themeService: ThemeService = inject(ThemeService);

  constructor(private ref: ChangeDetectorRef){}
  ngAfterContentChecked(): void {
    this.ref.detectChanges();
  }

}
