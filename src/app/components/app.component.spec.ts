import {ComponentFixture, fakeAsync, flush, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {provideHttpClient} from "@angular/common/http";

describe('AppComponent', () => {
  let appComponentFixture: ComponentFixture<AppComponent>;
  let appComponent: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      providers: [provideHttpClient()]
    }).compileComponents();
    appComponentFixture = TestBed.createComponent(AppComponent);
    appComponent = appComponentFixture.componentInstance;
  });

  it('should create the AppComponent', () => {
    expect(appComponent).toBeTruthy();
  });

  it('should test a setTimeout callback change value', fakeAsync(() => {
    let testBooleanValue = false;
    setTimeout(() => testBooleanValue = true, 1000);
    flush();
    expect(testBooleanValue).toBeTruthy();
  }));

});
