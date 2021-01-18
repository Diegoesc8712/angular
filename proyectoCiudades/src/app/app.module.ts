import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CiudadComponent } from './ciudad/ciudad.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CiudadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }