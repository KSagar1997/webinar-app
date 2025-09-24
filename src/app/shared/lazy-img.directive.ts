// src/app/shared/lazy-img.directive.ts
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appLazyImg]',
  standalone: true
})
export class LazyImgDirective implements OnInit {
  @Input('appLazyImg') src!: string;
  private img: HTMLImageElement;
  constructor(private el: ElementRef<HTMLImageElement>) { this.img = this.el.nativeElement; }
  ngOnInit() {
    if ('loading' in HTMLImageElement.prototype) {
      this.img.loading = 'lazy';
      this.img.src = this.src;
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          this.img.src = this.src;
          io.disconnect();
        }
      });
    });
    io.observe(this.img);
  }
}
