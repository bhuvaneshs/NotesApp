import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    @Input() link: any;
    @Input() item: any;
      public isBadge() {
        return this.link.badge ? true : false;
      }
      public isIcon() {
        return this.link.icon ? true : false;
      }
      public hasClass() {
        return this.item.class ? true : false;
      }
      public isDropdown() {
        return this.item.children ? true : false;
      }
      constructor() { }
}
