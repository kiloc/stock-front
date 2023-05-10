/**
 * @description
 *
 * This base route reuse strategy only reuses routes when the matched router configs are
 * identical. This prevents components from being destroyed and recreated
 * when just the fragment or query parameters change
 * (that is, the existing component is _reused_).
 *
 * This strategy does not store any routes for later reuse.
 *
 * Angular uses this strategy by default.
 *
 *
 * It can be used as a base class for custom route reuse strategies, i.e. you can create your own
 * class that extends the `BaseRouteReuseStrategy` one.
 * @publicApi
 */
import {ActivatedRouteSnapshot, BaseRouteReuseStrategy, DetachedRouteHandle} from "@angular/router";

export class AppRouteReuseStrategy implements BaseRouteReuseStrategy {
  storedRouteHandles = new Map<string, DetachedRouteHandle>();
  /**
   * Whether the given route should detach for later reuse.
   * Always returns false for `BaseRouteReuseStrategy`.
   * */
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    console.log('shouldDetach', route)
    // @ts-ignore
    if (route.data.reuseComponent) {
      return true
    }
    return false
  }

  /**
   * A no-op; the route is never stored since this strategy never detaches routes for later re-use.
   */
  store(route: ActivatedRouteSnapshot, detachedTree: DetachedRouteHandle): void {
    console.log('store', route)
    // @ts-ignore
    if (route.data.reuseComponent) {
      // @ts-ignore
      this.storedRouteHandles.set(route.routeConfig.path, detachedTree);
    }
  }

  /** Returns `false`, meaning the route (and its subtree) is never reattached */
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    console.log('shouldAttach', route)
    // @ts-ignore
    if (route.data.reuseComponent) {
      // @ts-ignore
      return this.storedRouteHandles.has(route.routeConfig.path);
    }
    return false;
  }

  /** Returns `null` because this strategy does not store routes for later re-use. */
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle|null {
    console.log('retrieve', route)
    // @ts-ignore
    return this.storedRouteHandles.get(route.routeConfig.path) as DetachedRouteHandle;
  }

  /**
   * Determines if a route should be reused.
   * This strategy returns `true` when the future route config and current route config are
   * identical.
   */
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    console.log('shouldReuseRoute', curr)
    return future.routeConfig === curr.routeConfig
  }
}
