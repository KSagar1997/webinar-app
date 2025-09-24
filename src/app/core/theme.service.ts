// src/app/core/theme.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private current: 'light' | 'dark' = 'light';
  constructor() {
    const saved = localStorage.getItem('theme') as ('light'|'dark') | null;
    this.setTheme(saved ?? 'light');
  }
  setTheme(theme: 'light' | 'dark') {
    this.current = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
  toggle() {
    this.setTheme(this.current === 'light' ? 'dark' : 'light');
  }
  getTheme() { return this.current; }
}
