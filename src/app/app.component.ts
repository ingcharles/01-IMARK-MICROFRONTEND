import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from '../presentation/layout/layout.component';
import { ThemeService } from '../data/base/services/theme-service';
import { CommonModule } from '@angular/common';

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
}
