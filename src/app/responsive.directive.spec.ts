import { ResponsiveDirective } from './responsive.directive';

describe('ResponsiveDirective', () => {
  it('should create an instance', () => {
    const directive = new ResponsiveDirective(
      { observe: () => ({ subscribe: () => {} }) } as any,
      { nativeElement: { classList: { add: () => {}, remove: () => {} } } } as any
    );
    expect(directive).toBeTruthy();
  });
});
