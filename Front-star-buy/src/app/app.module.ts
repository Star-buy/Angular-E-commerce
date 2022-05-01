import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FemaleComponent } from './female/female.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { KidsComponent } from './kids/kids.component';
import { MaleComponent } from './male/male.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    FemaleComponent,
    FooterComponent,
    HomeComponent,
    KidsComponent,
    MaleComponent,
    NavbarComponent,
    PostComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
