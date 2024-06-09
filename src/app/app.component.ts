import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IgxIconButtonDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleDirective, IgxIconComponent, RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
