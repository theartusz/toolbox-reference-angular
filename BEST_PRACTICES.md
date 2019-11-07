### 1. trackBy
Use the `trackBy` function when using `ngFor`

Angular will keep track of changes and only re-render changed elements

``` javascript
// in the template
<li *ngFor="let item of items; trackBy: trackByFn">{{ item }}</li>

// in the component
trackByFn(index, item) => return item.id; // unique id corresponding to the item
```

### 2. const vs let
When declaring variables, use `const` when the value is not going to be reassigned.

### 3. Always pipe RXJS operators
DON'T `observable.map()`
DO `observable.pipe(map())` 

### 4. Subscribe in templates
Use the `async` pipe in templates to subscribe to Observables instead of in the component.

### 5. Lazy loading
Lazy load where possible for performance

### 6. No subscriptions inside subscriptions

### 7. Avoid the `any` keyword, type everything

### 8. Components should only deal with display logic
Business logic should be contained in services (or utils, not preferable), we want to keep these separate.

### 9. Avoid logic in templates
Avoid using `&&` clauses and other similar logic:
DON'T: `<p *ngIf="role==='developer'"> Status: Developer </p>`
DO: `<p *ngIf="showDeveloperStatus"> Status: Developer </p>`

### 10. Use the shared module for shareable code
DO declare and export `components`, `pipes`, `directives`.
DO import and export other shareable modules like `FormsModule` or `CommonModule`
DON'T declare services or singletons here. These should be imported in the `CoreModule`.

### 11. Use the core module for services and singletons
DO import modules that should be instantiated once in your app.
DO place services in the module, but do not provide them.

### 12. Simplify you imports
Create an `index.ts` for simplifying imports/exports of components.
[Example](https://github.com/RikdeVos/angular-scalable-project-structure/blob/master/src/app/shared/components/index.ts)

### 13. Shorten relative paths with aliases
Add aliases for commonly used paths
``` javascript
{
...
  "compilerOptions": {
    ...
    "baseUrl": "src",
    "paths": {
      "@env": ["environments/environment"],
      "@shared/*": ["app/shared/*"],
      "@core/*": ["app/core/*"]
    }
  }
}
```

### 14. Use SCSS variables
We don't like to repeat ourselves, so any color or other variables should be defined in `/styles/utilities/variables.scss`

### 15. Clean up subscriptions
When subscribing to observables, always make sure you unsubscribe from them appropriately by using operators like `take`, `takeUntil`, etc. Failing to unsubscribe may cause unwanted memory leaks. 

``` javascript
private _destroyed$ = new Subject();

public ngOnInit (): void {
    iAmAnObservable
    .pipe(
       map(value => value.item)
      // We want to listen to iAmAnObservable until the component is destroyed,
       takeUntil(this._destroyed$)
     )
    .subscribe(item => this.textToDisplay = item);
}

public ngOnDestroy (): void {
    this._destroyed$.next();
    this._destroyed$.complete();
}
```


## Read more at:
- https://www.freecodecamp.org/news/best-practices-for-a-clean-and-performant-angular-application-288e7b39eb6f/
- https://medium.com/dev-jam/5-tips-best-practices-to-organize-your-angular-project-e900db08702e

## Example projects:
- https://github.com/RikdeVos/angular-scalable-project-structure
