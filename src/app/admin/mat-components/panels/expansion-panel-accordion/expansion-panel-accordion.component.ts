import { Component } from '@angular/core';
import { MatComponentsModule } from '../../mat-components.module';

@Component({
  selector: 'app-expansion-panel-accordion',
  standalone:false,
  templateUrl: './expansion-panel-accordion.component.html',
  styleUrls: ['./expansion-panel-accordion.component.scss']
})
export class ExpansionPanelAccordionComponent {
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
