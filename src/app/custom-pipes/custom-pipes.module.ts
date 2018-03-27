import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReversePipe } from './reverse.pipe';
import { MultiplierPipe } from './multiplier.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ReversePipe, MultiplierPipe],
  exports: [ReversePipe, MultiplierPipe]
})
export class CustomPipesModule { }
