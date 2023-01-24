<<<<<<< HEAD
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';
>>>>>>> 3d8a94381bac4736b9e9d32f63cac19754f97a99
import { IonicModule } from '@ionic/angular';

import { IntroPage } from './intro.page';

describe('IntroPage', () => {
  let component: IntroPage;
  let fixture: ComponentFixture<IntroPage>;

<<<<<<< HEAD
  beforeEach (waitForAsync (()  => {
      TestBed.configureTestingModule({
=======
  beforeEach(async () => {
    await TestBed.configureTestingModule({
>>>>>>> 3d8a94381bac4736b9e9d32f63cac19754f97a99
      declarations: [IntroPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
<<<<<<< HEAD
  }));
=======
  });
>>>>>>> 3d8a94381bac4736b9e9d32f63cac19754f97a99

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
