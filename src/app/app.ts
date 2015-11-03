import {
  bind,
  provide,
  bootstrap,
  Component,
  Inject,
  ElementRef,
  OnInit
} from 'angular2/angular2';
import {
  ROUTER_PROVIDERS,
  ROUTER_PRIMARY_COMPONENT,
  ROUTER_DIRECTIVES,
  RouteConfig,
  LocationStrategy,
  HashLocationStrategy
} from 'angular2/router';

@Component({
  selector: 'home',
  template: `<p>Home</p>`
})
class HomeComponent { }

@Component({
  selector: 'venue',
  template: `<p>Venue</p>`
})
class VenueComponent { }

@Component({
  selector: 'speakers',
  template: `<p>Speakers</p>`
})
class SpeakersComponent { }

@Component({
  selector: 'schedule',
  template: `<p>Schedule</p>`
})
class ScheduleComponent { }

@Component({
  selector: 'community',
  template: `<p>Community</p>`
})
class CommunityComponent { }

@Component({
  selector: 'devfest-2015',
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
  ],
  template: `
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <span class="mdl-layout-title">GDG Oslo DevFest 2015</span>
          <!-- Add spacer, to align navigation to the right -->
          <div class="mdl-layout-spacer"></div>
          <!-- Navigation. We hide it in small screens. -->
          <nav class="mdl-navigation">
            <a class="mdl-navigation__link" [router-link]="['/Home']">Home</a>
            <a class="mdl-navigation__link" [router-link]="['/Venue']">Venue</a>
            <a class="mdl-navigation__link" [router-link]="['/Speakers']">Speakers</a>
            <a class="mdl-navigation__link" [router-link]="['/Schedule']">Schedule</a>
            <a class="mdl-navigation__link" [router-link]="['/Community']">Community</a>
          </nav>
        </div>
      </header>
      <div class="mdl-layout__drawer">
        <span class="mdl-layout-title">GDG Oslo DevFest 2015</span>
        <nav class="mdl-navigation">
          <a class="mdl-navigation__link" [router-link]="['/Home']">Home</a>
            <a class="mdl-navigation__link" [router-link]="['/Venue']">Venue</a>
            <a class="mdl-navigation__link" [router-link]="['/Speakers']">Speakers</a>
            <a class="mdl-navigation__link" [router-link]="['/Schedule']">Schedule</a>
            <a class="mdl-navigation__link" [router-link]="['/Community']">Community</a>
        </nav>
      </div>
      <main class="mdl-layout__content">
        <div class="page-content">
          <router-outlet></router-outlet>
        </div>
      </main>
    </div>
  `
})
@RouteConfig([
  {path: '/', component: HomeComponent, as: 'Home'},
  {path: '/venue', component: VenueComponent, as: 'Venue'},
  {path: '/speakers', component: SpeakersComponent, as: 'Speakers'},
  {path: '/schedule', component: ScheduleComponent, as: 'Schedule'},
  {path: '/community', component: CommunityComponent, as: 'Community'}
])
class AppComponent implements OnInit {
  private elementRef;
  constructor(@Inject(ElementRef) elementRef: ElementRef) {
    this.elementRef = elementRef;
  }
  onInit() {
    window.componentHandler.upgradeElement(this.elementRef.nativeElement.firstElementChild);
  }
}

bootstrap(AppComponent);