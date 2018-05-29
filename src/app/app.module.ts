import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Graficos
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { LineaComponent } from './components/linea/linea.component';
import { BarraComponent } from './components/barra/barra.component';
import { CircularComponent } from './components/circular/circular.component';
import { RadarComponent } from './components/radar/radar.component';


@NgModule({
  declarations: [
    AppComponent,
    LineaComponent,
    BarraComponent,
    CircularComponent,
    RadarComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
