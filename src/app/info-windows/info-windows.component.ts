import { Component } from '@angular/core';
declare var bootstrap: any;


@Component({
  selector: 'app-info-windows',
  imports: [],
  templateUrl: './info-windows.component.html',
  styleUrl: './info-windows.component.css'
})
export class InfoWindowsComponent {
  ngAfterViewInit() {
    
    const tabElms = document.querySelectorAll('button[data-bs-toggle="tab"]');
    tabElms.forEach(tabEl => {
      tabEl.addEventListener('click', (event: Event) => {
        const target = (event.target as HTMLElement).getAttribute('data-bs-target');
        const tab = new bootstrap.Tab(tabEl);
        tab.show();
      });
    });
  }
}
