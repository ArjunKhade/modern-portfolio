import"./chunk-zSsmmLLa.js";import{En as mu,Et as Uv,It as Zp,Jn as tv,K as Mp,O as HI,Ot as VI,Pn as py,Q as OE,Rn as ru,Sn as kp,T as GI,V as Lc,Y as Np,cr as yy,f as Bp,gn as kI,kn as nu,lt as Qp,m as Bv,nt as PD,on as hi,or as yD,pr as zs,pt as Rc,rn as gu,rt as PI,ur as zI,x as FI,yt as Sp}from"./chunk-C5GIxfrr.js";import{i as ts,s as ce$1,t as $c}from"./main-63EQHPIM.js";import{l as pn,o as je,r as _n,t as Lt}from"./chunk-B0VuVsaS.js";var H=[{id:`custom-directives`,icon:`🎯`,title:`Custom Directives`,badge:`Directives`,items:[{heading:`Overview`,content:[`Directives attach custom behavior or manipulate the DOM of elements in your Angular applications.`]},{heading:`Types of Directives`,content:[],table:{headers:[`Type`,`Purpose`,`Example`],rows:[[`<strong>Component</strong>`,`Directive with an inline or external template`,`<code>&lt;app-user-card&gt;</code>`],[`<strong>Structural</strong>`,`Adds, removes, or manipulates DOM elements`,`<code>*ngIf</code>, <code>*ngFor</code>, custom <code>*appIf</code>`],[`<strong>Attribute</strong>`,`Changes the appearance or behavior of an existing element`,`<code>[ngClass]</code>, <code>[appHighlight]</code>`]]}},{heading:`Attribute Directive (Class-based vs Modern Standalone)`,content:[`<strong>Standalone Attribute Directive (Angular 15+ Recommended)</strong>`,`<strong>Usage in HTML:</strong>`],codeBlocks:[{language:`typescript`,code:`import { Directive, ElementRef, HostListener, Input, inject } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  private el = inject(ElementRef);

  @Input('appHighlight') highlightColor: string = 'yellow';
  @Input() defaultColor: string = 'transparent';

  @HostListener('mouseenter') onMouseEnter() {
    this.setColor(this.highlightColor || 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setColor(this.defaultColor);
  }

  private setColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}`},{language:`html`,code:`<p [appHighlight]="'lightblue'" [defaultColor]="'#f0f0f0'">Hover over this text!</p>`}]},{heading:`Structural Directive (Custom *appIf)`,content:[`Structural directives interact with <code>TemplateRef</code> and <code>ViewContainerRef</code> to conditionally render content.`,`<strong>Usage:</strong>`],codeBlocks:[{language:`typescript`,code:`import { Directive, Input, TemplateRef, ViewContainerRef, inject } from '@angular/core';

@Directive({
  selector: '[appIf]',
  standalone: true
})
export class AppIfDirective {
  private templateRef = inject(TemplateRef);
  private vcr = inject(ViewContainerRef);
  private hasView = false;

  @Input() set appIf(condition: boolean) {
    if (condition && !this.hasView) {
      this.vcr.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!condition && this.hasView) {
      this.vcr.clear();
      this.hasView = false;
    }
  }
}`},{language:`html`,code:`<div *appIf="isLoggedIn">Welcome back, User!</div>`}]},{heading:`Common HostListener Patterns`,content:[],codeBlocks:[{language:`typescript`,code:`// Restrict input to digits only
@HostListener('input', ['$event'])
onInput(event: Event) {
  const input = event.target as HTMLInputElement;
  input.value = input.value.replace(/[^0-9]/g, '');
}

// Click outside detection for dropdowns/modals
@HostListener('document:click', ['$event.target'])
onClickOutside(target: HTMLElement) {
  if (!this.el.nativeElement.contains(target)) {
    this.closeMenu.emit();
  }
}`}]}]},{id:`custom-pipes`,icon:`🔄`,title:`Custom Pipes`,badge:`Pipes`,items:[{heading:`Overview`,content:[`Pipes transform display values directly inside your templates without mutating the source data.`]},{heading:`Pure vs Impure Pipes`,content:[],table:{headers:[`Feature`,`Pure Pipe (<code>pure: true</code>, Default)`,`Impure Pipe (<code>pure: false</code>)`],rows:[[`<strong>Execution Trigger</strong>`,`Runs <strong>only</strong> when primitive input value changes or object/array reference changes`,`Runs on <strong>every</strong> Change Detection cycle (keyboard, mouse move, timer)`],[`<strong>Performance</strong>`,`High performance &amp; memoized`,`Potentially costly; must be lightweight`],[`<strong>Use Case</strong>`,`Formatting dates, currency, text transforms, filtering immutable arrays`,`Filtering mutable arrays (e.g., array mutations via <code>.push()</code>)`]]}},{heading:`Custom Pipe Example (Truncate with Options)`,content:[`<strong>Usage:</strong>`],codeBlocks:[{language:`typescript`,code:`import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {
  transform(value: string | null | undefined, limit: number = 30, trail: string = '...'): string {
    if (!value) return '';
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}`},{language:`html`,code:`<p>{{ product.description | truncate:50:'… Read More' }}</p>`}]}]},{id:`route-guards`,icon:`🛡️`,title:`Route Guards`,badge:`Routing`,items:[{heading:`Overview`,content:[`Route guards control navigation flow: authenticating access, prompting users about unsaved form data, or checking feature flags.`]},{heading:`Guard Types Summary`,content:[],table:{headers:[`Guard`,`Interface / Type`,`Purpose`],rows:[[`<strong>CanActivate</strong>`,`<code>CanActivateFn</code>`,`Blocks navigation to a route (e.g. Auth check)`],[`<strong>CanActivateChild</strong>`,`<code>CanActivateChildFn</code>`,`Protects child sub-routes`],[`<strong>CanDeactivate</strong>`,`<code>CanDeactivateFn&lt;T&gt;</code>`,`Prompts user before leaving with unsaved state`],[`<strong>CanMatch</strong>`,`<code>CanMatchFn</code>`,`Replaces <code>CanLoad</code>; controls if a route pattern matches (feature toggles)`]]}},{heading:`Modern Functional Guards (Angular 15+)`,content:[`<strong>1. <code>canActivate</code> (Authentication Guard)</strong>`,`<strong>2. <code>canDeactivate</code> (Unsaved Changes Guard)</strong>`,`<strong>3. Route Configuration</strong>`],codeBlocks:[{language:`typescript`,code:`import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.isAuthenticated()) {
    return true;
  }

  // Redirect to login with returnUrl
  return router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } });
};`},{language:`typescript`,code:`import { CanDeactivateFn } from '@angular/router';

export interface HasUnsavedChanges {
  hasUnsavedChanges(): boolean;
}

export const unsavedChangesGuard: CanDeactivateFn<HasUnsavedChanges> = (component) => {
  if (component.hasUnsavedChanges && component.hasUnsavedChanges()) {
    return confirm('You have unsaved changes. Are you sure you want to discard them?');
  }
  return true;
};`},{language:`typescript`,code:`export const routes: Routes = [
  {
    path: 'admin',
    loadComponent: () => import('./admin/admin.component').then(m => m.AdminComponent),
    canActivate: [authGuard]
  },
  {
    path: 'editor',
    loadComponent: () => import('./editor/editor.component').then(m => m.EditorComponent),
    canDeactivate: [unsavedChangesGuard]
  }
];`}]}]},{id:`route-resolvers`,icon:`⚡`,title:`Route Resolvers`,badge:`Routing`,items:[{heading:`Overview`,content:[`Resolvers fetch required API data <strong>before</strong> the destination route activates, eliminating blank screens and in-component loading spinners.`,`<strong>Route Registration &amp; Component Access:</strong>`],codeBlocks:[{language:`typescript`,code:`import { inject } from '@angular/core';
import { ResolveFn, ActivatedRouteSnapshot } from '@angular/router';
import { UserService, UserProfile } from '../services/user.service';

export const userProfileResolver: ResolveFn<UserProfile> = (route: ActivatedRouteSnapshot) => {
  const userId = route.paramMap.get('id')!;
  return inject(UserService).getUserById(userId);
};`},{language:`typescript`,code:`// Route:
{
  path: 'user/:id',
  component: UserProfileComponent,
  resolve: { profile: userProfileResolver }
}

// In UserProfileComponent:
export class UserProfileComponent implements OnInit {
  private route = inject(ActivatedRoute);
  userProfile!: UserProfile;

  ngOnInit() {
    this.userProfile = this.route.snapshot.data['profile'];
    
    // Or reactively to respond to parameter changes:
    this.route.data.subscribe(data => {
      this.userProfile = data['profile'];
    });
  }
}`}]}]},{id:`component-lifecycle-modern-cleanup`,icon:`♻️`,title:`Component Lifecycle & Modern Cleanup`,badge:`Architecture`,items:[{heading:`Overview`,content:[`Angular manages the lifecycle of components from creation, change detection, view rendering, through destruction.`],codeBlocks:[{language:`typescript`,code:`       \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
       \u2502      constructor       \u2502 (Dependency injection only; no DOM / API calls)
       \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
                   \u25BC
       \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
       \u2502      ngOnChanges       \u2502 (Called whenever @Input() bindings change)
       \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
                   \u25BC
       \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
       \u2502        ngOnInit        \u2502 (Component initialized; prime location for HTTP requests)
       \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
                   \u25BC
       \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
       \u2502       ngDoCheck        \u2502 (Custom change detection check)
       \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
                   \u25BC
       \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
       \u2502   ngAfterContentInit   \u2502 (Projected content <ng-content> initialized)
       \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
                   \u25BC
       \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
       \u2502   ngAfterViewInit      \u2502 (Component template and child views initialized)
       \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
                   \u25BC
       \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
       \u2502      ngOnDestroy       \u2502 (Cleanup: unsubscribe observables, stop timers)
       \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518`}]},{heading:`Modern Subscription Cleanup (DestroyRef & takeUntilDestroyed)`,content:[`Instead of writing boilerplate <code>ngOnDestroy</code> with <code>Subject</code> and <code>takeUntil</code>, Angular 16+ provides <code>takeUntilDestroyed</code>:`],codeBlocks:[{language:`typescript`,code:`import { Component, OnInit, inject, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

@Component({
  selector: 'app-timer',
  standalone: true,
  template: \`<p>Seconds: {{ seconds }}</p>\`
})
export class TimerComponent implements OnInit {
  seconds = 0;
  private destroyRef = inject(DestroyRef); // Injectable anywhere!

  ngOnInit() {
    // Automatically unsubscribes when this component is destroyed:
    interval(1000)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(val => (this.seconds = val));

    // Register custom teardown logic
    this.destroyRef.onDestroy(() => {
      console.log('TimerComponent cleaned up successfully!');
    });
  }
}`}]}]},{id:`dependency-injection-di-architecture-how-di-works`,icon:`💉`,title:`Dependency Injection (DI) Architecture & How DI Works`,badge:`Architecture`,items:[{heading:`Overview`,content:[`Dependency Injection (DI) is a core design pattern in Angular where a class requests dependencies from external sources rather than creating them directly with <code>new</code>.`]},{heading:`1. How DI Works Under the Hood`,content:[`Angular&#39;s DI system consists of 4 foundational building blocks:`,`• <strong>Consumer:</strong> The component, directive, pipe, or service that requires a dependency.`,`• <strong>Token:</strong> The unique lookup key (usually a TypeScript class type like <code>UserService</code> or an <code>InjectionToken&lt;T&gt;</code>).`,`• <strong>Provider:</strong> A registration that tells the Injector <em>how</em> to instantiate and configure the dependency.`,`• <strong>Injector:</strong> The container holding the token-to-instance registry that resolves and caches instances.`],codeBlocks:[{language:`typescript`,code:`\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510         1. Requests Token         \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502   Consumer   \u2502 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25BA \u2502   Injector   \u2502
\u2502 (Component / \u2502                                   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
\u2502   Service)   \u2502 \u25C4\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518         4. Returns Instance
                                  \u25B2
                                  \u2502 2. Finds Provider Recipe
                                  \u25BC
                         \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
                         \u2502    Provider     \u2502 \u2500\u2500\u25BA 3. Instantiates Dependency
                         \u2502 (Recipe / Value)\u2502
                         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518`}]},{heading:`2. The Injector Hierarchy & Lookup Resolution Algorithm`,content:[`Angular organizes injectors into a <strong>two-tiered hierarchical tree</strong>:`,`• <strong>Environment/Module Injector Tree:</strong> Root (<code>providedIn: &#39;root&#39;</code>) -&gt; Platform -&gt; NullInjector.`,`• <strong>Element/Component Injector Tree:</strong> Built implicitly for each DOM element with directives/components (<code>providers: [...]</code> or <code>viewProviders: [...]</code>).`,`<strong>Lookup Algorithm (Bubble-Up Resolution):</strong>`,`When a component requests a dependency:`,`• Angular starts searching at the <strong>Element Injector</strong> of the current component.`,`• If not found, it traverses upward through the <strong>parent Element Injectors</strong>.`,`• If not found at the root component element, it switches to the <strong>Environment Injector</strong> (Route/Module scope).`,`• Next, it checks the <strong>Root Injector</strong> (<code>providedIn: &#39;root&#39;</code>).`,`• Then the <strong>Platform Injector</strong> (shared across applications, e.g. <code>DomSanitizer</code>).`,`• If still not found, it reaches the <strong>NullInjector</strong>, which throws:<br><code>NullInjectorError: No provider for Token!</code>.`],codeBlocks:[{language:`typescript`,code:`[Child Component Element Injector]
  \u2502 (Not found? Bubble up)
  \u25BC
[Parent Component Element Injector]
  \u2502 (Not found? Bubble up)
  \u25BC
[Root Component Element Injector]
  \u2502 (Switch to Environment Hierarchy)
  \u25BC
[Environment / Route Injector]
  \u2502
  \u25BC
[Root Injector (providedIn: 'root')] \u2500\u2500\u25BA (Singleton across app)
  \u2502
  \u25BC
[Platform Injector]
  \u2502
  \u25BC
[NullInjector] \u2500\u2500\u25BA Throws NullInjectorError!`}]},{heading:`3. Provider Recipes (provide: ...)`,content:[`You can customize how Angular constructs any token using provider configuration objects:`],codeBlocks:[{language:`typescript`,code:`export const APP_PROVIDERS = [
  // 1. useClass: Creates an instance of a specified class
  { provide: LoggerService, useClass: BetterLoggerService },

  // 2. useValue: Injects a static value, constant, or configuration object
  { provide: API_URL_TOKEN, useValue: 'https://api.myapp.com/v1' },

  // 3. useExisting: Creates an alias pointing to an existing singleton
  { provide: OldLogger, useExisting: LoggerService },

  // 4. useFactory: Dynamic creation with custom initialization logic and dependencies
  {
    provide: AuthService,
    useFactory: (http: HttpClient, config: AppConfig) => {
      return config.isMockAuth ? new MockAuthService() : new RealAuthService(http);
    },
    deps: [HttpClient, AppConfigToken]
  }
];`}]},{heading:`4. InjectionToken<T> for Non-Class Dependencies`,content:[`TypeScript interfaces and primitives do not exist at JavaScript runtime, so they cannot be used as injection tokens. Use <code>InjectionToken&lt;T&gt;</code>:`],codeBlocks:[{language:`typescript`,code:`import { InjectionToken, inject } from '@angular/core';

export interface AppConfig {
  apiUrl: string;
  retryAttempts: number;
}

// 1. Create the token
export const APP_CONFIG = new InjectionToken<AppConfig>('app.config', {
  providedIn: 'root',
  factory: () => ({ apiUrl: 'https://api.example.com', retryAttempts: 3 })
});

// 2. Inject using modern inject() or @Inject()
@Component({...})
export class UserComponent {
  private config = inject(APP_CONFIG);
}`}]},{heading:`5. Resolution Modifiers (@Optional, @Self, @SkipSelf, @Host)`,content:[`Modifiers control where the injector starts and stops its lookup:`],codeBlocks:[{language:`typescript`,code:`constructor(
  // @Optional: Does not throw error if missing; injects null instead
  @Optional() private logger?: LoggerService,

  // @Self: Only searches current element's injector; does NOT bubble up
  @Self() private validator?: CustomValidatorDirective,

  // @SkipSelf: Skips current element and starts searching from the parent element
  @SkipSelf() private parentService?: ParentService,

  // @Host: Stops searching when reaching the host component that rendered the template
  @Host() private formGroup?: FormGroupDirective
) {}`}]},{heading:`6. Constructor Injection vs Modern inject() Function`,content:[`In Angular 14+, the <code>inject()</code> function replaces constructor boilerplate and works in functions, factory providers, and functional route guards:`],codeBlocks:[{language:`typescript`,code:`@Component({...})
export class ProductListComponent {
  // Modern inject(): Clean, typed, works inside functional guards and initialization logic
  private cartService = inject(CartService);
  private router = inject(Router);
  private config = inject(APP_CONFIG);
}`}]}]},{id:`change-detection-angular-performance-optimization`,icon:`🚀`,title:`Change Detection & Angular Performance Optimization`,badge:`Performance`,items:[{heading:`Overview`,content:[`Ensuring peak performance and 60 FPS in Angular applications requires understanding how change detection works and implementing modern optimization patterns.`]},{heading:`1. Change Detection: Default vs OnPush`,content:[`<strong>OnPush in Action with Immutable Data:</strong>`,`<blockquote><strong>Rule for OnPush:</strong> Always pass <strong>new object references</strong> (immutable updates using spread <code>{ ...user, role: &#39;Admin&#39; }</code>) to trigger OnPush input detection! Mutating a property directly (<code>user.role = &#39;Admin&#39;</code>) will <strong>not</strong> trigger change detection.</blockquote>`],codeBlocks:[{language:`typescript`,code:`@Component({
  selector: 'app-user-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: \`<div>{{ user.name }} ({{ user.role }})</div>\`
})
export class UserCardComponent {
  @Input({ required: true }) user!: { id: string; name: string; role: string };
}`}],table:{headers:[`Feature`,`<code>ChangeDetectionStrategy.Default</code>`,`<code>ChangeDetectionStrategy.OnPush</code>`],rows:[[`<strong>Tree Traversal</strong>`,`Checks <strong>all</strong> components in the tree from root to leaf on every async event (click, timer, HTTP)`,`Skips component sub-tree unless explicitly marked dirty`],[`<strong>When it runs</strong>`,`Any Zone.js event`,`1. <code>@Input()</code> reference changes (<code>prev !== curr</code>)<br>2. Event originating from component/children<br>3. <code>async</code> pipe emits<br>4. Signal updates (v16+)<br>5. Manual <code>ChangeDetectorRef</code> call`],[`<strong>Performance</strong>`,`Slower in large applications`,`Extremely fast, predictable &amp; optimal`]]}},{heading:`2. trackBy in *ngFor vs Mandatory track in @for`,content:[`<strong>The Problem:</strong>`,`Without tracking, whenever an array changes (items added, reordered, or refreshed from API), Angular destroys and recreates <strong>all</strong> DOM elements in the list! This causes UI flickering, loss of input focus, scroll jumps, and heavy rendering overhead.`,`<strong>Legacy <code>*ngFor</code> with <code>trackBy</code>:</strong>`,`<strong>Modern Angular 17+ <code>@for</code> (Mandatory <code>track</code> Expression):</strong>`,`Angular 17 made tracking <strong>mandatory</strong>, eliminating <code>trackBy</code> boilerplate and performing up to <strong>90% faster</strong>:`],codeBlocks:[{language:`typescript`,code:`@Component({
  template: \`
    <li *ngFor="let item of items; trackBy: trackById">
      {{ item.name }}
    </li>
  \`
})
export class ListComponent {
  items = [{ id: 1, name: 'Laptop' }, { id: 2, name: 'Phone' }];

  trackById(index: number, item: { id: number; name: string }): number {
    return item.id;
  }
}`},{language:`html`,code:`<ul>
  @for (item of items; track item.id; let idx = $index) {
    <li>#{{ idx + 1 }}: {{ item.name }}</li>
  } @empty {
    <li>No items available.</li>
  }
</ul>`}]},{heading:`3. Template Performance: Pure Pipes vs Calling Methods in Templates`,content:[`\u2022 \u274C <strong>Anti-Pattern (Method in template):</strong>
<code>html &lt;!-- BAD: calculateDiscount() runs on EVERY SINGLE Change Detection tick! --&gt; &lt;p&gt;{{ calculateDiscount(product.price) }}&lt;/p&gt; </code>`,`\u2022 \u2705 <strong>Best Practice (Pure Pipe):</strong> Pure pipes are memoized; they only re-execute when their input primitive or reference changes:
<code>html &lt;!-- GOOD: Only runs when product.price changes --&gt; &lt;p&gt;{{ product.price | discount }}&lt;/p&gt; </code>`]},{heading:`4. Running Outside Angular (NgZone.runOutsideAngular)`,content:[`For high-frequency events (mouse move, window scroll, canvas rendering, WebSockets, D3 animations), Zone.js triggers change detection on every event. Run them outside Angular:`],codeBlocks:[{language:`typescript`,code:`import { Component, ElementRef, OnInit, inject, NgZone } from '@angular/core';

@Component({
  selector: 'app-canvas-animation',
  standalone: true,
  template: \`<canvas #canvas></canvas>\`
})
export class CanvasAnimationComponent implements OnInit {
  private ngZone = inject(NgZone);
  private el = inject(ElementRef);

  ngOnInit() {
    // Run high-frequency loop completely outside Angular's zone:
    this.ngZone.runOutsideAngular(() => {
      this.el.nativeElement.addEventListener('mousemove', (e: MouseEvent) => {
        // Does NOT trigger Angular change detection!
        this.renderParticles(e.clientX, e.clientY);
      });
    });
  }

  private renderParticles(x: number, y: number) { /* Heavy canvas calculations */ }
}`}]},{heading:`5. Image Optimization with NgOptimizedImage`,content:[`The <code>NgOptimizedImage</code> directive enforces web performance best practices (LCP optimization, automatic <code>srcset</code>, layout shift prevention):`],codeBlocks:[{language:`html`,code:`<!-- Automatically lazy-loaded, responsive, prevents Cumulative Layout Shift (CLS) -->
<img [ngSrc]="product.imageUrl" width="400" height="300" alt="Product" />

<!-- For Largest Contentful Paint (Hero/Banner): Set priority to preload immediately -->
<img [ngSrc]="heroBanner" width="1200" height="600" priority alt="Hero Banner" />`}]},{heading:`6. Comprehensive Performance Optimization Checklist`,content:[],table:{headers:[`Technique`,`How it Improves Performance`],rows:[[`<strong><code>OnPush</code> Strategy</strong>`,`Skips change detection for entire component sub-trees unless inputs change`],[`<strong><code>track</code> in <code>@for</code></strong>`,`Diffing lists by unique ID prevents recreating unaffected DOM nodes`],[`<strong>Pure Pipes</strong>`,`Memoizes calculation results; prevents function execution on every CD cycle`],[`<strong><code>@defer</code> Blocks</strong>`,`Lazy-loads JS chunks and template markup only when scrolled into view`],[`<strong>Route-level Lazy Loading</strong>`,`<code>loadComponent: () =&gt; import(...)</code> splits code into small on-demand bundles`],[`<strong><code>NgOptimizedImage</code></strong>`,`Preloads LCP images, lazy-loads off-screen images, enforces dimensions`],[`<strong><code>NgZone.runOutsideAngular</code></strong>`,`Bypasses Zone.js change detection for rapid events (scroll, mousemove)`],[`<strong><code>takeUntilDestroyed</code></strong>`,`Prevents memory leaks by automatically tearing down unneeded subscriptions`]]}}]},{id:`content-projection-templates`,icon:`📦`,title:`Content Projection & Templates`,badge:`Templates`,items:[{heading:`Overview`,content:[`Techniques for building reusable, flexible components.`]},{heading:`1. ng-content (Multi-Slot Content Projection)`,content:[`Allows consumer components to pass HTML content into specific slots inside child components.`,`<strong>Consumer Usage:</strong>`],codeBlocks:[{language:`html`,code:`<!-- Card Component Template (card.component.html) -->
<div class="card">
  <div class="card-header">
    <ng-content select="[card-title]"></ng-content>
  </div>
  <div class="card-body">
    <ng-content select="[card-body]"></ng-content>
  </div>
  <div class="card-footer">
    <ng-content select="[card-footer]"></ng-content>
  </div>
</div>`},{language:`html`,code:`<app-card>
  <h2 card-title>User Profile</h2>
  <p card-body>Arjun Khade - Full Stack Developer</p>
  <button card-footer>Save</button>
</app-card>`}]},{heading:`2. ng-container`,content:[`An invisible grouping tag. Applies structural directives without adding unnecessary wrapper elements (like extra <code>&lt;div&gt;</code>s) to the DOM.`],codeBlocks:[{language:`html`,code:`<ng-container *ngIf="user">
  <p>Name: {{ user.name }}</p>
  <p>Role: {{ user.role }}</p>
</ng-container>`}]},{heading:`3. ng-template & ngTemplateOutlet`,content:[`<code>ng-template</code> holds markup that is never rendered by default. <code>ngTemplateOutlet</code> instantiates and dynamically injects templates with custom contexts.`],codeBlocks:[{language:`html`,code:`<!-- Define the template with context variables -->
<ng-template #customItem let-item="item" let-i="index">
  <li class="item">{{ i + 1 }}. {{ item.name }} ({{ item.price | currency }})</li>
</ng-template>

<!-- Render template dynamically using ngTemplateOutlet -->
<ul>
  @for (prod of products; track prod.id; let idx = $index) {
    <ng-container 
      *ngTemplateOutlet="customItem; context: { item: prod, index: idx }">
    </ng-container>
  }
</ul>`}]}]},{id:`modern-control-flow-angular-17`,icon:`🔀`,title:`Modern Control Flow (Angular 17+)`,badge:`Angular 17+`,items:[{heading:`Overview`,content:[`Angular 17 introduced declarative built-in control flow syntax replacing legacy <code>*ngIf</code>, <code>*ngFor</code>, and <code>*ngSwitch</code>.`]},{heading:`1. @if / @else if / @else`,content:[],codeBlocks:[{language:`html`,code:`@if (user.role === 'admin') {
  <app-admin-panel />
} @else if (user.role === 'editor') {
  <app-editor-panel />
} @else {
  <p>Standard Viewer Access</p>
}`}]},{heading:`2. @for with required track and @empty`,content:[`The <code>track</code> expression is mandatory and provides performant list diffing without requiring <code>trackBy</code> boilerplate.`],codeBlocks:[{language:`html`,code:`<ul>
  @for (user of users; track user.id; let idx = $index, count = $count) {
    <li>#{{ idx + 1 }}/{{ count }}: {{ user.name }}</li>
  } @empty {
    <li class="no-records">No users found.</li>
  }
</ul>`}]},{heading:`3. @switch / @case / @default`,content:[],codeBlocks:[{language:`html`,code:`@switch (notification.type) {
  @case ('SUCCESS') { <span class="badge green">Success!</span> }
  @case ('WARNING') { <span class="badge yellow">Warning</span> }
  @case ('ERROR')   { <span class="badge red">Critical Error</span> }
  @default          { <span class="badge gray">Info</span> }
}`}]},{heading:`4. @defer (Deferred / Lazy Loading Blocks)`,content:[`Enables lazy-loading parts of the template (and their JS chunks) on demand based on runtime triggers.`,`<strong>Common Triggers:</strong> <code>on viewport</code>, <code>on idle</code>, <code>on hover(triggerBtn)</code>, <code>on interaction(btn)</code>, <code>when isLoaded</code>.`],codeBlocks:[{language:`html`,code:`@defer (on viewport; prefetch on idle) {
  <!-- This component chunk only downloads when scrolled into view! -->
  <app-heavy-analytics-chart [data]="chartData" />
} @placeholder (minimum 300ms) {
  <div class="skeleton-placeholder">Scroll down to view chart...</div>
} @loading (minimum 500ms) {
  <div class="spinner">Loading chart package...</div>
} @error {
  <p class="error">Failed to load chart component.</p>
}`}]}]},{id:`modern-angular-features-v14-v18-angular-signals`,icon:`📡`,title:`Modern Angular Features (v14 – v18+) & Angular Signals`,badge:`Signals`,items:[{heading:`Overview`,content:[`Angular has undergone a complete renaissance from Angular 14 through Angular 18+, transitioning to a lightweight, standalone-first, and reactivity-driven framework.`]},{heading:`1. Complete Catalog of Modern Angular Features`,content:[],table:{headers:[`Feature`,`Introduced`,`What it Replaced / Solved`],rows:[[`<strong>Standalone Components</strong>`,`Angular 14/15`,`Eliminated <code>NgModule</code> boilerplate; components directly import dependencies`],[`<strong><code>inject()</code> Function</strong>`,`Angular 14`,`Replaces constructor injection; usable in functions, factory providers, and guards`],[`<strong>Functional Guards &amp; Resolvers</strong>`,`Angular 15`,`Replaced class-based <code>CanActivate</code> and <code>Resolve</code> interfaces with lightweight functions`],[`<strong>Directive Composition API</strong>`,`Angular 15`,`Allows components to inherit host behaviors from other directives without class inheritance`],[`<strong><code>DestroyRef</code> &amp; <code>takeUntilDestroyed</code></strong>`,`Angular 16`,`Replaces repetitive <code>ngOnDestroy</code> + <code>Subject</code> unsubscribe boilerplate`],[`<strong>Angular Signals</strong>`,`Angular 16+`,`Introduced granular, fine-grained reactivity with zero Zone.js overhead`],[`<strong>Non-Destructive Hydration</strong>`,`Angular 16/17`,`Reuses server-rendered DOM instead of destroying and re-rendering on client load`],[`<strong>Built-in Control Flow (<code>@if</code>, <code>@for</code>, <code>@switch</code>)</strong>`,`Angular 17`,`Replaces <code>*ngIf</code>, <code>*ngFor</code>, <code>*ngSwitch</code> with performant compiler syntax`],[`<strong>Deferrable Views (<code>@defer</code>)</strong>`,`Angular 17`,`Zero-boilerplate lazy loading of template sections based on triggers`],[`<strong>Vite / esbuild Application Builder</strong>`,`Angular 17`,`Up to 80% faster build times using esbuild/Vite instead of Webpack`],[`<strong>Signal Inputs, Outputs &amp; Models</strong>`,`Angular 17.1+ / 18`,`<code>input()</code>, <code>output()</code>, and <code>model()</code> replacing <code>@Input()</code>, <code>@Output()</code>, two-way binding`],[`<strong>Signal Queries (<code>viewChild</code>, <code>contentChild</code>)</strong>`,`Angular 17.2+ / 18`,`Signals-based DOM/view queries replacing <code>@ViewChild</code>, <code>@ContentChild</code>`],[`<strong>Experimental Zoneless Support</strong>`,`Angular 18`,`<code>provideExperimentalZonelessChangeDetection()</code> removes <code>Zone.js</code> completely!`]]}},{heading:`2. Angular Signals: Fine-Grained Reactivity`,content:[`A <strong>Signal</strong> is a reactive wrapper around a value that notifies consumers whenever that value changes. Unlike RxJS (which is push-based over time) or Zone.js (which dirties entire trees), Signals enable <strong>fine-grained reactivity</strong>: Angular knows <em>precisely</em> where in the template a value changed and updates only that specific DOM node.`,`<strong>Reading a Signal:</strong>`,`A Signal is accessed by calling it as a function: <code>count()</code>.`]},{heading:`3. Types of Signals`,content:[`<strong>1. Writable Signals (<code>signal()</code>)</strong>`,`A signal whose value can be read and updated directly:`,`<strong>2. Computed Signals (<code>computed()</code>)</strong>`,`A read-only signal derived from other signals.`,`• <strong>Memoized:</strong> Recalculates only when one of its source signals changes.`,`• <strong>Lazy:</strong> Calculation is deferred until the computed value is actually read.`,`<strong>3. Effects (<code>effect()</code>)</strong>`,`An operation that runs automatically whenever one or more tracked signals change. Used for side-effects:`,`• Logging / Analytics`,`• Syncing state to <code>localStorage</code>`,`• Custom Canvas or DOM mutations`,`<blockquote><strong>Rule:</strong> Do <strong>not</strong> set other signals inside an <code>effect()</code> unless explicitly necessary (requires <code>{ allowSignalWrites: true }</code>). Use <code>computed()</code> for derived state instead.</blockquote>`],codeBlocks:[{language:`typescript`,code:`import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: \`
    <p>Count: {{ count() }}</p>
    <button (click)="increment()">+1</button>
    <button (click)="reset()">Reset</button>
  \`
})
export class CounterComponent {
  // 1. Declare writable signal with initial value
  count = signal<number>(0);

  increment() {
    // .update(): derives next value from previous value
    this.count.update(prev => prev + 1);
  }

  reset() {
    // .set(): explicitly sets a new value
    this.count.set(0);
  }

  // Expose as readonly to external consumers:
  readonlyCount = this.count.asReadonly();
}`},{language:`typescript`,code:`import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  template: \`
    <p>Subtotal: {{ subtotal() | currency }}</p>
    <p>Tax (10%): {{ tax() | currency }}</p>
    <h3>Total: {{ total() | currency }}</h3>
  \`
})
export class CartSummaryComponent {
  price = signal(100);
  quantity = signal(2);

  // Computed signals:
  subtotal = computed(() => this.price() * this.quantity());
  tax = computed(() => this.subtotal() * 0.10);
  total = computed(() => this.subtotal() + this.tax());
}`},{language:`typescript`,code:`import { Component, signal, effect } from '@angular/core';

@Component({ ... })
export class SettingsComponent {
  theme = signal<'light' | 'dark'>('light');

  constructor() {
    // Effect automatically re-runs whenever theme() changes:
    effect(() => {
      console.log(\`Theme updated to: \${this.theme()}\`);
      localStorage.setItem('user-theme', this.theme());
      document.body.className = this.theme();
    });
  }
}`}]},{heading:`4. Modern Signal-Based Component APIs (Angular 17+ / 18)`,content:[`Replace legacy <code>@Input()</code>, <code>@Output()</code>, and <code>@ViewChild()</code> decorators with functional Signal equivalents:`],codeBlocks:[{language:`typescript`,code:`import { Component, input, output, model, viewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  template: \`
    <input #searchBox placeholder="Search..." />
    <p>User: {{ username() }}</p>
    <button (click)="toggleActive()">Toggle Active</button>
  \`
})
export class UserProfileComponent {
  // 1. Signal Inputs (Replaces @Input)
  username = input.required<string>(); // Mandatory input
  role = input<string>('Guest');       // Optional input with default

  // 2. Signal Model (Two-way binding [(active)]="isActive")
  active = model<boolean>(false);

  // 3. Signal Output (Replaces @Output EventEmitter)
  roleChanged = output<string>();

  // 4. Signal Queries (Replaces @ViewChild)
  searchBox = viewChild<ElementRef<HTMLInputElement>>('searchBox');

  toggleActive() {
    this.active.update(val => !val); // Automatically updates parent binding!
    this.roleChanged.emit(this.role());
  }

  focusSearch() {
    this.searchBox()?.nativeElement.focus();
  }
}`}]},{heading:`5. RxJS Interoperability (toSignal & toObservable)`,content:[`Angular seamlessly bridges RxJS Observables and Signals using <code>@angular/core/rxjs-interop</code>:`],codeBlocks:[{language:`typescript`,code:`import { Component, inject, signal } from '@angular/core';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';

export interface Product { id: number; name: string; }

@Component({
  selector: 'app-products',
  standalone: true,
  template: \`
    <ul>
      @for (prod of products(); track prod.id) {
        <li>{{ prod.name }}</li>
      }
    </ul>
  \`
})
export class ProductComponent {
  private http = inject(HttpClient);

  // 1. toSignal: Converts an Observable into a Signal (auto-subscribes and auto-unsubscribes!)
  products = toSignal(
    this.http.get<Product[]>('/api/products'),
    { initialValue: [] }
  );

  // 2. toObservable: Converts a Signal into an Observable to use RxJS operators:
  searchQuery = signal('laptop');
  searchQuery$ = toObservable(this.searchQuery);

  searchResults$ = this.searchQuery$.pipe(
    switchMap(query => this.http.get<Product[]>(\`/api/search?q=\${query}\`))
  );
}`}]}]},{id:`angular-forms`,icon:`📝`,title:`Angular Forms`,badge:`Forms`,items:[{heading:`Overview`,content:[`Angular provides two distinct paradigms for capturing user input: <strong>Template-Driven</strong> and <strong>Reactive Forms</strong>.`]},{heading:`Template-Driven vs Reactive Forms`,content:[],table:{headers:[`Feature`,`Template-Driven Forms`,`Reactive Forms (Preferred)`],rows:[[`<strong>Setup</strong>`,`<code>FormsModule</code>`,`<code>ReactiveFormsModule</code>`],[`<strong>Source of Truth</strong>`,`HTML Template (<code>[(ngModel)]</code>, <code>ngForm</code>)`,`Component TypeScript model (<code>FormGroup</code>, <code>FormControl</code>)`],[`<strong>Immutability</strong>`,`Mutable state`,`Immutable structured data streams`],[`<strong>Validation</strong>`,`HTML directives (<code>required</code>, <code>minlength</code>)`,`Pure TypeScript functions (<code>Validators.required</code>)`],[`<strong>Scalability</strong>`,`Small, simple forms`,`Complex, dynamic, enterprise-scale forms`]]}},{heading:`Reactive Forms with FormArray & Nested Groups`,content:[],codeBlocks:[{language:`typescript`,code:`import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-form.component.html'
})
export class UserFormComponent {
  private fb = inject(FormBuilder);

  userForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    // FormArray for dynamic list of phone numbers:
    phoneNumbers: this.fb.array([
      this.fb.control('', [Validators.required, Validators.pattern(/^[0-9]{10}$/)])
    ])
  });

  get phoneNumbers(): FormArray {
    return this.userForm.get('phoneNumbers') as FormArray;
  }

  addPhone() {
    this.phoneNumbers.push(this.fb.control('', [Validators.required]));
  }

  removePhone(index: number) {
    this.phoneNumbers.removeAt(index);
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Submitted Data:', this.userForm.value);
    }
  }
}`}]},{heading:`Custom Validators: Synchronous vs Asynchronous`,content:[`<strong>1. Custom Synchronous Validator (No Forbidden Names)</strong>`,`<strong>2. Custom Asynchronous Validator (Check Username Availability via API)</strong>`,`Async validators return <code>Observable&lt;ValidationErrors | null&gt;</code> or <code>Promise&lt;ValidationErrors | null&gt;</code>.`],codeBlocks:[{language:`typescript`,code:`import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function forbiddenNameValidator(forbiddenName: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isForbidden = forbiddenName.test(control.value);
    return isForbidden ? { forbiddenName: { value: control.value } } : null;
  };
}`},{language:`typescript`,code:`import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, of, timer } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UserService } from '../services/user.service';

export function usernameAvailableValidator(userService: UserService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    if (!control.value) return of(null);

    // Debounce user keystrokes by 400ms before calling backend API:
    return timer(400).pipe(
      switchMap(() => userService.checkUsernameExists(control.value)),
      map(isTaken => (isTaken ? { usernameTaken: true } : null)),
      catchError(() => of(null))
    );
  };
}`}]}]},{id:`observables-subjects-state-streams`,icon:`🌊`,title:`Observables, Subjects & State Streams`,badge:`RxJS Streams`,items:[{heading:`Overview`,content:[`RxJS powers reactive programming in Angular. Understanding the difference between stream types is critical.`]},{heading:`Observable vs Subject vs BehaviorSubject`,content:[],table:{headers:[`Feature`,`Observable`,`Subject`,`BehaviorSubject`,`ReplaySubject`],rows:[[`<strong>Stream Type</strong>`,`Cold (executes per subscriber)`,`Hot (multicast)`,`Hot (multicast)`,`Hot (multicast)`],[`<strong>Initial Value</strong>`,`None`,`No default value`,`<strong>Requires</strong> default value`,`None`],[`<strong>Late Subscriber Value</strong>`,`Runs producer from start`,`Misses past emissions`,`Receives <strong>latest</strong> emitted value immediately`,`Receives <em>n</em> past buffered values`],[`<strong>Read Value Directly?</strong>`,`No`,`No`,`Yes via <code>.getValue()</code>`,`No`],[`<strong>Primary Use Case</strong>`,`HTTP calls, timer events`,`Event bus, notifying actions`,`Store/State management, auth status`,`Caching history of items`]]}},{heading:`Real-World Service Store using BehaviorSubject`,content:[],codeBlocks:[{language:`typescript`,code:`import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface User {
  id: string;
  name: string;
}

@Injectable({ providedIn: 'root' })
export class UserStateService {
  // 1. Private BehaviorSubject with default initial value
  private userSubject = new BehaviorSubject<User | null>(null);

  // 2. Public readonly Observable stream exposed to components
  user$: Observable<User | null> = this.userSubject.asObservable();

  // 3. Derived state using RxJS map
  isLoggedIn$: Observable<boolean> = this.user$.pipe(map(user => !!user));

  // 4. State updates
  setUser(user: User) {
    this.userSubject.next(user);
  }

  logout() {
    this.userSubject.next(null);
  }

  // 5. Snapshot read when needed synchronously
  getCurrentUser(): User | null {
    return this.userSubject.getValue();
  }
}`}]}]},{id:`rxjs-operators-guide`,icon:`⚙️`,title:`RxJS Operators Guide`,badge:`Operators Guide`,items:[{heading:`Overview`,content:[`RxJS operators allow you to compose, transform, filter, coordinate, and clean up asynchronous data streams.`]},{heading:`1. High-Order Flattening Operators`,content:[`Flattening operators map an outer observable emission to an inner observable (e.g. mapping an input event stream to an HTTP request).`,`<strong>1. <code>switchMap</code></strong>`,`• <strong>Definition:</strong> Cancels the previous inner request when a new emission arrives and only keeps the latest one.`,`• <strong>Angular Use Case:</strong> Search input autocomplete, live filtering, and route parameter changes (<code>paramMap.pipe(switchMap(...))</code>).`,`<strong>2. <code>mergeMap</code></strong>`,`• <strong>Definition:</strong> Runs multiple requests concurrently in parallel without cancellation. Preserves all emissions.`,`• <strong>Angular Use Case:</strong> Bulk file uploads, concurrent non-blocking API writes.`,`<blockquote><strong>\u{1F525} Critical Gotcha: What happens if an API call fails in <code>mergeMap</code>?</strong>
By default, an unhandled error inside an inner Observable <strong>bubbles up and terminates the entire outer stream immediately</strong>. Any remaining parallel requests or future emissions are killed.

<strong>The Fix (Inner <code>catchError</code>):</strong> Always place <code>catchError</code> <strong>inside the inner Observable</strong> pipeline:
<code>typescript from(fileList).pipe(   mergeMap(file =&gt;     this.uploadService.upload(file).pipe(       retry({ count: 2, delay: 1000 }),       catchError(error =&gt; {         console.error(\`Upload failed for \${file.name}:\`, error);         return of({ file: file.name, status: &#39;FAILED&#39;, error: error.message });       })     )   ) ).subscribe(result =&gt; console.log(&#39;Processed:&#39;, result)); </code></blockquote>`,`<strong>3. <code>concatMap</code></strong>`,`• <strong>Definition:</strong> Executes requests one after another in strict sequential order. Waits for the previous inner request to complete before beginning the next.`,`• <strong>Angular Use Case:</strong> Multi-step form submissions, sequential order processing, queueing financial transactions.`,`<strong>4. <code>exhaustMap</code></strong>`,`• <strong>Definition:</strong> Ignores new incoming requests while the current inner request is still executing.`,`• <strong>Angular Use Case:</strong> Login button clicks, payment checkout submissions (prevents duplicate requests caused by accidental double-clicks).`],codeBlocks:[{language:`typescript`,code:`this.searchControl.valueChanges.pipe(
  debounceTime(300),
  distinctUntilChanged(),
  switchMap(searchTerm => this.productService.search(searchTerm))
).subscribe(results => (this.products = results));`},{language:`typescript`,code:`from(fileList).pipe(
  mergeMap(file => this.uploadService.upload(file), 4) // max 4 concurrent requests
).subscribe(progress => console.log('File upload completed:', progress));`},{language:`typescript`,code:`from(stepPayloads).pipe(
  concatMap(step => this.wizardService.saveStep(step))
).subscribe(response => console.log('Step saved:', response));`},{language:`typescript`,code:`fromEvent(this.loginButton.nativeElement, 'click').pipe(
  exhaustMap(() => this.authService.login(this.loginForm.value))
).subscribe(user => this.router.navigate(['/dashboard']));`}]},{heading:`2. Combination Operators`,content:[`<strong>5. <code>forkJoin</code></strong>`,`• <strong>Definition:</strong> Combines results from multiple observables, waits for all to complete, and emits the final value of each as an array or dictionary.`,`• <strong>Angular Use Case:</strong> Admin dashboard loading user profile, role permissions, and configuration simultaneously on initial load.`,`<strong>6. <code>combineLatest</code></strong>`,`• <strong>Definition:</strong> Combines the latest values from multiple observables and emits whenever <em>any</em> source emits (after all sources have emitted at least once).`,`• <strong>Angular Use Case:</strong> Dynamic multi-filter bar (search query + category dropdown + sort order).`],codeBlocks:[{language:`typescript`,code:`forkJoin({
  profile: this.userService.getProfile(),
  permissions: this.authService.getPermissions(),
  settings: this.configService.getAppSettings()
}).subscribe(({ profile, permissions, settings }) => {
  console.log('All 3 APIs completed successfully:', profile, permissions, settings);
});`},{language:`typescript`,code:`combineLatest([
  this.searchQuery$,
  this.selectedCategory$,
  this.sortBy$
]).subscribe(([query, category, sort]) => {
  this.applyFilters(query, category, sort);
});`}]},{heading:`3. Creation Operators`,content:[`<strong>7. <code>of</code></strong>`,`• <strong>Definition:</strong> Creates an Observable from given values and emits them immediately, then completes.`,`• <strong>Angular Use Case:</strong> Returning mock/fallback data, interceptor bypasses, unit tests.`,`<strong>8. <code>from</code></strong>`,`• <strong>Definition:</strong> Converts arrays, promises, or iterables into an Observable and emits items one by one.`,`• <strong>Angular Use Case:</strong> Converting native Promises (<code>fetch()</code>, Geolocation) or arrays into reactive streams.`,`<strong>9. <code>interval</code></strong>`,`• <strong>Definition:</strong> Emits values continuously (0, 1, 2...) at a specified time interval (in milliseconds).`,`• <strong>Angular Use Case:</strong> Polling an API every 30 seconds, auto-refresh tokens, countdown clocks.`,`<strong>10. <code>timer</code></strong>`,`• <strong>Definition:</strong> Emits a value after an initial delay, optionally continuing at fixed intervals.`,`• <strong>Angular Use Case:</strong> Delayed execution (e.g. showing a banner after 3 seconds, delayed retry, periodic polling with initial delay).`],codeBlocks:[{language:`typescript`,code:`of([1, 2, 3]).subscribe(console.log); // Emits the array immediately and completes
of('admin', 'editor', 'viewer').subscribe(console.log); // Emits strings one by one`},{language:`typescript`,code:`// Converts array to stream of individual numbers:
from([10, 20, 30]).subscribe(val => console.log(val)); // 10, then 20, then 30

// Converts a Promise to an Observable:
from(fetch('/api/status')).subscribe(res => console.log('Promise resolved to observable'));`},{language:`typescript`,code:`// Polls backend every 30 seconds:
interval(30000).pipe(
  switchMap(() => this.notificationService.checkNewNotifications())
).subscribe(notifications => (this.notifications = notifications));`},{language:`typescript`,code:`// Emits after 3 seconds, then completes:
timer(3000).subscribe(() => (this.showWelcomeBanner = true));

// Waits 1 second, then emits every 5 seconds:
timer(1000, 5000).subscribe(val => console.log('Timer tick:', val));`}]},{heading:`4. Transformation & Filtering Operators`,content:[`<strong>11. <code>map</code></strong>`,`• <strong>Definition:</strong> Used to transform emitted values into another format.`,`• <strong>Angular Use Case:</strong> Extracting specific properties from API responses or formatting presentation values.`,`<strong>12. <code>filter</code></strong>`,`• <strong>Definition:</strong> Allows only values that satisfy a boolean condition to pass through the stream.`,`• <strong>Angular Use Case:</strong> Filtering out null/undefined values, ignoring specific route change events.`,`<strong>13. <code>debounceTime</code></strong>`,`• <strong>Definition:</strong> Waits for a pause in emissions before emitting the latest value.`,`• <strong>Angular Use Case:</strong> Search input typing to avoid hitting the backend API on every keystroke.`,`<strong>14. <code>take</code></strong>`,`• <strong>Definition:</strong> Emits only the first <em>n</em> values from an Observable and then automatically completes.`,`• <strong>Angular Use Case:</strong> Listening to an observable only once (e.g., initial auth status check, first button click) without manual unsubscribe.`],codeBlocks:[{language:`typescript`,code:"this.userService.getUser(id).pipe(\n  map(user => `${user.firstName} ${user.lastName}`) // Transforms User object to full name string\n).subscribe(fullName => console.log(fullName));"},{language:`typescript`,code:`this.router.events.pipe(
  filter(event => event instanceof NavigationEnd)
).subscribe(event => this.trackPageView(event.url));`},{language:`typescript`,code:`this.searchField.valueChanges.pipe(
  debounceTime(400) // Waits 400ms after user stops typing
).subscribe(value => this.searchApi(value));`},{language:`typescript`,code:`this.authService.currentUser$.pipe(
  take(1) // Takes only the first emission and automatically unsubscribes
).subscribe(user => console.log('Initial user check:', user));`}]},{heading:`5. Utility, Multicasting & Cleanup Operators`,content:[`<strong>15. <code>tap</code></strong>`,`• <strong>Definition:</strong> Used for side effects such as logging, analytics tracking, showing/hiding loaders, or debugging. It does not modify the emitted value.`,`• <strong>Angular Use Case:</strong> Managing loading spinners, logging debug data.`,`<strong>16. <code>takeUntil</code></strong>`,`• <strong>Definition:</strong> Automatically unsubscribes from an Observable when another notifier Observable emits a value.`,`• <strong>Angular Use Case:</strong> Cleaning up subscriptions in <code>ngOnDestroy</code> to prevent memory leaks in Angular components.`,`<blockquote><strong>Modern Alternative (Angular 16+):</strong> Use <code>takeUntilDestroyed()</code> to eliminate <code>destroy$</code> boilerplate entirely.</blockquote>`,`<strong>17. <code>shareReplay</code></strong>`,`• <strong>Definition:</strong> Shares a single Observable execution among multiple subscribers and caches the latest emitted value.`,`• <strong>Angular Use Case:</strong> Caching HTTP GET requests so multiple components or multiple template <code>async</code> pipes don&#39;t trigger duplicate network calls.`],codeBlocks:[{language:`typescript`,code:`this.orderService.placeOrder(order).pipe(
  tap(() => (this.isLoading = true)),
  tap({
    next: res => console.log('Order created:', res),
    error: err => console.error('Order failed:', err),
    finalize: () => (this.isLoading = false)
  })
).subscribe();`},{language:`typescript`,code:`export class ProfileComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  ngOnInit() {
    this.userService.getUpdates().pipe(
      takeUntil(this.destroy$) // Auto-unsubscribes when destroy$ emits!
    ).subscribe(data => (this.profileData = data));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}`},{language:`typescript`,code:`@Injectable({ providedIn: 'root' })
export class ConfigService {
  private http = inject(HttpClient);

  // Executes only 1 HTTP request, even if 10 components subscribe:
  readonly appConfig$ = this.http.get<AppConfig>('/api/config').pipe(
    shareReplay({ bufferSize: 1, refCount: true })
  );
}`}]},{heading:`RxJS Operators Master Cheat Sheet`,content:[],table:{headers:[`Operator`,`Category`,`Primary Purpose`,`Ideal Real-World Use Case`],rows:[[`<strong><code>forkJoin</code></strong>`,`Combination`,`Combines multiple streams, waits for all to complete`,`Admin dashboard loading multiple endpoints`],[`<strong><code>switchMap</code></strong>`,`Flattening`,`Cancels previous inner request, keeps latest`,`Search autocomplete, route param changes`],[`<strong><code>mergeMap</code></strong>`,`Flattening`,`Runs multiple inner requests in parallel`,`Multi-file uploads, concurrent writes`],[`<strong><code>concatMap</code></strong>`,`Flattening`,`Runs inner requests sequentially in order`,`Multi-step form submissions, queued actions`],[`<strong><code>exhaustMap</code></strong>`,`Flattening`,`Ignores new emissions while current is running`,`Login / checkout submit button clicks`],[`<strong><code>of</code></strong>`,`Creation`,`Emits values synchronously and completes`,`Mock data, testing, fallback values`],[`<strong><code>from</code></strong>`,`Creation`,`Converts arrays/promises/iterables to stream`,`Converting <code>fetch()</code> Promises or array items`],[`<strong><code>interval</code></strong>`,`Creation`,`Emits numbers indefinitely at time intervals`,`Polling backend APIs, periodic refresh`],[`<strong><code>timer</code></strong>`,`Creation`,`Emits after initial delay, optionally intervals`,`Delayed notifications, scheduled triggers`],[`<strong><code>tap</code></strong>`,`Utility`,`Executes side effects without modifying stream`,`Loading indicators, console logging`],[`<strong><code>map</code></strong>`,`Transformation`,`Transforms emitted value into another format`,`Data extraction, formatting response fields`],[`<strong><code>filter</code></strong>`,`Filtering`,`Emits only values matching a condition`,`Ignoring nulls, listening to specific events`],[`<strong><code>take</code></strong>`,`Filtering`,`Emits first <em>n</em> items and completes`,`Single-shot reads without manual unsubscribe`],[`<strong><code>takeUntil</code></strong>`,`Cleanup`,`Unsubscribes when notifier observable emits`,`Preventing memory leaks in <code>ngOnDestroy</code>`],[`<strong><code>shareReplay</code></strong>`,`Multicasting`,`Multicasts stream and caches latest emission`,`Caching HTTP calls across multiple <code>async</code> pipes`],[`<strong><code>debounceTime</code></strong>`,`Filtering`,`Waits for pause in emissions before emitting`,`Search bar typing pause`],[`<strong><code>combineLatest</code></strong>`,`Combination`,`Combines latest values when <em>any</em> source emits`,`Multi-faceted filter bars (search + tags)`]]}}]},{id:`ngrx-state-management`,icon:`🏛️`,title:`NgRx & State Management`,badge:`NgRx Store`,items:[{heading:`Overview`,content:[`NgRx is a Redux-inspired reactive state management architecture for enterprise Angular applications.`]},{heading:`The 5 Pillars of NgRx`,content:[],codeBlocks:[{language:`typescript`,code:`      \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
      \u2502          Component          \u2502
      \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
                     \u2502 Dispatches
                     \u25BC
      \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
      \u2502           Action            \u2502
      \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2518
             \u2502 Handled by    \u2502 Intercepted by
             \u25BC               \u25BC
      \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
      \u2502   Reducer   \u2502 \u2502   Effect    \u2502 \u2500\u2500\u2500\u25BA HTTP / External APIs
      \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2518
             \u2502 Updates       \u2502 Dispatches new Action
             \u25BC               \u2502
      \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
      \u2502            Store            \u2502 \u25C4\u2518
      \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
                     \u2502 Selects (memoized)
                     \u25BC
      \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
      \u2502          Selector           \u2502
      \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518`}]},{heading:`Complete NgRx Example`,content:[`<strong>1. Actions (<code>todo.actions.ts</code>)</strong>`,`<strong>2. Reducer (<code>todo.reducer.ts</code>)</strong>`,`<strong>3. Selectors (<code>todo.selectors.ts</code>)</strong>`,`<strong>4. Effects (<code>todo.effects.ts</code>)</strong>`],codeBlocks:[{language:`typescript`,code:`import { createActionGroup, emptyProps, props } from '@ngrx/store';

export interface Todo {
  id: number;
  title: string;
}

export const TodoActions = createActionGroup({
  source: 'Todo Page',
  events: {
    'Load Todos': emptyProps(),
    'Load Todos Success': props<{ todos: Todo[] }>(),
    'Load Todos Failure': props<{ error: string }>()
  }
});`},{language:`typescript`,code:`import { createReducer, on } from '@ngrx/store';
import { TodoActions, Todo } from './todo.actions';

export interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
}

export const initialTodoState: TodoState = {
  todos: [],
  loading: false,
  error: null
};

export const todoReducer = createReducer(
  initialTodoState,
  on(TodoActions.loadTodos, state => ({ ...state, loading: true, error: null })),
  on(TodoActions.loadTodosSuccess, (state, { todos }) => ({ ...state, todos, loading: false })),
  on(TodoActions.loadTodosFailure, (state, { error }) => ({ ...state, error, loading: false }))
);`},{language:`typescript`,code:`import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from './todo.reducer';

export const selectTodoState = createFeatureSelector<TodoState>('todos');

export const selectAllTodos = createSelector(
  selectTodoState,
  state => state.todos
);

export const selectTodosLoading = createSelector(
  selectTodoState,
  state => state.loading
);`},{language:`typescript`,code:`import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodoService } from '../services/todo.service';
import { TodoActions } from './todo.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

export const loadTodosEffect = createEffect(
  (actions$ = inject(Actions), todoService = inject(TodoService)) => {
    return actions$.pipe(
      ofType(TodoActions.loadTodos),
      mergeMap(() =>
        todoService.getTodos().pipe(
          map(todos => TodoActions.loadTodosSuccess({ todos })),
          catchError(err => of(TodoActions.loadTodosFailure({ error: err.message })))
        )
      )
    );
  },
  { functional: true }
);`}]}]},{id:`progressive-web-apps-pwa-in-angular`,icon:`📱`,title:`Progressive Web Apps (PWA) in Angular`,badge:`PWA`,items:[{heading:`Overview`,content:[`A Progressive Web App (PWA) delivers native-app-like user experiences on mobile and desktop: offline availability, fast caching, background synchronization, and installation prompts.`]},{heading:`1. Adding PWA to an Angular Project`,content:[`This automates:`,`• Adding <code>@angular/service-worker</code> to <code>package.json</code>.`,`• Creating <code>src/manifest.webmanifest</code> (app identity, theme colors, home screen icons).`,`• Creating <code>ngsw-config.json</code> (caching rules and asset groups).`,`• Registering <code>provideServiceWorker(&#39;ngsw-worker.js&#39;, ...)</code> in <code>app.config.ts</code>.`],codeBlocks:[{language:`bash`,code:`ng add @angular/pwa`}]},{heading:`2. Service Worker Configuration (ngsw-config.json)`,content:[`<blockquote><strong>DataGroup Strategies:</strong>
- <strong><code>freshness</code> (Network-First):</strong> Tries network first; if offline or times out (e.g. 5s), serves from cache. Ideal for live data.
- <strong><code>performance</code> (Cache-First):</strong> Serves immediately from cache; fetches update in the background. Ideal for static/infrequently changing assets.</blockquote>`],codeBlocks:[{language:`json`,code:`{
  "$schema": "./node_modules/@angular/service-worker/config/schema.json",
  "index": "/index.html",
  "assetGroups": [
    {
      "name": "app",
      "installMode": "prefetch",
      "resources": {
        "files": ["/favicon.ico", "/index.html", "/manifest.webmanifest", "/*.css", "/*.js"]
      }
    },
    {
      "name": "assets",
      "installMode": "lazy",
      "updateMode": "prefetch",
      "resources": {
        "files": ["/assets/**", "/*.(svg|cur|jpg|jpeg|png|apng|webp|avif|gif|otf|ttf|woff|woff2)"]
      }
    }
  ],
  "dataGroups": [
    {
      "name": "api-freshness",
      "urls": ["/api/todos/**"],
      "cacheConfig": {
        "maxSize": 100,
        "maxAge": "1h",
        "timeout": "5s",
        "strategy": "freshness"
      }
    }
  ]
}`}]},{heading:`3. Detecting & Prompting App Updates with SwUpdate`,content:[`When a new version of the app is published, prompt the user to reload:`],codeBlocks:[{language:`typescript`,code:`import { Component, OnInit, inject } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  template: \`<router-outlet />\`
})
export class AppComponent implements OnInit {
  private swUpdate = inject(SwUpdate);

  ngOnInit() {
    if (this.swUpdate.isEnabled) {
      // Listen for version ready events
      this.swUpdate.versionUpdates
        .pipe(filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'))
        .subscribe(() => {
          if (confirm('A new version of the application is available. Load update?')) {
            window.location.reload();
          }
        });
    }
  }
}`}]}]}];var J=(n,c)=>c.id;var Q=(n,c)=>c.heading;function Z(n,c){if(n&1){let e=GI();hi(0,`button`,38),kp(`click`,function(){nu(e);let i=zI();return ru(i.searchQuery.set(``))}),Sp(1,`i`,39),Rc()}}function K(n,c){if(n&1&&(hi(0,`span`,44),yD(1),Rc()),n&2){let e=zI().$implicit;Bp(`core-badge`,e.badge===`Core`||e.badge===`Directives`||e.badge===`Pipes`),tv(),Lc(` `,e.badge,` `)}}function Y(n,c){if(n&1){let e=GI();hi(0,`button`,40),kp(`click`,function(){let i=nu(e).$implicit,l=zI();return ru(l.setActiveTopic(i.id))}),hi(1,`span`,41),yD(2),Rc(),hi(3,`span`,42),yD(4),Rc(),kI(5,K,2,3,`span`,43),Rc()}if(n&2){let e=c.$implicit,r=c.$index,i=zI();Bp(`active`,i.activeTopic().id===e.id),tv(2),Qp(e.icon),tv(2),Zp(``,r+1,`. `,e.title),tv(),PI(e.badge?5:-1)}}function X(n,c){if(n&1&&(hi(0,`div`,31)(1,`span`),yD(2,`🔍`),Rc(),hi(3,`p`),yD(4,`No topics match "`),hi(5,`strong`),yD(6),Rc(),yD(7,`"`),Rc()()),n&2){let e=zI();tv(6),Qp(e.searchQuery())}}function ee(n,c){if(n&1&&(hi(0,`span`,44),yD(1),Rc()),n&2){let e=zI();Bp(`core-badge`,e.badge===`Core`||e.badge===`Directives`||e.badge===`Pipes`),tv(),Lc(` `,e.badge,` `)}}function ne(n,c){if(n&1&&(hi(0,`span`,63),Sp(1,`i`,69),yD(2),Rc()),n&2){let e=zI().$implicit;tv(2),Lc(` `,e.codeBlocks.length,` Code `)}}function te(n,c){if(n&1&&Sp(0,`p`,66),n&2){let e=c.$implicit;Mp(`innerHTML`,e,py)}}function oe(n,c){if(n&1&&Sp(0,`th`,71),n&2){let e=c.$implicit;Mp(`innerHTML`,e,py)}}function re(n,c){if(n&1&&Sp(0,`td`,71),n&2){let e=c.$implicit;Mp(`innerHTML`,e,py)}}function ie(n,c){if(n&1&&(hi(0,`tr`),VI(1,re,1,1,`td`,71,FI),Rc()),n&2){let e=c.$implicit;tv(),HI(e)}}function ae(n,c){if(n&1&&(hi(0,`div`,67)(1,`table`,70)(2,`thead`)(3,`tr`),VI(4,oe,1,1,`th`,71,FI),Rc()(),hi(6,`tbody`),VI(7,ie,3,0,`tr`,null,FI),Rc()()()),n&2){let e=zI().$implicit;tv(4),HI(e.table.headers),tv(3),HI(e.table.rows)}}function se(n,c){n&1&&(Sp(0,`i`,80),yD(1,` Copied! `))}function ce(n,c){n&1&&(Sp(0,`i`,81),yD(1,` Copy `))}function le(n,c){if(n&1){let e=GI();hi(0,`div`,68)(1,`div`,72)(2,`div`,73),Sp(3,`span`,74)(4,`span`,75)(5,`span`,76),Rc(),hi(6,`span`,77),yD(7),Rc(),hi(8,`button`,78),kp(`click`,function(){let i=nu(e),l=i.$implicit,p=i.$index,$=zI().$index,G=zI(),W=zI();return ru(W.copyCode(l.code,G.id+`-`+$+`-`+p))}),kI(9,se,2,0)(10,ce,2,0),Rc()(),hi(11,`pre`,79)(12,`code`),yD(13),Rc()()()}if(n&2){let e=c.$implicit,r=c.$index,i=zI().$index,l=zI(),p=zI();tv(7),Qp(e.language),tv(),Np(`aria-label`,`Copy code`),tv(),PI(p.copiedCode()===l.id+`-`+i+`-`+r?9:10),tv(4),Qp(e.code)}}function de(n,c){if(n&1){let e=GI();hi(0,`div`,59)(1,`button`,60),kp(`click`,function(){let i=nu(e).$index,l=zI(),p=zI();return ru(p.toggleItem(l.id+`-`+i))}),hi(2,`span`,61),yD(3),Rc(),hi(4,`div`,62),kI(5,ne,3,1,`span`,63),Sp(6,`i`,64),Rc()(),hi(7,`div`,65),VI(8,te,1,1,`p`,66,FI),kI(10,ae,9,0,`div`,67),VI(11,le,14,4,`div`,68,FI),Rc()()}if(n&2){let e=c.$implicit,r=c.$index,i=zI(),l=zI();Bp(`expanded`,l.isExpanded(i.id+`-`+r)),tv(),Np(`aria-expanded`,l.isExpanded(i.id+`-`+r)),tv(2),Qp(e.heading),tv(2),PI(e.codeBlocks&&e.codeBlocks.length>0?5:-1),tv(),Bp(`bx-chevron-down`,!l.isExpanded(i.id+`-`+r))(`bx-chevron-up`,l.isExpanded(i.id+`-`+r)),tv(),Bp(`open`,l.isExpanded(i.id+`-`+r)),tv(),HI(e.content),tv(2),PI(e.table?10:-1),tv(),HI(e.codeBlocks)}}function ge(n,c){if(n&1){let e=GI();hi(0,`button`,82),kp(`click`,function(){nu(e);let i=zI(),l=zI();return ru(l.setActiveTopic(l.filteredTopics()[l.filteredTopics().indexOf(i)-1].id))}),Sp(1,`i`,83),hi(2,`span`),yD(3),Rc()()}if(n&2){let e=zI(),r=zI();tv(3),Qp(r.filteredTopics()[r.filteredTopics().indexOf(e)-1].title)}}function pe(n,c){n&1&&Sp(0,`div`)}function ue(n,c){if(n&1){let e=GI();hi(0,`button`,84),kp(`click`,function(){nu(e);let i=zI(),l=zI();return ru(l.setActiveTopic(l.filteredTopics()[l.filteredTopics().indexOf(i)+1].id))}),hi(1,`span`),yD(2),Rc(),Sp(3,`i`,85),Rc()}if(n&2){let e=zI(),r=zI();tv(2),Qp(r.filteredTopics()[r.filteredTopics().indexOf(e)+1].title)}}function me(n,c){if(n&1){let e=GI();hi(0,`div`,45)(1,`span`,46),yD(2),Rc(),hi(3,`div`,47)(4,`h2`,48),yD(5),Rc(),kI(6,ee,2,3,`span`,43),Rc(),hi(7,`div`,49)(8,`button`,50),kp(`click`,function(){nu(e);let i=zI();return ru(i.expandAllForTopic())}),Sp(9,`i`,51),yD(10,` Expand All `),Rc(),hi(11,`button`,52),kp(`click`,function(){nu(e);let i=zI();return ru(i.collapseAllForTopic())}),Sp(12,`i`,53),yD(13,` Collapse `),Rc()()(),hi(14,`div`,54),VI(15,de,13,12,`div`,55,Q),Rc(),hi(17,`div`,56),kI(18,ge,4,1,`button`,57)(19,pe,1,0,`div`),kI(20,ue,4,1,`button`,58),Rc()}if(n&2){let e=c,r=zI();tv(2),Qp(e.icon),tv(3),Qp(e.title),tv(),PI(e.badge?6:-1),tv(9),HI(e.items),tv(3),PI(r.filteredTopics().indexOf(e)>0?18:19),tv(2),PI(r.filteredTopics().indexOf(e)<r.filteredTopics().length-1?20:-1)}}var Ae=(()=>{class n{constructor(){this.searchQuery=zs(``),this.activeTopicId=zs(`custom-directives`),this.expandedItems=zs(new Set),this.copiedCode=zs(null),this.topics=H,this.filteredTopics=PD(()=>{let e=this.searchQuery().toLowerCase().trim();return e?this.topics.filter(r=>r.title.toLowerCase().includes(e)||r.items.some(i=>i.heading.toLowerCase().includes(e)||i.content.some(l=>l.toLowerCase().includes(e)))):this.topics}),this.activeTopic=PD(()=>this.filteredTopics().find(e=>e.id===this.activeTopicId())??this.filteredTopics()[0]??this.topics[0]),this.expandAllForCurrentTopic(this.activeTopicId())}expandAllForCurrentTopic(e){let r=this.topics.find(i=>i.id===e);if(r&&r.items.length>0){let i=new Set;r.items.forEach((l,p)=>i.add(`${e}-${p}`)),this.expandedItems.set(i)}}setActiveTopic(e){this.activeTopicId.set(e),this.expandAllForCurrentTopic(e),window.scrollTo({top:0,behavior:`smooth`})}toggleItem(e){let r=new Set(this.expandedItems());r.has(e)?r.delete(e):r.add(e),this.expandedItems.set(r)}isExpanded(e){return this.expandedItems().has(e)}expandAllForTopic(){let e=this.activeTopic();if(!e)return;let r=new Set;e.items.forEach((i,l)=>r.add(`${e.id}-${l}`)),this.expandedItems.set(r)}collapseAllForTopic(){this.expandedItems.set(new Set)}async copyCode(e,r){try{await navigator.clipboard.writeText(e),this.copiedCode.set(r),setTimeout(()=>this.copiedCode.set(null),2e3)}catch{}}onKey(e){(e.ctrlKey||e.metaKey)&&e.key===`k`&&(e.preventDefault(),document.getElementById(`af-search`)?.focus())}static{this.ɵfac=function(r){return new(r||n)}}static{this.ɵcmp=OE({type:n,selectors:[[`app-angular-fundamentals`]],hostBindings:function(r,i){r&1&&kp(`keydown`,function(p){return i.onKey(p)},yy)},decls:67,vars:5,consts:[[1,`af-page`],[1,`af-hero`],[1,`af-hero-inner`],[`aria-label`,`Breadcrumb`,1,`af-breadcrumb`],[`routerLink`,`/upskill`,1,`breadcrumb-back-btn`],[1,`bx`,`bx-left-arrow-alt`],[1,`breadcrumb-separator`],[1,`breadcrumb-current`],[1,`af-hero-badge`],[`viewBox`,`0 0 250 250`,`fill`,`none`,`xmlns`,`http://www.w3.org/2000/svg`,`aria-label`,`Angular logo`,1,`af-badge-svg`],[`points`,`125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 125,230 203.9,186.3 218.1,63.2`,`fill`,`#DD0031`],[`points`,`125,30 125,52.2 125,52.1 125,153.4 125,153.4 125,230 125,230 203.9,186.3 218.1,63.2 125,30`,`fill`,`#C3002F`],[`points`,`125,52.1 66,182.6 88.3,182.6 100.2,153.4 125,153.4 149.8,153.4 161.7,182.6 184,182.6`,`fill`,`#FFFFFF`],[`points`,`125,82.8 108.6,122.9 141.4,122.9`,`fill`,`#DD0031`],[1,`af-hero-title`],[1,`gradient-text-red`],[1,`gradient-text-light`],[1,`af-hero-subtitle`],[1,`af-stats`],[1,`af-stat`],[1,`af-stat-num`],[1,`af-stat-label`],[1,`af-stat-divider`],[1,`af-layout`],[1,`af-sidebar`],[1,`af-search-wrap`],[1,`bx`,`bx-search`,`af-search-icon`],[`id`,`af-search`,`type`,`text`,`placeholder`,`Search topics (Ctrl+K)...`,`autocomplete`,`off`,1,`af-search-input`,3,`ngModelChange`,`ngModel`],[1,`af-search-clear`],[`aria-label`,`Angular Topics List`,1,`af-topic-list`],[1,`af-topic-btn`,3,`active`],[1,`af-no-results`],[1,`af-legend`],[1,`af-legend-title`],[1,`af-legend-item`],[1,`af-topic-badge`,`core-badge`],[1,`af-topic-badge`,`signals-badge`],[`id`,`af-main-content`,1,`af-content`],[1,`af-search-clear`,3,`click`],[1,`bx`,`bx-x`],[1,`af-topic-btn`,3,`click`],[1,`af-topic-icon`],[1,`af-topic-title-text`],[1,`af-topic-badge`,3,`core-badge`],[1,`af-topic-badge`],[1,`af-content-header`],[1,`af-content-icon`],[1,`af-content-header-text`],[1,`af-content-title`],[1,`af-content-actions`],[`title`,`Expand all sections`,1,`af-action-btn`,3,`click`],[1,`bx`,`bx-expand-vertical`],[`title`,`Collapse all sections`,1,`af-action-btn`,3,`click`],[1,`bx`,`bx-collapse-vertical`],[1,`af-accordion`],[1,`af-accordion-item`,3,`expanded`],[1,`af-topic-nav`],[1,`af-nav-btn`,`prev`],[1,`af-nav-btn`,`next`],[1,`af-accordion-item`],[1,`af-accordion-header`,3,`click`],[1,`af-accordion-heading`],[1,`af-accordion-header-right`],[1,`af-code-count-badge`],[1,`bx`,`af-accordion-chevron`],[1,`af-accordion-body`],[1,`af-content-line`,3,`innerHTML`],[1,`af-table-wrap`],[1,`af-code-block`],[1,`bx`,`bx-code-alt`],[1,`af-table`],[3,`innerHTML`],[1,`af-code-header`],[1,`af-code-dots`],[1,`dot`,`red`],[1,`dot`,`yellow`],[1,`dot`,`green`],[1,`af-code-lang`],[1,`af-copy-btn`,3,`click`],[1,`af-pre`],[1,`bx`,`bx-check`],[1,`bx`,`bx-copy`],[1,`af-nav-btn`,`prev`,3,`click`],[1,`bx`,`bx-chevron-left`],[1,`af-nav-btn`,`next`,3,`click`],[1,`bx`,`bx-chevron-right`]],template:function(r,i){if(r&1&&(hi(0,`div`,0)(1,`header`,1)(2,`div`,2)(3,`nav`,3)(4,`a`,4),Sp(5,`i`,5),yD(6,` Back to Upskill Hub `),Rc(),hi(7,`span`,6),yD(8,`/`),Rc(),hi(9,`span`,7),yD(10,`Angular Fundamentals`),Rc()(),hi(11,`div`,8),gu(),hi(12,`svg`,9),Sp(13,`polygon`,10)(14,`polygon`,11)(15,`polygon`,12)(16,`polygon`,13),Rc(),mu(),hi(17,`span`),yD(18,`Angular Architecture & Fundamentals`),Rc()(),hi(19,`h1`,14)(20,`span`,15),yD(21,`Angular`),Rc(),hi(22,`span`,16),yD(23,` Fundamentals`),Rc()(),hi(24,`p`,17),yD(25,` Master core Angular architecture: standalone directives, functional guards, modern dependency injection, fine-grained Signals, reactive forms, and NgRx state management. `),Rc(),hi(26,`div`,18)(27,`div`,19)(28,`span`,20),yD(29),Rc(),hi(30,`span`,21),yD(31,`Topics`),Rc()(),Sp(32,`div`,22),hi(33,`div`,19)(34,`span`,20),yD(35,`67`),Rc(),hi(36,`span`,21),yD(37,`Code Examples`),Rc()(),Sp(38,`div`,22),hi(39,`div`,19)(40,`span`,20),yD(41,`v18+`),Rc(),hi(42,`span`,21),yD(43,`Signals & Control Flow`),Rc()()()()(),hi(44,`div`,23)(45,`aside`,24)(46,`div`,25),Sp(47,`i`,26),hi(48,`input`,27),Bv(),kp(`ngModelChange`,function(p){return i.searchQuery.set(p)}),Rc(),kI(49,Z,2,0,`button`,28),Rc(),hi(50,`nav`,29),VI(51,Y,6,6,`button`,30,J),kI(53,X,8,1,`div`,31),Rc(),hi(54,`div`,32)(55,`p`,33),yD(56,`Topic Coverage`),Rc(),hi(57,`div`,34)(58,`span`,35),yD(59,`Core`),Rc(),yD(60,` Fundamentals & Architecture`),Rc(),hi(61,`div`,34)(62,`span`,36),yD(63,`Signals`),Rc(),yD(64,` Angular 18+ Fine-grained Reactivity`),Rc()()(),hi(65,`main`,37),kI(66,me,21,5),Rc()()()),r&2){let l;tv(29),Qp(i.topics.length),tv(19),Mp(`ngModel`,i.searchQuery()),Uv(),tv(),PI(i.searchQuery()?49:-1),tv(2),HI(i.filteredTopics()),tv(2),PI(i.filteredTopics().length===0?53:-1),tv(13),PI((l=i.activeTopic())?66:-1,l)}},dependencies:[ce$1,_n,je,pn,Lt,$c,ts],styles:[`[_nghost-%COMP%]{display:block}.af-page[_ngcontent-%COMP%]{min-height:100vh;color:var(--%NS%text-main);padding-top:80px}.af-hero[_ngcontent-%COMP%]{padding:3.5rem 0 2.5rem;text-align:center;position:relative;background:linear-gradient(180deg,rgba(221,0,49,.05) 0%,transparent 100%);border-bottom:1px solid var(--%NS%border-glass)}.af-hero-inner[_ngcontent-%COMP%]{max-width:800px;margin:0 auto;padding:0 1.5rem}.af-breadcrumb[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:.6rem;margin-bottom:1.5rem;font-size:.85rem}.breadcrumb-back-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.35rem;color:var(--%NS%text-muted);text-decoration:none;font-weight:500;padding:.3rem .75rem;background:#ffffff0a;border:1px solid rgba(255,255,255,.08);border-radius:var(--%NS%radius-full);transition:all .2s ease}.breadcrumb-back-btn[_ngcontent-%COMP%]:hover{color:#ff4b6e;border-color:#dd00314d;background:#dd003114;transform:translate(-2px)}.breadcrumb-separator[_ngcontent-%COMP%]{color:var(--%NS%text-dim)}.breadcrumb-current[_ngcontent-%COMP%]{color:var(--%NS%text-main);font-weight:600}.af-hero-badge[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.5rem;padding:.35rem 1rem;font-size:.8rem;font-family:var(--%NS%font-mono);color:#ff4b6e;background:#dd003114;border:1px solid rgba(221,0,49,.25);border-radius:var(--%NS%radius-full);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:1.25rem}.af-badge-svg[_ngcontent-%COMP%]{width:18px;height:18px;display:inline-block;flex-shrink:0}.af-hero-title[_ngcontent-%COMP%]{font-size:clamp(2rem,5vw,3rem);font-weight:800;letter-spacing:-.03em;margin-bottom:1rem;line-height:1.15}.gradient-text-red[_ngcontent-%COMP%]{background:linear-gradient(135deg,#ff3b5c,#dd0031 70%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.gradient-text-light[_ngcontent-%COMP%]{color:#fff}.af-hero-subtitle[_ngcontent-%COMP%]{color:var(--%NS%text-muted);font-size:1.05rem;max-width:620px;margin:0 auto 2rem;line-height:1.65}.af-stats[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:1.5rem;padding:.85rem 2rem;background:#ffffff08;border:1px solid var(--%NS%border-glass);border-radius:var(--%NS%radius-full);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.af-stat[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.af-stat-num[_ngcontent-%COMP%]{font-size:1.35rem;font-weight:700;color:#ff4b6e;font-family:var(--%NS%font-mono)}.af-stat-label[_ngcontent-%COMP%]{font-size:.72rem;color:var(--%NS%text-muted);text-transform:uppercase;letter-spacing:.5px}.af-stat-divider[_ngcontent-%COMP%]{width:1px;height:30px;background:var(--%NS%border-glass)}.af-layout[_ngcontent-%COMP%]{display:grid;grid-template-columns:320px 1fr;gap:0;max-width:1400px;margin:0 auto;min-height:calc(100vh - 80px)}.af-sidebar[_ngcontent-%COMP%]{border-right:1px solid var(--%NS%border-glass);padding:1.5rem 1rem;position:sticky;top:80px;height:calc(100vh - 80px);overflow-y:auto;overflow-x:hidden;background:#0a0e18b3;-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);scrollbar-width:thin;scrollbar-color:rgba(221,0,49,.25) transparent}.af-sidebar[_ngcontent-%COMP%]::-webkit-scrollbar{width:4px}.af-sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#dd003140;border-radius:10px}.af-search-wrap[_ngcontent-%COMP%]{position:relative;margin-bottom:1.25rem}.af-search-icon[_ngcontent-%COMP%]{position:absolute;left:.85rem;top:50%;transform:translateY(-50%);font-size:1rem;color:var(--%NS%text-dim);pointer-events:none}.af-search-input[_ngcontent-%COMP%]{width:100%;background:#ffffff0a;border:1px solid var(--%NS%border-glass);border-radius:var(--%NS%radius-md);padding:.6rem 2.5rem .6rem 2.25rem;font-size:.85rem;color:var(--%NS%text-main);font-family:var(--%NS%font-sans);transition:all .25s ease;outline:none}.af-search-input[_ngcontent-%COMP%]::placeholder{color:var(--%NS%text-dim)}.af-search-input[_ngcontent-%COMP%]:focus{border-color:#dd003166;background:#dd00310a;box-shadow:0 0 0 3px #dd00311a}.af-search-clear[_ngcontent-%COMP%]{position:absolute;right:.6rem;top:50%;transform:translateY(-50%);background:none;border:none;color:var(--%NS%text-dim);cursor:pointer;padding:.2rem;border-radius:4px;display:flex;align-items:center;transition:color .2s;font-size:1.1rem}.af-search-clear[_ngcontent-%COMP%]:hover{color:var(--%NS%text-main)}.af-topic-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem}.af-topic-btn[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.6rem;width:100%;padding:.7rem .85rem;background:transparent;border:1px solid transparent;border-radius:var(--%NS%radius-md);color:var(--%NS%text-muted);font-size:.86rem;font-family:var(--%NS%font-sans);font-weight:500;cursor:pointer;text-align:left;transition:all .2s ease;flex-wrap:nowrap}.af-topic-btn[_ngcontent-%COMP%]:hover{background:#ffffff0a;color:var(--%NS%text-main);border-color:var(--%NS%border-glass)}.af-topic-btn.active[_ngcontent-%COMP%]{background:#dd00311a;border-color:#dd003159;color:#ff4b6e}.af-topic-icon[_ngcontent-%COMP%]{font-size:1.05rem;flex-shrink:0}.af-topic-title-text[_ngcontent-%COMP%]{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.af-topic-badge[_ngcontent-%COMP%]{display:inline-flex;align-items:center;padding:.18rem .5rem;font-size:.68rem;font-family:var(--%NS%font-mono);border-radius:var(--%NS%radius-full);background:#ffffff0f;color:var(--%NS%text-dim);border:1px solid rgba(255,255,255,.1);white-space:nowrap;flex-shrink:0;font-weight:500}.af-topic-badge.core-badge[_ngcontent-%COMP%]{background:#dd00311f;color:#ff6b8b;border-color:#dd00314d}.af-topic-badge.signals-badge[_ngcontent-%COMP%]{background:#38bdf81f;color:#38bdf8;border-color:#38bdf84d}.af-no-results[_ngcontent-%COMP%]{text-align:center;padding:2rem 1rem;color:var(--%NS%text-dim)}.af-no-results[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:2rem;display:block;margin-bottom:.5rem}.af-no-results[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.85rem}.af-legend[_ngcontent-%COMP%]{margin-top:2rem;padding:1rem;background:#ffffff05;border:1px solid var(--%NS%border-glass);border-radius:var(--%NS%radius-md)}.af-legend-title[_ngcontent-%COMP%]{font-size:.72rem;text-transform:uppercase;letter-spacing:1px;color:var(--%NS%text-dim);margin-bottom:.75rem;font-weight:600}.af-legend-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;font-size:.8rem;color:var(--%NS%text-muted);margin-bottom:.4rem}.af-content[_ngcontent-%COMP%]{padding:2rem 2.5rem 4rem;max-width:960px}.af-content-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;margin-bottom:2rem;padding-bottom:1.5rem;border-bottom:1px solid var(--%NS%border-glass);flex-wrap:wrap}.af-content-icon[_ngcontent-%COMP%]{font-size:2.25rem;flex-shrink:0}.af-content-header-text[_ngcontent-%COMP%]{flex:1;min-width:200px}.af-content-title[_ngcontent-%COMP%]{font-size:1.65rem;font-weight:700;color:var(--%NS%text-main);letter-spacing:-.02em;margin-bottom:.35rem}.af-content-actions[_ngcontent-%COMP%]{display:flex;gap:.5rem}.af-action-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.35rem;padding:.35rem .75rem;background:#ffffff0a;border:1px solid var(--%NS%border-glass);border-radius:var(--%NS%radius-md);color:var(--%NS%text-muted);font-size:.78rem;font-family:var(--%NS%font-sans);cursor:pointer;transition:all .2s ease}.af-action-btn[_ngcontent-%COMP%]:hover{background:#dd003114;border-color:#dd00314d;color:#ff4b6e}.af-accordion[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.75rem}.af-accordion-item[_ngcontent-%COMP%]{background:var(--%NS%bg-card);border:1px solid var(--%NS%border-glass);border-radius:var(--%NS%radius-md);overflow:hidden;transition:border-color .25s ease}.af-accordion-item.expanded[_ngcontent-%COMP%]{border-color:#dd00314d;box-shadow:0 4px 24px #dd003114}.af-accordion-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%;padding:1.1rem 1.25rem;background:transparent;border:none;cursor:pointer;color:var(--%NS%text-main);font-family:var(--%NS%font-sans);font-weight:600;font-size:.97rem;text-align:left;gap:1rem;transition:background .2s ease}.af-accordion-header[_ngcontent-%COMP%]:hover{background:#ffffff06}.af-accordion-heading[_ngcontent-%COMP%]{flex:1}.af-accordion-header-right[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.65rem;flex-shrink:0}.af-code-count-badge[_ngcontent-%COMP%]{font-size:.72rem;font-family:var(--%NS%font-mono);color:#ff6b8b;background:#dd00311a;padding:.2rem .5rem;border-radius:4px;display:inline-flex;align-items:center;gap:.25rem}.af-accordion-chevron[_ngcontent-%COMP%]{font-size:1.25rem;color:var(--%NS%text-dim);transition:transform .3s ease;flex-shrink:0}.expanded[_ngcontent-%COMP%]   .af-accordion-chevron[_ngcontent-%COMP%]{color:#ff4b6e}.af-accordion-body[_ngcontent-%COMP%]{max-height:0;overflow:hidden;transition:max-height .4s cubic-bezier(.16,1,.3,1),padding .3s ease;padding:0 1.25rem}.af-accordion-body.open[_ngcontent-%COMP%]{max-height:4000px;padding:0 1.25rem 1.5rem}.af-content-line[_ngcontent-%COMP%]{color:var(--%NS%text-muted);font-size:.93rem;line-height:1.75;margin-bottom:.75rem}.af-content-line[_ngcontent-%COMP%]:last-child{margin-bottom:0}.af-content-line[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:var(--%NS%font-mono);font-size:.85em;padding:.1em .4em;background:#dd00311a;border:1px solid rgba(221,0,49,.2);border-radius:4px;color:#ff6b8b}.af-content-line[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--%NS%text-main);font-weight:600}.af-content-line[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]{margin:.75rem 0;padding:.6rem 1rem;background:#dd00310d;border-left:3px solid #dd0031;border-radius:0 4px 4px 0;color:#e2e8f0}.af-table-wrap[_ngcontent-%COMP%]{overflow-x:auto;margin:1rem 0;border-radius:var(--%NS%radius-md);border:1px solid var(--%NS%border-glass)}.af-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;font-size:.87rem}.af-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background:#dd003114;color:#ff6b8b;font-family:var(--%NS%font-mono);font-size:.78rem;font-weight:600;text-transform:uppercase;letter-spacing:.5px;padding:.75rem 1rem;text-align:left;border-bottom:1px solid rgba(221,0,49,.2);white-space:nowrap}.af-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:.7rem 1rem;color:var(--%NS%text-muted);border-bottom:1px solid var(--%NS%border-glass);vertical-align:top;line-height:1.5}.af-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]{border-bottom:none}.af-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]{background:#ffffff05;color:var(--%NS%text-main)}.af-code-block[_ngcontent-%COMP%]{margin:1rem 0;border-radius:var(--%NS%radius-md);overflow:hidden;border:1px solid rgba(255,255,255,.08);background:#0d1117}.af-code-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;padding:.6rem 1rem;background:#ffffff0a;border-bottom:1px solid rgba(255,255,255,.06)}.af-code-dots[_ngcontent-%COMP%]{display:flex;gap:.3rem}.dot[_ngcontent-%COMP%]{width:10px;height:10px;border-radius:50%}.dot.red[_ngcontent-%COMP%]{background:#ff5f57}.dot.yellow[_ngcontent-%COMP%]{background:#febc2e}.dot.green[_ngcontent-%COMP%]{background:#28c840}.af-code-lang[_ngcontent-%COMP%]{flex:1;font-size:.75rem;font-family:var(--%NS%font-mono);color:var(--%NS%text-dim);text-transform:uppercase;letter-spacing:1px}.af-copy-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.3rem;padding:.25rem .65rem;background:#ffffff0f;border:1px solid rgba(255,255,255,.1);border-radius:6px;color:var(--%NS%text-dim);font-size:.75rem;font-family:var(--%NS%font-sans);cursor:pointer;transition:all .2s ease;white-space:nowrap}.af-copy-btn[_ngcontent-%COMP%]:hover{background:#dd003126;border-color:#dd00314d;color:#ff4b6e}.af-pre[_ngcontent-%COMP%]{margin:0;padding:1.1rem 1.25rem;overflow-x:auto;font-family:var(--%NS%font-mono);font-size:.86rem;line-height:1.6;color:#e2e8f0}.af-pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:inherit;font-size:inherit;color:inherit}.af-topic-nav[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-top:3rem;padding-top:2rem;border-top:1px solid var(--%NS%border-glass);gap:1rem}.af-nav-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.5rem;padding:.7rem 1.25rem;background:var(--%NS%bg-card);border:1px solid var(--%NS%border-glass);border-radius:var(--%NS%radius-md);color:var(--%NS%text-main);font-size:.88rem;font-family:var(--%NS%font-sans);cursor:pointer;transition:all .2s ease}.af-nav-btn[_ngcontent-%COMP%]:hover{border-color:#dd003166;background:#dd003114;color:#ff4b6e}.af-nav-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.2rem}@media(max-width:900px){.af-layout[_ngcontent-%COMP%]{grid-template-columns:1fr}.af-sidebar[_ngcontent-%COMP%]{position:static;height:auto;border-right:none;border-bottom:1px solid var(--%NS%border-glass)}.af-content[_ngcontent-%COMP%]{padding:1.5rem 1rem 3rem}}`]})}}return n})();export{Ae as AngularFundamentals};