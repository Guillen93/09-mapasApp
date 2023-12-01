import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiniMapaComponent } from './mapas/components/mini-mapa/mini-mapa.component';
import { FullScreenComponent } from './mapas/pages/full-screen/full-screen.component';
import { MarcadoresComponent } from './mapas/pages/marcadores/marcadores.component';
import { ZoomRangeComponent } from './mapas/pages/zoom-range/zoom-range.component';
import { PropiedadesComponent } from './mapas/pages/propiedades/propiedades.component';
import { MenuComponent } from './shared/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MiniMapaComponent,
    FullScreenComponent,
    MarcadoresComponent,
    ZoomRangeComponent,
    PropiedadesComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
