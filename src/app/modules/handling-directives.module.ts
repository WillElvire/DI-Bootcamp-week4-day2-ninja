import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToogleVisibilityDirective } from '../handling-directives/toogle-visibility.directive';
import { AddCustomAttributeDirective } from '../handling-directives/add-custom-attribute.directive';
import { AddCustomStyleDirective } from '../handling-directives/add-custom-style.directive';
import { AddCustomEventDirective } from '../handling-directives/add-custom-event.directive';



@NgModule({
  declarations: [
    ToogleVisibilityDirective,
    AddCustomAttributeDirective,
    AddCustomStyleDirective,
    AddCustomEventDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToogleVisibilityDirective,
    AddCustomAttributeDirective,
    AddCustomStyleDirective,
    AddCustomEventDirective
  ]
})
export class HandlingDirectivesModule { }
