import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CssHighlighterDirective } from './shared/component/directive/cssHighlighter.directive';
import { RendrerCssHighDirective } from './shared/component/directive/rendrer-css-high.directive';
import { ToLowercaseDirective } from './shared/component/directive/to-lowercase.directive';


@NgModule({
  declarations: [
    AppComponent,
    CssHighlighterDirective,
    RendrerCssHighDirective,
    ToLowercaseDirective
  
  ],
  imports: [
    BrowserModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
