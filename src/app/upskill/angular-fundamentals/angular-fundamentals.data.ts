export interface CodeBlock {
  language: string;
  code: string;
}

export interface TopicItem {
  heading: string;
  content: string[];
  codeBlocks?: CodeBlock[];
  table?: { headers: string[]; rows: string[][] };
}

export interface Topic {
  id: string;
  icon: string;
  title: string;
  badge?: string;
  items: TopicItem[];
}

export const ANGULAR_TOPICS: Topic[] = [
  {
    "id": "custom-directives",
    "icon": "🎯",
    "title": "Custom Directives",
    "badge": "Directives",
    "items": [
      {
        "heading": "Overview",
        "content": [
          "Directives attach custom behavior or manipulate the DOM of elements in your Angular applications."
        ]
      },
      {
        "heading": "Types of Directives",
        "content": [],
        "table": {
          "headers": [
            "Type",
            "Purpose",
            "Example"
          ],
          "rows": [
            [
              "<strong>Component</strong>",
              "Directive with an inline or external template",
              "<code>&lt;app-user-card&gt;</code>"
            ],
            [
              "<strong>Structural</strong>",
              "Adds, removes, or manipulates DOM elements",
              "<code>*ngIf</code>, <code>*ngFor</code>, custom <code>*appIf</code>"
            ],
            [
              "<strong>Attribute</strong>",
              "Changes the appearance or behavior of an existing element",
              "<code>[ngClass]</code>, <code>[appHighlight]</code>"
            ]
          ]
        }
      },
      {
        "heading": "Attribute Directive (Class-based vs Modern Standalone)",
        "content": [
          "<strong>Standalone Attribute Directive (Angular 15+ Recommended)</strong>",
          "<strong>Usage in HTML:</strong>"
        ],
        "codeBlocks": [
          {
            "language": "typescript",
            "code": "import { Directive, ElementRef, HostListener, Input, inject } from '@angular/core';\n\n@Directive({\n  selector: '[appHighlight]',\n  standalone: true\n})\nexport class HighlightDirective {\n  private el = inject(ElementRef);\n\n  @Input('appHighlight') highlightColor: string = 'yellow';\n  @Input() defaultColor: string = 'transparent';\n\n  @HostListener('mouseenter') onMouseEnter() {\n    this.setColor(this.highlightColor || 'yellow');\n  }\n\n  @HostListener('mouseleave') onMouseLeave() {\n    this.setColor(this.defaultColor);\n  }\n\n  private setColor(color: string) {\n    this.el.nativeElement.style.backgroundColor = color;\n  }\n}"
          },
          {
            "language": "html",
            "code": "<p [appHighlight]=\"'lightblue'\" [defaultColor]=\"'#f0f0f0'\">Hover over this text!</p>"
          }
        ]
      },
      {
        "heading": "Structural Directive (Custom *appIf)",
        "content": [
          "Structural directives interact with <code>TemplateRef</code> and <code>ViewContainerRef</code> to conditionally render content.",
          "<strong>Usage:</strong>"
        ],
        "codeBlocks": [
          {
            "language": "typescript",
            "code": "import { Directive, Input, TemplateRef, ViewContainerRef, inject } from '@angular/core';\n\n@Directive({\n  selector: '[appIf]',\n  standalone: true\n})\nexport class AppIfDirective {\n  private templateRef = inject(TemplateRef);\n  private vcr = inject(ViewContainerRef);\n  private hasView = false;\n\n  @Input() set appIf(condition: boolean) {\n    if (condition && !this.hasView) {\n      this.vcr.createEmbeddedView(this.templateRef);\n      this.hasView = true;\n    } else if (!condition && this.hasView) {\n      this.vcr.clear();\n      this.hasView = false;\n    }\n  }\n}"
          },
          {
            "language": "html",
            "code": "<div *appIf=\"isLoggedIn\">Welcome back, User!</div>"
          }
        ]
      },
      {
        "heading": "Common HostListener Patterns",
        "content": [],
        "codeBlocks": [
          {
            "language": "typescript",
            "code": "// Restrict input to digits only\n@HostListener('input', ['$event'])\nonInput(event: Event) {\n  const input = event.target as HTMLInputElement;\n  input.value = input.value.replace(/[^0-9]/g, '');\n}\n\n// Click outside detection for dropdowns/modals\n@HostListener('document:click', ['$event.target'])\nonClickOutside(target: HTMLElement) {\n  if (!this.el.nativeElement.contains(target)) {\n    this.closeMenu.emit();\n  }\n}"
          }
        ]
      }
    ]
  },
  {
    "id": "custom-pipes",
    "icon": "🔄",
    "title": "Custom Pipes",
    "badge": "Pipes",
    "items": [
      {
        "heading": "Overview",
        "content": [
          "Pipes transform display values directly inside your templates without mutating the source data."
        ]
      },
      {
        "heading": "Pure vs Impure Pipes",
        "content": [],
        "table": {
          "headers": [
            "Feature",
            "Pure Pipe (<code>pure: true</code>, Default)",
            "Impure Pipe (<code>pure: false</code>)"
          ],
          "rows": [
            [
              "<strong>Execution Trigger</strong>",
              "Runs <strong>only</strong> when primitive input value changes or object/array reference changes",
              "Runs on <strong>every</strong> Change Detection cycle (keyboard, mouse move, timer)"
            ],
            [
              "<strong>Performance</strong>",
              "High performance &amp; memoized",
              "Potentially costly; must be lightweight"
            ],
            [
              "<strong>Use Case</strong>",
              "Formatting dates, currency, text transforms, filtering immutable arrays",
              "Filtering mutable arrays (e.g., array mutations via <code>.push()</code>)"
            ]
          ]
        }
      },
      {
        "heading": "Custom Pipe Example (Truncate with Options)",
        "content": [
          "<strong>Usage:</strong>"
        ],
        "codeBlocks": [
          {
            "language": "typescript",
            "code": "import { Pipe, PipeTransform } from '@angular/core';\n\n@Pipe({\n  name: 'truncate',\n  standalone: true\n})\nexport class TruncatePipe implements PipeTransform {\n  transform(value: string | null | undefined, limit: number = 30, trail: string = '...'): string {\n    if (!value) return '';\n    return value.length > limit ? value.substring(0, limit) + trail : value;\n  }\n}"
          },
          {
            "language": "html",
            "code": "<p>{{ product.description | truncate:50:'… Read More' }}</p>"
          }
        ]
      }
    ]
  },
  {
    "id": "route-guards",
    "icon": "🛡️",
    "title": "Route Guards",
    "badge": "Routing",
    "items": [
      {
        "heading": "Overview",
        "content": [
          "Route guards control navigation flow: authenticating access, prompting users about unsaved form data, or checking feature flags."
        ]
      },
      {
        "heading": "Guard Types Summary",
        "content": [],
        "table": {
          "headers": [
            "Guard",
            "Interface / Type",
            "Purpose"
          ],
          "rows": [
            [
              "<strong>CanActivate</strong>",
              "<code>CanActivateFn</code>",
              "Blocks navigation to a route (e.g. Auth check)"
            ],
            [
              "<strong>CanActivateChild</strong>",
              "<code>CanActivateChildFn</code>",
              "Protects child sub-routes"
            ],
            [
              "<strong>CanDeactivate</strong>",
              "<code>CanDeactivateFn&lt;T&gt;</code>",
              "Prompts user before leaving with unsaved state"
            ],
            [
              "<strong>CanMatch</strong>",
              "<code>CanMatchFn</code>",
              "Replaces <code>CanLoad</code>; controls if a route pattern matches (feature toggles)"
            ]
          ]
        }
      },
      {
        "heading": "Modern Functional Guards (Angular 15+)",
        "content": [
          "<strong>1. <code>canActivate</code> (Authentication Guard)</strong>",
          "<strong>2. <code>canDeactivate</code> (Unsaved Changes Guard)</strong>",
          "<strong>3. Route Configuration</strong>"
        ],
        "codeBlocks": [
          {
            "language": "typescript",
            "code": "import { inject } from '@angular/core';\nimport { CanActivateFn, Router } from '@angular/router';\nimport { AuthService } from '../services/auth.service';\n\nexport const authGuard: CanActivateFn = (route, state) => {\n  const auth = inject(AuthService);\n  const router = inject(Router);\n\n  if (auth.isAuthenticated()) {\n    return true;\n  }\n\n  // Redirect to login with returnUrl\n  return router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } });\n};"
          },
          {
            "language": "typescript",
            "code": "import { CanDeactivateFn } from '@angular/router';\n\nexport interface HasUnsavedChanges {\n  hasUnsavedChanges(): boolean;\n}\n\nexport const unsavedChangesGuard: CanDeactivateFn<HasUnsavedChanges> = (component) => {\n  if (component.hasUnsavedChanges && component.hasUnsavedChanges()) {\n    return confirm('You have unsaved changes. Are you sure you want to discard them?');\n  }\n  return true;\n};"
          },
          {
            "language": "typescript",
            "code": "export const routes: Routes = [\n  {\n    path: 'admin',\n    loadComponent: () => import('./admin/admin.component').then(m => m.AdminComponent),\n    canActivate: [authGuard]\n  },\n  {\n    path: 'editor',\n    loadComponent: () => import('./editor/editor.component').then(m => m.EditorComponent),\n    canDeactivate: [unsavedChangesGuard]\n  }\n];"
          }
        ]
      }
    ]
  },
  {
    "id": "route-resolvers",
    "icon": "⚡",
    "title": "Route Resolvers",
    "badge": "Routing",
    "items": [
      {
        "heading": "Overview",
        "content": [
          "Resolvers fetch required API data <strong>before</strong> the destination route activates, eliminating blank screens and in-component loading spinners.",
          "<strong>Route Registration &amp; Component Access:</strong>"
        ],
        "codeBlocks": [
          {
            "language": "typescript",
            "code": "import { inject } from '@angular/core';\nimport { ResolveFn, ActivatedRouteSnapshot } from '@angular/router';\nimport { UserService, UserProfile } from '../services/user.service';\n\nexport const userProfileResolver: ResolveFn<UserProfile> = (route: ActivatedRouteSnapshot) => {\n  const userId = route.paramMap.get('id')!;\n  return inject(UserService).getUserById(userId);\n};"
          },
          {
            "language": "typescript",
            "code": "// Route:\n{\n  path: 'user/:id',\n  component: UserProfileComponent,\n  resolve: { profile: userProfileResolver }\n}\n\n// In UserProfileComponent:\nexport class UserProfileComponent implements OnInit {\n  private route = inject(ActivatedRoute);\n  userProfile!: UserProfile;\n\n  ngOnInit() {\n    this.userProfile = this.route.snapshot.data['profile'];\n    \n    // Or reactively to respond to parameter changes:\n    this.route.data.subscribe(data => {\n      this.userProfile = data['profile'];\n    });\n  }\n}"
          }
        ]
      }
    ]
  },
  {
    "id": "component-lifecycle-modern-cleanup",
    "icon": "♻️",
    "title": "Component Lifecycle & Modern Cleanup",
    "badge": "Architecture",
    "items": [
      {
        "heading": "Overview",
        "content": [
          "Angular manages the lifecycle of components from creation, change detection, view rendering, through destruction."
        ],
        "codeBlocks": [
          {
            "language": "typescript",
            "code": "       ┌────────────────────────┐\n       │      constructor       │ (Dependency injection only; no DOM / API calls)\n       └───────────┬────────────┘\n                   ▼\n       ┌────────────────────────┐\n       │      ngOnChanges       │ (Called whenever @Input() bindings change)\n       └───────────┬────────────┘\n                   ▼\n       ┌────────────────────────┐\n       │        ngOnInit        │ (Component initialized; prime location for HTTP requests)\n       └───────────┬────────────┘\n                   ▼\n       ┌────────────────────────┐\n       │       ngDoCheck        │ (Custom change detection check)\n       └───────────┬────────────┘\n                   ▼\n       ┌────────────────────────┐\n       │   ngAfterContentInit   │ (Projected content <ng-content> initialized)\n       └───────────┬────────────┘\n                   ▼\n       ┌────────────────────────┐\n       │   ngAfterViewInit      │ (Component template and child views initialized)\n       └───────────┬────────────┘\n                   ▼\n       ┌────────────────────────┐\n       │      ngOnDestroy       │ (Cleanup: unsubscribe observables, stop timers)\n       └────────────────────────┘"
          }
        ]
      },
      {
        "heading": "Modern Subscription Cleanup (DestroyRef & takeUntilDestroyed)",
        "content": [
          "Instead of writing boilerplate <code>ngOnDestroy</code> with <code>Subject</code> and <code>takeUntil</code>, Angular 16+ provides <code>takeUntilDestroyed</code>:"
        ],
        "codeBlocks": [
          {
            "language": "typescript",
            "code": "import { Component, OnInit, inject, DestroyRef } from '@angular/core';\nimport { takeUntilDestroyed } from '@angular/core/rxjs-interop';\nimport { interval } from 'rxjs';\n\n@Component({\n  selector: 'app-timer',\n  standalone: true,\n  template: `<p>Seconds: {{ seconds }}</p>`\n})\nexport class TimerComponent implements OnInit {\n  seconds = 0;\n  private destroyRef = inject(DestroyRef); // Injectable anywhere!\n\n  ngOnInit() {\n    // Automatically unsubscribes when this component is destroyed:\n    interval(1000)\n      .pipe(takeUntilDestroyed(this.destroyRef))\n      .subscribe(val => (this.seconds = val));\n\n    // Register custom teardown logic\n    this.destroyRef.onDestroy(() => {\n      console.log('TimerComponent cleaned up successfully!');\n    });\n  }\n}"
          }
        ]
      }
    ]
  },
  {
    "id": "dependency-injection-di-architecture-how-di-works",
    "icon": "💉",
    "title": "Dependency Injection (DI) Architecture & How DI Works",
    "badge": "Architecture",
    "items": [
      {
        "heading": "Overview",
        "content": [
          "Dependency Injection (DI) is a core design pattern in Angular where a class requests dependencies from external sources rather than creating them directly with <code>new</code>."
        ]
      },
      {
        "heading": "1. How DI Works Under the Hood",
        "content": [
          "Angular&#39;s DI system consists of 4 foundational building blocks:",
          "• <strong>Consumer:</strong> The component, directive, pipe, or service that requires a dependency.",
          "• <strong>Token:</strong> The unique lookup key (usually a TypeScript class type like <code>UserService</code> or an <code>InjectionToken&lt;T&gt;</code>).",
          "• <strong>Provider:</strong> A registration that tells the Injector <em>how</em> to instantiate and configure the dependency.",
          "• <strong>Injector:</strong> The container holding the token-to-instance registry that resolves and caches instances."
        ],
        "codeBlocks": [
          {
            "language": "typescript",
            "code": "┌──────────────┐         1. Requests Token         ┌──────────────┐\n│   Consumer   │ ────────────────────────────────► │   Injector   │\n│ (Component / │                                   └──────┬───────┘\n│   Service)   │ ◄────────────────────────────────────────┘\n└──────────────┘         4. Returns Instance\n                                  ▲\n                                  │ 2. Finds Provider Recipe\n                                  ▼\n                         ┌─────────────────┐\n                         │    Provider     │ ──► 3. Instantiates Dependency\n                         │ (Recipe / Value)│\n                         └─────────────────┘"
          }
        ]
      },
      {
        "heading": "2. The Injector Hierarchy & Lookup Resolution Algorithm",
        "content": [
          "Angular organizes injectors into a <strong>two-tiered hierarchical tree</strong>:",
          "• <strong>Environment/Module Injector Tree:</strong> Root (<code>providedIn: &#39;root&#39;</code>) -&gt; Platform -&gt; NullInjector.",
          "• <strong>Element/Component Injector Tree:</strong> Built implicitly for each DOM element with directives/components (<code>providers: [...]</code> or <code>viewProviders: [...]</code>).",
          "<strong>Lookup Algorithm (Bubble-Up Resolution):</strong>",
          "When a component requests a dependency:",
          "• Angular starts searching at the <strong>Element Injector</strong> of the current component.",
          "• If not found, it traverses upward through the <strong>parent Element Injectors</strong>.",
          "• If not found at the root component element, it switches to the <strong>Environment Injector</strong> (Route/Module scope).",
          "• Next, it checks the <strong>Root Injector</strong> (<code>providedIn: &#39;root&#39;</code>).",
          "• Then the <strong>Platform Injector</strong> (shared across applications, e.g. <code>DomSanitizer</code>).",
          "• If still not found, it reaches the <strong>NullInjector</strong>, which throws:<br><code>NullInjectorError: No provider for Token!</code>."
        ],
        "codeBlocks": [
          {
            "language": "typescript",
            "code": "[Child Component Element Injector]\n  │ (Not found? Bubble up)\n  ▼\n[Parent Component Element Injector]\n  │ (Not found? Bubble up)\n  ▼\n[Root Component Element Injector]\n  │ (Switch to Environment Hierarchy)\n  ▼\n[Environment / Route Injector]\n  │\n  ▼\n[Root Injector (providedIn: 'root')] ──► (Singleton across app)\n  │\n  ▼\n[Platform Injector]\n  │\n  ▼\n[NullInjector] ──► Throws NullInjectorError!"
          }
        ]
      },
      {
        "heading": "3. Provider Recipes (provide: ...)",
        "content": [
          "You can customize how Angular constructs any token using provider configuration objects:"
        ],
        "codeBlocks": [
          {
            "language": "typescript",
            "code": "export const APP_PROVIDERS = [\n  // 1. useClass: Creates an instance of a specified class\n  { provide: LoggerService, useClass: BetterLoggerService },\n\n  // 2. useValue: Injects a static value, constant, or configuration object\n  { provide: API_URL_TOKEN, useValue: 'https://api.myapp.com/v1' },\n\n  // 3. useExisting: Creates an alias pointing to an existing singleton\n  { provide: OldLogger, useExisting: LoggerService },\n\n  // 4. useFactory: Dynamic creation with custom initialization logic and dependencies\n  {\n    provide: AuthService,\n    useFactory: (http: HttpClient, config: AppConfig) => {\n      return config.isMockAuth ? new MockAuthService() : new RealAuthService(http);\n    },\n    deps: [HttpClient, AppConfigToken]\n  }\n];"
          }
        ]
      },
      {
        "heading": "4. InjectionToken<T> for Non-Class Dependencies",
        "content": [
          "TypeScript interfaces and primitives do not exist at JavaScript runtime, so they cannot be used as injection tokens. Use <code>InjectionToken&lt;T&gt;</code>:"
        ],
        "codeBlocks": [
          {
            "language": "typescript",
            "code": "import { InjectionToken, inject } from '@angular/core';\n\nexport interface AppConfig {\n  apiUrl: string;\n  retryAttempts: number;\n}\n\n// 1. Create the token\nexport const APP_CONFIG = new InjectionToken<AppConfig>('app.config', {\n  providedIn: 'root',\n  factory: () => ({ apiUrl: 'https://api.example.com', retryAttempts: 3 })\n});\n\n// 2. Inject using modern inject() or @Inject()\n@Component({...})\nexport class UserComponent {\n  private config = inject(APP_CONFIG);\n}"
          }
        ]
      },
      {
        "heading": "5. Resolution Modifiers (@Optional, @Self, @SkipSelf, @Host)",
        "content": [
          "Modifiers control where the injector starts and stops its lookup:"
        ],
        "codeBlocks": [
          {
            "language": "typescript",
            "code": "constructor(\n  // @Optional: Does not throw error if missing; injects null instead\n  @Optional() private logger?: LoggerService,\n\n  // @Self: Only searches current element's injector; does NOT bubble up\n  @Self() private validator?: CustomValidatorDirective,\n\n  // @SkipSelf: Skips current element and starts searching from the parent element\n  @SkipSelf() private parentService?: ParentService,\n\n  // @Host: Stops searching when reaching the host component that rendered the template\n  @Host() private formGroup?: FormGroupDirective\n) {}"
          }
        ]
      },
      {
        "heading": "6. Constructor Injection vs Modern inject() Function",
        "content": [
          "In Angular 14+, the <code>inject()</code> function replaces constructor boilerplate and works in functions, factory providers, and functional route guards:"
        ],
        "codeBlocks": [
          {
            "language": "typescript",
            "code": "@Component({...})\nexport class ProductListComponent {\n  // Modern inject(): Clean, typed, works inside functional guards and initialization logic\n  private cartService = inject(CartService);\n  private router = inject(Router);\n  private config = inject(APP_CONFIG);\n}"
          }
        ]
      }
    ]
  },
  {
    "id": "change-detection-angular-performance-optimization",
    "icon": "🚀",
    "title": "Change Detection & Angular Performance Optimization",
    "badge": "Performance",
    "items": [
      {
        "heading": "Overview",
        "content": [
          "Ensuring peak performance and 60 FPS in Angular applications requires understanding how change detection works and implementing modern optimization patterns."
        ]
      },
      {
        "heading": "1. Change Detection: Default vs OnPush",
        "content": [
          "<strong>OnPush in Action with Immutable Data:</strong>",
          "<blockquote><strong>Rule for OnPush:</strong> Always pass <strong>new object references</strong> (immutable updates using spread <code>{ ...user, role: &#39;Admin&#39; }</code>) to trigger OnPush input detection! Mutating a property directly (<code>user.role = &#39;Admin&#39;</code>) will <strong>not</strong> trigger change detection.</blockquote>"
        ],
        "codeBlocks": [
          {
            "language": "typescript",
            "code": "@Component({\n  selector: 'app-user-card',\n  standalone: true,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  template: `<div>{{ user.name }} ({{ user.role }})</div>`\n})\nexport class UserCardComponent {\n  @Input({ required: true }) user!: { id: string; name: string; role: string };\n}"
          }
        ],
        "table": {
          "headers": [
            "Feature",
            "<code>ChangeDetectionStrategy.Default</code>",
            "<code>ChangeDetectionStrategy.OnPush</code>"
          ],
          "rows": [
            [
              "<strong>Tree Traversal</strong>",
              "Checks <strong>all</strong> components in the tree from root to leaf on every async event (click, timer, HTTP)",
              "Skips component sub-tree unless explicitly marked dirty"
            ],
            [
              "<strong>When it runs</strong>",
              "Any Zone.js event",
              "1. <code>@Input()</code> reference changes (<code>prev !== curr</code>)<br>2. Event originating from component/children<br>3. <code>async</code> pipe emits<br>4. Signal updates (v16+)<br>5. Manual <code>ChangeDetectorRef</code> call"
            ],
            [
              "<strong>Performance</strong>",
              "Slower in large applications",
              "Extremely fast, predictable &amp; optimal"
            ]
          ]
        }
      },
      {
        "heading": "2. trackBy in *ngFor vs Mandatory track in @for",
        "content": [
          "<strong>The Problem:</strong>",
          "Without tracking, whenever an array changes (items added, reordered, or refreshed from API), Angular destroys and recreates <strong>all</strong> DOM elements in the list! This causes UI flickering, loss of input focus, scroll jumps, and heavy rendering overhead.",
          "<strong>Legacy <code>*ngFor</code> with <code>trackBy</code>:</strong>",
          "<strong>Modern Angular 17+ <code>@for</code> (Mandatory <code>track</code> Expression):</strong>",
          "Angular 17 made tracking <strong>mandatory</strong>, eliminating <code>trackBy</code> boilerplate and performing up to <strong>90% faster</strong>:"
        ],
        "codeBlocks": [
          {
            "language": "typescript",
            "code": "@Component({\n  template: `\n    <li *ngFor=\"let item of items; trackBy: trackById\">\n      {{ item.name }}\n    </li>\n  `\n})\nexport class ListComponent {\n  items = [{ id: 1, name: 'Laptop' }, { id: 2, name: 'Phone' }];\n\n  trackById(index: number, item: { id: number; name: string }): number {\n    return item.id;\n  }\n}"
          },
          {
            "language": "html",
            "code": "<ul>\n  @for (item of items; track item.id; let idx = $index) {\n    <li>#{{ idx + 1 }}: {{ item.name }}</li>\n  } @empty {\n    <li>No items available.</li>\n  }\n</ul>"
          }
        ]
      },
      {
        "heading": "3. Template Performance: Pure Pipes vs Calling Methods in Templates",
        "content": [
          "• ❌ <strong>Anti-Pattern (Method in template):</strong>\n<code>html &lt;!-- BAD: calculateDiscount() runs on EVERY SINGLE Change Detection tick! --&gt; &lt;p&gt;{{ calculateDiscount(product.price) }}&lt;/p&gt; </code>",
          "• ✅ <strong>Best Practice (Pure Pipe):</strong> Pure pipes are memoized; they only re-execute when their input primitive or reference changes:\n<code>html &lt;!-- GOOD: Only runs when product.price changes --&gt; &lt;p&gt;{{ product.price | discount }}&lt;/p&gt; </code>"
        ]
      },
      {
        "heading": "4. Running Outside Angular (NgZone.runOutsideAngular)",
        "content": [
          "For high-frequency events (mouse move, window scroll, canvas rendering, WebSockets, D3 animations), Zone.js triggers change detection on every event. Run them outside Angular:"
        ],
        "codeBlocks": [
          {
            "language": "typescript",
            "code": "import { Component, ElementRef, OnInit, inject, NgZone } from '@angular/core';\n\n@Component({\n  selector: 'app-canvas-animation',\n  standalone: true,\n  template: `<canvas #canvas></canvas>`\n})\nexport class CanvasAnimationComponent implements OnInit {\n  private ngZone = inject(NgZone);\n  private el = inject(ElementRef);\n\n  ngOnInit() {\n    // Run high-frequency loop completely outside Angular's zone:\n    this.ngZone.runOutsideAngular(() => {\n      this.el.nativeElement.addEventListener('mousemove', (e: MouseEvent) => {\n        // Does NOT trigger Angular change detection!\n        this.renderParticles(e.clientX, e.clientY);\n      });\n    });\n  }\n\n  private renderParticles(x: number, y: number) { /* Heavy canvas calculations */ }\n}"
          }
        ]
      },
      {
        "heading": "5. Image Optimization with NgOptimizedImage",
        "content": [
          "The <code>NgOptimizedImage</code> directive enforces web performance best practices (LCP optimization, automatic <code>srcset</code>, layout shift prevention):"
        ],
        "codeBlocks": [
          {
            "language": "html",
            "code": "<!-- Automatically lazy-loaded, responsive, prevents Cumulative Layout Shift (CLS) -->\n<img [ngSrc]=\"product.imageUrl\" width=\"400\" height=\"300\" alt=\"Product\" />\n\n<!-- For Largest Contentful Paint (Hero/Banner): Set priority to preload immediately -->\n<img [ngSrc]=\"heroBanner\" width=\"1200\" height=\"600\" priority alt=\"Hero Banner\" />"
          }
        ]
      },
      {
        "heading": "6. Comprehensive Performance Optimization Checklist",
        "content": [],
        "table": {
          "headers": [
            "Technique",
            "How it Improves Performance"
          ],
          "rows": [
            [
              "<strong><code>OnPush</code> Strategy</strong>",
              "Skips change detection for entire component sub-trees unless inputs change"
            ],
            [
              "<strong><code>track</code> in <code>@for</code></strong>",
              "Diffing lists by unique ID prevents recreating unaffected DOM nodes"
            ],
            [
              "<strong>Pure Pipes</strong>",
              "Memoizes calculation results; prevents function execution on every CD cycle"
            ],
            [
              "<strong><code>@defer</code> Blocks</strong>",
              "Lazy-loads JS chunks and template markup only when scrolled into view"
            ],
            [
              "<strong>Route-level Lazy Loading</strong>",
              "<code>loadComponent: () =&gt; import(...)</code> splits code into small on-demand bundles"
            ],
            [
              "<strong><code>NgOptimizedImage</code></strong>",
              "Preloads LCP images, lazy-loads off-screen images, enforces dimensions"
            ],
            [
              "<strong><code>NgZone.runOutsideAngular</code></strong>",
              "Bypasses Zone.js change detection for rapid events (scroll, mousemove)"
            ],
            [
              "<strong><code>takeUntilDestroyed</code></strong>",
              "Prevents memory leaks by automatically tearing down unneeded subscriptions"
            ]
          ]
        }
      }
    ]
  },
  {
    "id": "content-projection-templates",
    "icon": "📦",
    "title": "Content Projection & Templates",
    "badge": "Templates",
    "items": [
      {
        "heading": "Overview",
        "content": [
          "Techniques for building reusable, flexible components."
        ]
      },
      {
        "heading": "1. ng-content (Multi-Slot Content Projection)",
        "content": [
          "Allows consumer components to pass HTML content into specific slots inside child components.",
          "<strong>Consumer Usage:</strong>"
        ],
        "codeBlocks": [
          {
            "language": "html",
            "code": "<!-- Card Component Template (card.component.html) -->\n<div class=\"card\">\n  <div class=\"card-header\">\n    <ng-content select=\"[card-title]\"></ng-content>\n  </div>\n  <div class=\"card-body\">\n    <ng-content select=\"[card-body]\"></ng-content>\n  </div>\n  <div class=\"card-footer\">\n    <ng-content select=\"[card-footer]\"></ng-content>\n  </div>\n</div>"
          },
          {
            "language": "html",
            "code": "<app-card>\n  <h2 card-title>User Profile</h2>\n  <p card-body>Arjun Khade - Full Stack Developer</p>\n  <button card-footer>Save</button>\n</app-card>"
          }
        ]
      },
      {
        "heading": "2. ng-container",
        "content": [
          "An invisible grouping tag. Applies structural directives without adding unnecessary wrapper elements (like extra <code>&lt;div&gt;</code>s) to the DOM."
        ],
        "codeBlocks": [
          {
            "language": "html",
            "code": "<ng-container *ngIf=\"user\">\n  <p>Name: {{ user.name }}</p>\n  <p>Role: {{ user.role }}</p>\n</ng-container>"
          }
        ]
      },
      {
        "heading": "3. ng-template & ngTemplateOutlet",
        "content": [
          "<code>ng-template</code> holds markup that is never rendered by default. <code>ngTemplateOutlet</code> instantiates and dynamically injects templates with custom contexts."
        ],
        "codeBlocks": [
          {
            "language": "html",
            "code": "<!-- Define the template with context variables -->\n<ng-template #customItem let-item=\"item\" let-i=\"index\">\n  <li class=\"item\">{{ i + 1 }}. {{ item.name }} ({{ item.price | currency }})</li>\n</ng-template>\n\n<!-- Render template dynamically using ngTemplateOutlet -->\n<ul>\n  @for (prod of products; track prod.id; let idx = $index) {\n    <ng-container \n      *ngTemplateOutlet=\"customItem; context: { item: prod, index: idx }\">\n    </ng-container>\n  }\n</ul>"
          }
        ]
      }
    ]
  },
  {
    "id": "modern-control-flow-angular-17",
    "icon": "🔀",
    "title": "Modern Control Flow (Angular 17+)",
    "badge": "Angular 17+",
    "items": [
      {
        "heading": "Overview",
        "content": [
          "Angular 17 introduced declarative built-in control flow syntax replacing legacy <code>*ngIf</code>, <code>*ngFor</code>, and <code>*ngSwitch</code>."
        ]
      },
      {
        "heading": "1. @if / @else if / @else",
        "content": [],
        "codeBlocks": [
          {
            "language": "html",
            "code": "@if (user.role === 'admin') {\n  <app-admin-panel />\n} @else if (user.role === 'editor') {\n  <app-editor-panel />\n} @else {\n  <p>Standard Viewer Access</p>\n}"
          }
        ]
      },
      {
        "heading": "2. @for with required track and @empty",
        "content": [
          "The <code>track</code> expression is mandatory and provides performant list diffing without requiring <code>trackBy</code> boilerplate."
        ],
        "codeBlocks": [
          {
            "language": "html",
            "code": "<ul>\n  @for (user of users; track user.id; let idx = $index, count = $count) {\n    <li>#{{ idx + 1 }}/{{ count }}: {{ user.name }}</li>\n  } @empty {\n    <li class=\"no-records\">No users found.</li>\n  }\n</ul>"
          }
        ]
      },
      {
        "heading": "3. @switch / @case / @default",
        "content": [],
        "codeBlocks": [
          {
            "language": "html",
            "code": "@switch (notification.type) {\n  @case ('SUCCESS') { <span class=\"badge green\">Success!</span> }\n  @case ('WARNING') { <span class=\"badge yellow\">Warning</span> }\n  @case ('ERROR')   { <span class=\"badge red\">Critical Error</span> }\n  @default          { <span class=\"badge gray\">Info</span> }\n}"
          }
        ]
      },
      {
        "heading": "4. @defer (Deferred / Lazy Loading Blocks)",
        "content": [
          "Enables lazy-loading parts of the template (and their JS chunks) on demand based on runtime triggers.",
          "<strong>Common Triggers:</strong> <code>on viewport</code>, <code>on idle</code>, <code>on hover(triggerBtn)</code>, <code>on interaction(btn)</code>, <code>when isLoaded</code>."
        ],
        "codeBlocks": [
          {
            "language": "html",
            "code": "@defer (on viewport; prefetch on idle) {\n  <!-- This component chunk only downloads when scrolled into view! -->\n  <app-heavy-analytics-chart [data]=\"chartData\" />\n} @placeholder (minimum 300ms) {\n  <div class=\"skeleton-placeholder\">Scroll down to view chart...</div>\n} @loading (minimum 500ms) {\n  <div class=\"spinner\">Loading chart package...</div>\n} @error {\n  <p class=\"error\">Failed to load chart component.</p>\n}"
          }
        ]
      }
    ]
  },
  {
    "id": "modern-angular-features-v14-v18-angular-signals",
    "icon": "📡",
    "title": "Modern Angular Features (v14 – v18+) & Angular Signals",
    "badge": "Signals",
    "items": [
      {
        "heading": "Overview",
        "content": [
          "Angular has undergone a complete renaissance from Angular 14 through Angular 18+, transitioning to a lightweight, standalone-first, and reactivity-driven framework."
        ]
      },
      {
        "heading": "1. Complete Catalog of Modern Angular Features",
        "content": [],
        "table": {
          "headers": [
            "Feature",
            "Introduced",
            "What it Replaced / Solved"
          ],
          "rows": [
            [
              "<strong>Standalone Components</strong>",
              "Angular 14/15",
              "Eliminated <code>NgModule</code> boilerplate; components directly import dependencies"
            ],
            [
              "<strong><code>inject()</code> Function</strong>",
              "Angular 14",
              "Replaces constructor injection; usable in functions, factory providers, and guards"
            ],
            [
              "<strong>Functional Guards &amp; Resolvers</strong>",
              "Angular 15",
              "Replaced class-based <code>CanActivate</code> and <code>Resolve</code> interfaces with lightweight functions"
            ],
            [
              "<strong>Directive Composition API</strong>",
              "Angular 15",
              "Allows components to inherit host behaviors from other directives without class inheritance"
            ],
            [
              "<strong><code>DestroyRef</code> &amp; <code>takeUntilDestroyed</code></strong>",
              "Angular 16",
              "Replaces repetitive <code>ngOnDestroy</code> + <code>Subject</code> unsubscribe boilerplate"
            ],
            [
              "<strong>Angular Signals</strong>",
              "Angular 16+",
              "Introduced granular, fine-grained reactivity with zero Zone.js overhead"
            ],
            [
              "<strong>Non-Destructive Hydration</strong>",
              "Angular 16/17",
              "Reuses server-rendered DOM instead of destroying and re-rendering on client load"
            ],
            [
              "<strong>Built-in Control Flow (<code>@if</code>, <code>@for</code>, <code>@switch</code>)</strong>",
              "Angular 17",
              "Replaces <code>*ngIf</code>, <code>*ngFor</code>, <code>*ngSwitch</code> with performant compiler syntax"
            ],
            [
              "<strong>Deferrable Views (<code>@defer</code>)</strong>",
              "Angular 17",
              "Zero-boilerplate lazy loading of template sections based on triggers"
            ],
            [
              "<strong>Vite / esbuild Application Builder</strong>",
              "Angular 17",
              "Up to 80% faster build times using esbuild/Vite instead of Webpack"
            ],
            [
              "<strong>Signal Inputs, Outputs &amp; Models</strong>",
              "Angular 17.1+ / 18",
              "<code>input()</code>, <code>output()</code>, and <code>model()</code> replacing <code>@Input()</code>, <code>@Output()</code>, two-way binding"
            ],
            [
              "<strong>Signal Queries (<code>viewChild</code>, <code>contentChild</code>)</strong>",
              "Angular 17.2+ / 18",
              "Signals-based DOM/view queries replacing <code>@ViewChild</code>, <code>@ContentChild</code>"
            ],
            [
              "<strong>Experimental Zoneless Support</strong>",
              "Angular 18",
              "<code>provideExperimentalZonelessChangeDetection()</code> removes <code>Zone.js</code> completely!"
            ]
          ]
        }
      },
      {
        "heading": "2. Angular Signals: Fine-Grained Reactivity",
        "content": [
          "A <strong>Signal</strong> is a reactive wrapper around a value that notifies consumers whenever that value changes. Unlike RxJS (which is push-based over time) or Zone.js (which dirties entire trees), Signals enable <strong>fine-grained reactivity</strong>: Angular knows <em>precisely</em> where in the template a value changed and updates only that specific DOM node.",
          "<strong>Reading a Signal:</strong>",
          "A Signal is accessed by calling it as a function: <code>count()</code>."
        ]
      },
      {
        "heading": "3. Types of Signals",
        "content": [
          "<strong>1. Writable Signals (<code>signal()</code>)</strong>",
          "A signal whose value can be read and updated directly:",
          "<strong>2. Computed Signals (<code>computed()</code>)</strong>",
          "A read-only signal derived from other signals.",
          "• <strong>Memoized:</strong> Recalculates only when one of its source signals changes.",
          "• <strong>Lazy:</strong> Calculation is deferred until the computed value is actually read.",
          "<strong>3. Effects (<code>effect()</code>)</strong>",
          "An operation that runs automatically whenever one or more tracked signals change. Used for side-effects:",
          "• Logging / Analytics",
          "• Syncing state to <code>localStorage</code>",
          "• Custom Canvas or DOM mutations",
          "<blockquote><strong>Rule:</strong> Do <strong>not</strong> set other signals inside an <code>effect()</code> unless explicitly necessary (requires <code>{ allowSignalWrites: true }</code>). Use <code>computed()</code> for derived state instead.</blockquote>"
        ],
        "codeBlocks": [
          {
            "language": "typescript",
            "code": "import { Component, signal } from '@angular/core';\n\n@Component({\n  selector: 'app-counter',\n  standalone: true,\n  template: `\n    <p>Count: {{ count() }}</p>\n    <button (click)=\"increment()\">+1</button>\n    <button (click)=\"reset()\">Reset</button>\n  `\n})\nexport class CounterComponent {\n  // 1. Declare writable signal with initial value\n  count = signal<number>(0);\n\n  increment() {\n    // .update(): derives next value from previous value\n    this.count.update(prev => prev + 1);\n  }\n\n  reset() {\n    // .set(): explicitly sets a new value\n    this.count.set(0);\n  }\n\n  // Expose as readonly to external consumers:\n  readonlyCount = this.count.asReadonly();\n}"
          },
          {
            "language": "typescript",
            "code": "import { Component, signal, computed } from '@angular/core';\n\n@Component({\n  selector: 'app-cart-summary',\n  standalone: true,\n  template: `\n    <p>Subtotal: {{ subtotal() | currency }}</p>\n    <p>Tax (10%): {{ tax() | currency }}</p>\n    <h3>Total: {{ total() | currency }}</h3>\n  `\n})\nexport class CartSummaryComponent {\n  price = signal(100);\n  quantity = signal(2);\n\n  // Computed signals:\n  subtotal = computed(() => this.price() * this.quantity());\n  tax = computed(() => this.subtotal() * 0.10);\n  total = computed(() => this.subtotal() + this.tax());\n}"
          },
          {
            "language": "typescript",
            "code": "import { Component, signal, effect } from '@angular/core';\n\n@Component({ ... })\nexport class SettingsComponent {\n  theme = signal<'light' | 'dark'>('light');\n\n  constructor() {\n    // Effect automatically re-runs whenever theme() changes:\n    effect(() => {\n      console.log(`Theme updated to: ${this.theme()}`);\n      localStorage.setItem('user-theme', this.theme());\n      document.body.className = this.theme();\n    });\n  }\n}"
          }
        ]
      },
      {
        "heading": "4. Modern Signal-Based Component APIs (Angular 17+ / 18)",
        "content": [
          "Replace legacy <code>@Input()</code>, <code>@Output()</code>, and <code>@ViewChild()</code> decorators with functional Signal equivalents:"
        ],
        "codeBlocks": [
          {
            "language": "typescript",
            "code": "import { Component, input, output, model, viewChild, ElementRef } from '@angular/core';\n\n@Component({\n  selector: 'app-user-profile',\n  standalone: true,\n  template: `\n    <input #searchBox placeholder=\"Search...\" />\n    <p>User: {{ username() }}</p>\n    <button (click)=\"toggleActive()\">Toggle Active</button>\n  `\n})\nexport class UserProfileComponent {\n  // 1. Signal Inputs (Replaces @Input)\n  username = input.required<string>(); // Mandatory input\n  role = input<string>('Guest');       // Optional input with default\n\n  // 2. Signal Model (Two-way binding [(active)]=\"isActive\")\n  active = model<boolean>(false);\n\n  // 3. Signal Output (Replaces @Output EventEmitter)\n  roleChanged = output<string>();\n\n  // 4. Signal Queries (Replaces @ViewChild)\n  searchBox = viewChild<ElementRef<HTMLInputElement>>('searchBox');\n\n  toggleActive() {\n    this.active.update(val => !val); // Automatically updates parent binding!\n    this.roleChanged.emit(this.role());\n  }\n\n  focusSearch() {\n    this.searchBox()?.nativeElement.focus();\n  }\n}"
          }
        ]
      },
      {
        "heading": "5. RxJS Interoperability (toSignal & toObservable)",
        "content": [
          "Angular seamlessly bridges RxJS Observables and Signals using <code>@angular/core/rxjs-interop</code>:"
        ],
        "codeBlocks": [
          {
            "language": "typescript",
            "code": "import { Component, inject, signal } from '@angular/core';\nimport { toSignal, toObservable } from '@angular/core/rxjs-interop';\nimport { HttpClient } from '@angular/common/http';\nimport { switchMap } from 'rxjs/operators';\n\nexport interface Product { id: number; name: string; }\n\n@Component({\n  selector: 'app-products',\n  standalone: true,\n  template: `\n    <ul>\n      @for (prod of products(); track prod.id) {\n        <li>{{ prod.name }}</li>\n      }\n    </ul>\n  `\n})\nexport class ProductComponent {\n  private http = inject(HttpClient);\n\n  // 1. toSignal: Converts an Observable into a Signal (auto-subscribes and auto-unsubscribes!)\n  products = toSignal(\n    this.http.get<Product[]>('/api/products'),\n    { initialValue: [] }\n  );\n\n  // 2. toObservable: Converts a Signal into an Observable to use RxJS operators:\n  searchQuery = signal('laptop');\n  searchQuery$ = toObservable(this.searchQuery);\n\n  searchResults$ = this.searchQuery$.pipe(\n    switchMap(query => this.http.get<Product[]>(`/api/search?q=${query}`))\n  );\n}"
          }
        ]
      }
    ]
  },
  {
    "id": "angular-forms",
    "icon": "📝",
    "title": "Angular Forms",
    "badge": "Forms",
    "items": [
      {
        "heading": "Overview",
        "content": [
          "Angular provides two distinct paradigms for capturing user input: <strong>Template-Driven</strong> and <strong>Reactive Forms</strong>."
        ]
      },
      {
        "heading": "Template-Driven vs Reactive Forms",
        "content": [],
        "table": {
          "headers": [
            "Feature",
            "Template-Driven Forms",
            "Reactive Forms (Preferred)"
          ],
          "rows": [
            [
              "<strong>Setup</strong>",
              "<code>FormsModule</code>",
              "<code>ReactiveFormsModule</code>"
            ],
            [
              "<strong>Source of Truth</strong>",
              "HTML Template (<code>[(ngModel)]</code>, <code>ngForm</code>)",
              "Component TypeScript model (<code>FormGroup</code>, <code>FormControl</code>)"
            ],
            [
              "<strong>Immutability</strong>",
              "Mutable state",
              "Immutable structured data streams"
            ],
            [
              "<strong>Validation</strong>",
              "HTML directives (<code>required</code>, <code>minlength</code>)",
              "Pure TypeScript functions (<code>Validators.required</code>)"
            ],
            [
              "<strong>Scalability</strong>",
              "Small, simple forms",
              "Complex, dynamic, enterprise-scale forms"
            ]
          ]
        }
      },
      {
        "heading": "Reactive Forms with FormArray & Nested Groups",
        "content": [],
        "codeBlocks": [
          {
            "language": "typescript",
            "code": "import { Component, inject } from '@angular/core';\nimport { FormBuilder, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';\nimport { CommonModule } from '@angular/common';\n\n@Component({\n  selector: 'app-user-form',\n  standalone: true,\n  imports: [ReactiveFormsModule, CommonModule],\n  templateUrl: './user-form.component.html'\n})\nexport class UserFormComponent {\n  private fb = inject(FormBuilder);\n\n  userForm = this.fb.group({\n    username: ['', [Validators.required, Validators.minLength(3)]],\n    email: ['', [Validators.required, Validators.email]],\n    // FormArray for dynamic list of phone numbers:\n    phoneNumbers: this.fb.array([\n      this.fb.control('', [Validators.required, Validators.pattern(/^[0-9]{10}$/)])\n    ])\n  });\n\n  get phoneNumbers(): FormArray {\n    return this.userForm.get('phoneNumbers') as FormArray;\n  }\n\n  addPhone() {\n    this.phoneNumbers.push(this.fb.control('', [Validators.required]));\n  }\n\n  removePhone(index: number) {\n    this.phoneNumbers.removeAt(index);\n  }\n\n  onSubmit() {\n    if (this.userForm.valid) {\n      console.log('Submitted Data:', this.userForm.value);\n    }\n  }\n}"
          }
        ]
      },
      {
        "heading": "Custom Validators: Synchronous vs Asynchronous",
        "content": [
          "<strong>1. Custom Synchronous Validator (No Forbidden Names)</strong>",
          "<strong>2. Custom Asynchronous Validator (Check Username Availability via API)</strong>",
          "Async validators return <code>Observable&lt;ValidationErrors | null&gt;</code> or <code>Promise&lt;ValidationErrors | null&gt;</code>."
        ],
        "codeBlocks": [
          {
            "language": "typescript",
            "code": "import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';\n\nexport function forbiddenNameValidator(forbiddenName: RegExp): ValidatorFn {\n  return (control: AbstractControl): ValidationErrors | null => {\n    const isForbidden = forbiddenName.test(control.value);\n    return isForbidden ? { forbiddenName: { value: control.value } } : null;\n  };\n}"
          },
          {
            "language": "typescript",
            "code": "import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';\nimport { Observable, of, timer } from 'rxjs';\nimport { map, switchMap, catchError } from 'rxjs/operators';\nimport { UserService } from '../services/user.service';\n\nexport function usernameAvailableValidator(userService: UserService): AsyncValidatorFn {\n  return (control: AbstractControl): Observable<ValidationErrors | null> => {\n    if (!control.value) return of(null);\n\n    // Debounce user keystrokes by 400ms before calling backend API:\n    return timer(400).pipe(\n      switchMap(() => userService.checkUsernameExists(control.value)),\n      map(isTaken => (isTaken ? { usernameTaken: true } : null)),\n      catchError(() => of(null))\n    );\n  };\n}"
          }
        ]
      }
    ]
  },
  {
    "id": "observables-subjects-state-streams",
    "icon": "🌊",
    "title": "Observables, Subjects & State Streams",
    "badge": "RxJS Streams",
    "items": [
      {
        "heading": "Overview",
        "content": [
          "RxJS powers reactive programming in Angular. Understanding the difference between stream types is critical."
        ]
      },
      {
        "heading": "Observable vs Subject vs BehaviorSubject",
        "content": [],
        "table": {
          "headers": [
            "Feature",
            "Observable",
            "Subject",
            "BehaviorSubject",
            "ReplaySubject"
          ],
          "rows": [
            [
              "<strong>Stream Type</strong>",
              "Cold (executes per subscriber)",
              "Hot (multicast)",
              "Hot (multicast)",
              "Hot (multicast)"
            ],
            [
              "<strong>Initial Value</strong>",
              "None",
              "No default value",
              "<strong>Requires</strong> default value",
              "None"
            ],
            [
              "<strong>Late Subscriber Value</strong>",
              "Runs producer from start",
              "Misses past emissions",
              "Receives <strong>latest</strong> emitted value immediately",
              "Receives <em>n</em> past buffered values"
            ],
            [
              "<strong>Read Value Directly?</strong>",
              "No",
              "No",
              "Yes via <code>.getValue()</code>",
              "No"
            ],
            [
              "<strong>Primary Use Case</strong>",
              "HTTP calls, timer events",
              "Event bus, notifying actions",
              "Store/State management, auth status",
              "Caching history of items"
            ]
          ]
        }
      },
      {
        "heading": "Real-World Service Store using BehaviorSubject",
        "content": [],
        "codeBlocks": [
          {
            "language": "typescript",
            "code": "import { Injectable } from '@angular/core';\nimport { BehaviorSubject, Observable } from 'rxjs';\nimport { map } from 'rxjs/operators';\n\nexport interface User {\n  id: string;\n  name: string;\n}\n\n@Injectable({ providedIn: 'root' })\nexport class UserStateService {\n  // 1. Private BehaviorSubject with default initial value\n  private userSubject = new BehaviorSubject<User | null>(null);\n\n  // 2. Public readonly Observable stream exposed to components\n  user$: Observable<User | null> = this.userSubject.asObservable();\n\n  // 3. Derived state using RxJS map\n  isLoggedIn$: Observable<boolean> = this.user$.pipe(map(user => !!user));\n\n  // 4. State updates\n  setUser(user: User) {\n    this.userSubject.next(user);\n  }\n\n  logout() {\n    this.userSubject.next(null);\n  }\n\n  // 5. Snapshot read when needed synchronously\n  getCurrentUser(): User | null {\n    return this.userSubject.getValue();\n  }\n}"
          }
        ]
      }
    ]
  },
  {
    "id": "rxjs-operators-guide",
    "icon": "⚙️",
    "title": "RxJS Operators Guide",
    "badge": "Operators Guide",
    "items": [
      {
        "heading": "Overview",
        "content": [
          "RxJS operators allow you to compose, transform, filter, coordinate, and clean up asynchronous data streams."
        ]
      },
      {
        "heading": "1. High-Order Flattening Operators",
        "content": [
          "Flattening operators map an outer observable emission to an inner observable (e.g. mapping an input event stream to an HTTP request).",
          "<strong>1. <code>switchMap</code></strong>",
          "• <strong>Definition:</strong> Cancels the previous inner request when a new emission arrives and only keeps the latest one.",
          "• <strong>Angular Use Case:</strong> Search input autocomplete, live filtering, and route parameter changes (<code>paramMap.pipe(switchMap(...))</code>).",
          "<strong>2. <code>mergeMap</code></strong>",
          "• <strong>Definition:</strong> Runs multiple requests concurrently in parallel without cancellation. Preserves all emissions.",
          "• <strong>Angular Use Case:</strong> Bulk file uploads, concurrent non-blocking API writes.",
          "<blockquote><strong>🔥 Critical Gotcha: What happens if an API call fails in <code>mergeMap</code>?</strong>\nBy default, an unhandled error inside an inner Observable <strong>bubbles up and terminates the entire outer stream immediately</strong>. Any remaining parallel requests or future emissions are killed.\n\n<strong>The Fix (Inner <code>catchError</code>):</strong> Always place <code>catchError</code> <strong>inside the inner Observable</strong> pipeline:\n<code>typescript from(fileList).pipe(   mergeMap(file =&gt;     this.uploadService.upload(file).pipe(       retry({ count: 2, delay: 1000 }),       catchError(error =&gt; {         console.error(`Upload failed for ${file.name}:`, error);         return of({ file: file.name, status: &#39;FAILED&#39;, error: error.message });       })     )   ) ).subscribe(result =&gt; console.log(&#39;Processed:&#39;, result)); </code></blockquote>",
          "<strong>3. <code>concatMap</code></strong>",
          "• <strong>Definition:</strong> Executes requests one after another in strict sequential order. Waits for the previous inner request to complete before beginning the next.",
          "• <strong>Angular Use Case:</strong> Multi-step form submissions, sequential order processing, queueing financial transactions.",
          "<strong>4. <code>exhaustMap</code></strong>",
          "• <strong>Definition:</strong> Ignores new incoming requests while the current inner request is still executing.",
          "• <strong>Angular Use Case:</strong> Login button clicks, payment checkout submissions (prevents duplicate requests caused by accidental double-clicks)."
        ],
        "codeBlocks": [
          {
            "language": "typescript",
            "code": "this.searchControl.valueChanges.pipe(\n  debounceTime(300),\n  distinctUntilChanged(),\n  switchMap(searchTerm => this.productService.search(searchTerm))\n).subscribe(results => (this.products = results));"
          },
          {
            "language": "typescript",
            "code": "from(fileList).pipe(\n  mergeMap(file => this.uploadService.upload(file), 4) // max 4 concurrent requests\n).subscribe(progress => console.log('File upload completed:', progress));"
          },
          {
            "language": "typescript",
            "code": "from(stepPayloads).pipe(\n  concatMap(step => this.wizardService.saveStep(step))\n).subscribe(response => console.log('Step saved:', response));"
          },
          {
            "language": "typescript",
            "code": "fromEvent(this.loginButton.nativeElement, 'click').pipe(\n  exhaustMap(() => this.authService.login(this.loginForm.value))\n).subscribe(user => this.router.navigate(['/dashboard']));"
          }
        ]
      },
      {
        "heading": "2. Combination Operators",
        "content": [
          "<strong>5. <code>forkJoin</code></strong>",
          "• <strong>Definition:</strong> Combines results from multiple observables, waits for all to complete, and emits the final value of each as an array or dictionary.",
          "• <strong>Angular Use Case:</strong> Admin dashboard loading user profile, role permissions, and configuration simultaneously on initial load.",
          "<strong>6. <code>combineLatest</code></strong>",
          "• <strong>Definition:</strong> Combines the latest values from multiple observables and emits whenever <em>any</em> source emits (after all sources have emitted at least once).",
          "• <strong>Angular Use Case:</strong> Dynamic multi-filter bar (search query + category dropdown + sort order)."
        ],
        "codeBlocks": [
          {
            "language": "typescript",
            "code": "forkJoin({\n  profile: this.userService.getProfile(),\n  permissions: this.authService.getPermissions(),\n  settings: this.configService.getAppSettings()\n}).subscribe(({ profile, permissions, settings }) => {\n  console.log('All 3 APIs completed successfully:', profile, permissions, settings);\n});"
          },
          {
            "language": "typescript",
            "code": "combineLatest([\n  this.searchQuery$,\n  this.selectedCategory$,\n  this.sortBy$\n]).subscribe(([query, category, sort]) => {\n  this.applyFilters(query, category, sort);\n});"
          }
        ]
      },
      {
        "heading": "3. Creation Operators",
        "content": [
          "<strong>7. <code>of</code></strong>",
          "• <strong>Definition:</strong> Creates an Observable from given values and emits them immediately, then completes.",
          "• <strong>Angular Use Case:</strong> Returning mock/fallback data, interceptor bypasses, unit tests.",
          "<strong>8. <code>from</code></strong>",
          "• <strong>Definition:</strong> Converts arrays, promises, or iterables into an Observable and emits items one by one.",
          "• <strong>Angular Use Case:</strong> Converting native Promises (<code>fetch()</code>, Geolocation) or arrays into reactive streams.",
          "<strong>9. <code>interval</code></strong>",
          "• <strong>Definition:</strong> Emits values continuously (0, 1, 2...) at a specified time interval (in milliseconds).",
          "• <strong>Angular Use Case:</strong> Polling an API every 30 seconds, auto-refresh tokens, countdown clocks.",
          "<strong>10. <code>timer</code></strong>",
          "• <strong>Definition:</strong> Emits a value after an initial delay, optionally continuing at fixed intervals.",
          "• <strong>Angular Use Case:</strong> Delayed execution (e.g. showing a banner after 3 seconds, delayed retry, periodic polling with initial delay)."
        ],
        "codeBlocks": [
          {
            "language": "typescript",
            "code": "of([1, 2, 3]).subscribe(console.log); // Emits the array immediately and completes\nof('admin', 'editor', 'viewer').subscribe(console.log); // Emits strings one by one"
          },
          {
            "language": "typescript",
            "code": "// Converts array to stream of individual numbers:\nfrom([10, 20, 30]).subscribe(val => console.log(val)); // 10, then 20, then 30\n\n// Converts a Promise to an Observable:\nfrom(fetch('/api/status')).subscribe(res => console.log('Promise resolved to observable'));"
          },
          {
            "language": "typescript",
            "code": "// Polls backend every 30 seconds:\ninterval(30000).pipe(\n  switchMap(() => this.notificationService.checkNewNotifications())\n).subscribe(notifications => (this.notifications = notifications));"
          },
          {
            "language": "typescript",
            "code": "// Emits after 3 seconds, then completes:\ntimer(3000).subscribe(() => (this.showWelcomeBanner = true));\n\n// Waits 1 second, then emits every 5 seconds:\ntimer(1000, 5000).subscribe(val => console.log('Timer tick:', val));"
          }
        ]
      },
      {
        "heading": "4. Transformation & Filtering Operators",
        "content": [
          "<strong>11. <code>map</code></strong>",
          "• <strong>Definition:</strong> Used to transform emitted values into another format.",
          "• <strong>Angular Use Case:</strong> Extracting specific properties from API responses or formatting presentation values.",
          "<strong>12. <code>filter</code></strong>",
          "• <strong>Definition:</strong> Allows only values that satisfy a boolean condition to pass through the stream.",
          "• <strong>Angular Use Case:</strong> Filtering out null/undefined values, ignoring specific route change events.",
          "<strong>13. <code>debounceTime</code></strong>",
          "• <strong>Definition:</strong> Waits for a pause in emissions before emitting the latest value.",
          "• <strong>Angular Use Case:</strong> Search input typing to avoid hitting the backend API on every keystroke.",
          "<strong>14. <code>take</code></strong>",
          "• <strong>Definition:</strong> Emits only the first <em>n</em> values from an Observable and then automatically completes.",
          "• <strong>Angular Use Case:</strong> Listening to an observable only once (e.g., initial auth status check, first button click) without manual unsubscribe."
        ],
        "codeBlocks": [
          {
            "language": "typescript",
            "code": "this.userService.getUser(id).pipe(\n  map(user => `${user.firstName} ${user.lastName}`) // Transforms User object to full name string\n).subscribe(fullName => console.log(fullName));"
          },
          {
            "language": "typescript",
            "code": "this.router.events.pipe(\n  filter(event => event instanceof NavigationEnd)\n).subscribe(event => this.trackPageView(event.url));"
          },
          {
            "language": "typescript",
            "code": "this.searchField.valueChanges.pipe(\n  debounceTime(400) // Waits 400ms after user stops typing\n).subscribe(value => this.searchApi(value));"
          },
          {
            "language": "typescript",
            "code": "this.authService.currentUser$.pipe(\n  take(1) // Takes only the first emission and automatically unsubscribes\n).subscribe(user => console.log('Initial user check:', user));"
          }
        ]
      },
      {
        "heading": "5. Utility, Multicasting & Cleanup Operators",
        "content": [
          "<strong>15. <code>tap</code></strong>",
          "• <strong>Definition:</strong> Used for side effects such as logging, analytics tracking, showing/hiding loaders, or debugging. It does not modify the emitted value.",
          "• <strong>Angular Use Case:</strong> Managing loading spinners, logging debug data.",
          "<strong>16. <code>takeUntil</code></strong>",
          "• <strong>Definition:</strong> Automatically unsubscribes from an Observable when another notifier Observable emits a value.",
          "• <strong>Angular Use Case:</strong> Cleaning up subscriptions in <code>ngOnDestroy</code> to prevent memory leaks in Angular components.",
          "<blockquote><strong>Modern Alternative (Angular 16+):</strong> Use <code>takeUntilDestroyed()</code> to eliminate <code>destroy$</code> boilerplate entirely.</blockquote>",
          "<strong>17. <code>shareReplay</code></strong>",
          "• <strong>Definition:</strong> Shares a single Observable execution among multiple subscribers and caches the latest emitted value.",
          "• <strong>Angular Use Case:</strong> Caching HTTP GET requests so multiple components or multiple template <code>async</code> pipes don&#39;t trigger duplicate network calls."
        ],
        "codeBlocks": [
          {
            "language": "typescript",
            "code": "this.orderService.placeOrder(order).pipe(\n  tap(() => (this.isLoading = true)),\n  tap({\n    next: res => console.log('Order created:', res),\n    error: err => console.error('Order failed:', err),\n    finalize: () => (this.isLoading = false)\n  })\n).subscribe();"
          },
          {
            "language": "typescript",
            "code": "export class ProfileComponent implements OnInit, OnDestroy {\n  private destroy$ = new Subject<void>();\n\n  ngOnInit() {\n    this.userService.getUpdates().pipe(\n      takeUntil(this.destroy$) // Auto-unsubscribes when destroy$ emits!\n    ).subscribe(data => (this.profileData = data));\n  }\n\n  ngOnDestroy() {\n    this.destroy$.next();\n    this.destroy$.complete();\n  }\n}"
          },
          {
            "language": "typescript",
            "code": "@Injectable({ providedIn: 'root' })\nexport class ConfigService {\n  private http = inject(HttpClient);\n\n  // Executes only 1 HTTP request, even if 10 components subscribe:\n  readonly appConfig$ = this.http.get<AppConfig>('/api/config').pipe(\n    shareReplay({ bufferSize: 1, refCount: true })\n  );\n}"
          }
        ]
      },
      {
        "heading": "RxJS Operators Master Cheat Sheet",
        "content": [],
        "table": {
          "headers": [
            "Operator",
            "Category",
            "Primary Purpose",
            "Ideal Real-World Use Case"
          ],
          "rows": [
            [
              "<strong><code>forkJoin</code></strong>",
              "Combination",
              "Combines multiple streams, waits for all to complete",
              "Admin dashboard loading multiple endpoints"
            ],
            [
              "<strong><code>switchMap</code></strong>",
              "Flattening",
              "Cancels previous inner request, keeps latest",
              "Search autocomplete, route param changes"
            ],
            [
              "<strong><code>mergeMap</code></strong>",
              "Flattening",
              "Runs multiple inner requests in parallel",
              "Multi-file uploads, concurrent writes"
            ],
            [
              "<strong><code>concatMap</code></strong>",
              "Flattening",
              "Runs inner requests sequentially in order",
              "Multi-step form submissions, queued actions"
            ],
            [
              "<strong><code>exhaustMap</code></strong>",
              "Flattening",
              "Ignores new emissions while current is running",
              "Login / checkout submit button clicks"
            ],
            [
              "<strong><code>of</code></strong>",
              "Creation",
              "Emits values synchronously and completes",
              "Mock data, testing, fallback values"
            ],
            [
              "<strong><code>from</code></strong>",
              "Creation",
              "Converts arrays/promises/iterables to stream",
              "Converting <code>fetch()</code> Promises or array items"
            ],
            [
              "<strong><code>interval</code></strong>",
              "Creation",
              "Emits numbers indefinitely at time intervals",
              "Polling backend APIs, periodic refresh"
            ],
            [
              "<strong><code>timer</code></strong>",
              "Creation",
              "Emits after initial delay, optionally intervals",
              "Delayed notifications, scheduled triggers"
            ],
            [
              "<strong><code>tap</code></strong>",
              "Utility",
              "Executes side effects without modifying stream",
              "Loading indicators, console logging"
            ],
            [
              "<strong><code>map</code></strong>",
              "Transformation",
              "Transforms emitted value into another format",
              "Data extraction, formatting response fields"
            ],
            [
              "<strong><code>filter</code></strong>",
              "Filtering",
              "Emits only values matching a condition",
              "Ignoring nulls, listening to specific events"
            ],
            [
              "<strong><code>take</code></strong>",
              "Filtering",
              "Emits first <em>n</em> items and completes",
              "Single-shot reads without manual unsubscribe"
            ],
            [
              "<strong><code>takeUntil</code></strong>",
              "Cleanup",
              "Unsubscribes when notifier observable emits",
              "Preventing memory leaks in <code>ngOnDestroy</code>"
            ],
            [
              "<strong><code>shareReplay</code></strong>",
              "Multicasting",
              "Multicasts stream and caches latest emission",
              "Caching HTTP calls across multiple <code>async</code> pipes"
            ],
            [
              "<strong><code>debounceTime</code></strong>",
              "Filtering",
              "Waits for pause in emissions before emitting",
              "Search bar typing pause"
            ],
            [
              "<strong><code>combineLatest</code></strong>",
              "Combination",
              "Combines latest values when <em>any</em> source emits",
              "Multi-faceted filter bars (search + tags)"
            ]
          ]
        }
      }
    ]
  },
  {
    "id": "ngrx-state-management",
    "icon": "🏛️",
    "title": "NgRx & State Management",
    "badge": "NgRx Store",
    "items": [
      {
        "heading": "Overview",
        "content": [
          "NgRx is a Redux-inspired reactive state management architecture for enterprise Angular applications."
        ]
      },
      {
        "heading": "The 5 Pillars of NgRx",
        "content": [],
        "codeBlocks": [
          {
            "language": "typescript",
            "code": "      ┌─────────────────────────────┐\n      │          Component          │\n      └──────────────┬──────────────┘\n                     │ Dispatches\n                     ▼\n      ┌─────────────────────────────┐\n      │           Action            │\n      └──────┬───────────────┬──────┘\n             │ Handled by    │ Intercepted by\n             ▼               ▼\n      ┌─────────────┐ ┌─────────────┐\n      │   Reducer   │ │   Effect    │ ───► HTTP / External APIs\n      └──────┬──────┘ └──────┬──────┘\n             │ Updates       │ Dispatches new Action\n             ▼               │\n      ┌─────────────────────────────┐\n      │            Store            │ ◄┘\n      └──────────────┬──────────────┘\n                     │ Selects (memoized)\n                     ▼\n      ┌─────────────────────────────┐\n      │          Selector           │\n      └─────────────────────────────┘"
          }
        ]
      },
      {
        "heading": "Complete NgRx Example",
        "content": [
          "<strong>1. Actions (<code>todo.actions.ts</code>)</strong>",
          "<strong>2. Reducer (<code>todo.reducer.ts</code>)</strong>",
          "<strong>3. Selectors (<code>todo.selectors.ts</code>)</strong>",
          "<strong>4. Effects (<code>todo.effects.ts</code>)</strong>"
        ],
        "codeBlocks": [
          {
            "language": "typescript",
            "code": "import { createActionGroup, emptyProps, props } from '@ngrx/store';\n\nexport interface Todo {\n  id: number;\n  title: string;\n}\n\nexport const TodoActions = createActionGroup({\n  source: 'Todo Page',\n  events: {\n    'Load Todos': emptyProps(),\n    'Load Todos Success': props<{ todos: Todo[] }>(),\n    'Load Todos Failure': props<{ error: string }>()\n  }\n});"
          },
          {
            "language": "typescript",
            "code": "import { createReducer, on } from '@ngrx/store';\nimport { TodoActions, Todo } from './todo.actions';\n\nexport interface TodoState {\n  todos: Todo[];\n  loading: boolean;\n  error: string | null;\n}\n\nexport const initialTodoState: TodoState = {\n  todos: [],\n  loading: false,\n  error: null\n};\n\nexport const todoReducer = createReducer(\n  initialTodoState,\n  on(TodoActions.loadTodos, state => ({ ...state, loading: true, error: null })),\n  on(TodoActions.loadTodosSuccess, (state, { todos }) => ({ ...state, todos, loading: false })),\n  on(TodoActions.loadTodosFailure, (state, { error }) => ({ ...state, error, loading: false }))\n);"
          },
          {
            "language": "typescript",
            "code": "import { createFeatureSelector, createSelector } from '@ngrx/store';\nimport { TodoState } from './todo.reducer';\n\nexport const selectTodoState = createFeatureSelector<TodoState>('todos');\n\nexport const selectAllTodos = createSelector(\n  selectTodoState,\n  state => state.todos\n);\n\nexport const selectTodosLoading = createSelector(\n  selectTodoState,\n  state => state.loading\n);"
          },
          {
            "language": "typescript",
            "code": "import { inject } from '@angular/core';\nimport { Actions, createEffect, ofType } from '@ngrx/effects';\nimport { TodoService } from '../services/todo.service';\nimport { TodoActions } from './todo.actions';\nimport { catchError, map, mergeMap, of } from 'rxjs';\n\nexport const loadTodosEffect = createEffect(\n  (actions$ = inject(Actions), todoService = inject(TodoService)) => {\n    return actions$.pipe(\n      ofType(TodoActions.loadTodos),\n      mergeMap(() =>\n        todoService.getTodos().pipe(\n          map(todos => TodoActions.loadTodosSuccess({ todos })),\n          catchError(err => of(TodoActions.loadTodosFailure({ error: err.message })))\n        )\n      )\n    );\n  },\n  { functional: true }\n);"
          }
        ]
      }
    ]
  },
  {
    "id": "progressive-web-apps-pwa-in-angular",
    "icon": "📱",
    "title": "Progressive Web Apps (PWA) in Angular",
    "badge": "PWA",
    "items": [
      {
        "heading": "Overview",
        "content": [
          "A Progressive Web App (PWA) delivers native-app-like user experiences on mobile and desktop: offline availability, fast caching, background synchronization, and installation prompts."
        ]
      },
      {
        "heading": "1. Adding PWA to an Angular Project",
        "content": [
          "This automates:",
          "• Adding <code>@angular/service-worker</code> to <code>package.json</code>.",
          "• Creating <code>src/manifest.webmanifest</code> (app identity, theme colors, home screen icons).",
          "• Creating <code>ngsw-config.json</code> (caching rules and asset groups).",
          "• Registering <code>provideServiceWorker(&#39;ngsw-worker.js&#39;, ...)</code> in <code>app.config.ts</code>."
        ],
        "codeBlocks": [
          {
            "language": "bash",
            "code": "ng add @angular/pwa"
          }
        ]
      },
      {
        "heading": "2. Service Worker Configuration (ngsw-config.json)",
        "content": [
          "<blockquote><strong>DataGroup Strategies:</strong>\n- <strong><code>freshness</code> (Network-First):</strong> Tries network first; if offline or times out (e.g. 5s), serves from cache. Ideal for live data.\n- <strong><code>performance</code> (Cache-First):</strong> Serves immediately from cache; fetches update in the background. Ideal for static/infrequently changing assets.</blockquote>"
        ],
        "codeBlocks": [
          {
            "language": "json",
            "code": "{\n  \"$schema\": \"./node_modules/@angular/service-worker/config/schema.json\",\n  \"index\": \"/index.html\",\n  \"assetGroups\": [\n    {\n      \"name\": \"app\",\n      \"installMode\": \"prefetch\",\n      \"resources\": {\n        \"files\": [\"/favicon.ico\", \"/index.html\", \"/manifest.webmanifest\", \"/*.css\", \"/*.js\"]\n      }\n    },\n    {\n      \"name\": \"assets\",\n      \"installMode\": \"lazy\",\n      \"updateMode\": \"prefetch\",\n      \"resources\": {\n        \"files\": [\"/assets/**\", \"/*.(svg|cur|jpg|jpeg|png|apng|webp|avif|gif|otf|ttf|woff|woff2)\"]\n      }\n    }\n  ],\n  \"dataGroups\": [\n    {\n      \"name\": \"api-freshness\",\n      \"urls\": [\"/api/todos/**\"],\n      \"cacheConfig\": {\n        \"maxSize\": 100,\n        \"maxAge\": \"1h\",\n        \"timeout\": \"5s\",\n        \"strategy\": \"freshness\"\n      }\n    }\n  ]\n}"
          }
        ]
      },
      {
        "heading": "3. Detecting & Prompting App Updates with SwUpdate",
        "content": [
          "When a new version of the app is published, prompt the user to reload:"
        ],
        "codeBlocks": [
          {
            "language": "typescript",
            "code": "import { Component, OnInit, inject } from '@angular/core';\nimport { SwUpdate, VersionReadyEvent } from '@angular/service-worker';\nimport { filter } from 'rxjs/operators';\n\n@Component({\n  selector: 'app-root',\n  standalone: true,\n  template: `<router-outlet />`\n})\nexport class AppComponent implements OnInit {\n  private swUpdate = inject(SwUpdate);\n\n  ngOnInit() {\n    if (this.swUpdate.isEnabled) {\n      // Listen for version ready events\n      this.swUpdate.versionUpdates\n        .pipe(filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'))\n        .subscribe(() => {\n          if (confirm('A new version of the application is available. Load update?')) {\n            window.location.reload();\n          }\n        });\n    }\n  }\n}"
          }
        ]
      }
    ]
  }
];
