import {ComponentFixture, TestBed} from '@angular/core/testing';
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

  it('should create the app', () => {
    expect(appComponent).toBeTruthy();
  });


});
