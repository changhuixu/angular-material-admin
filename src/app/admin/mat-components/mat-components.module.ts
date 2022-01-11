import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';

import { MatComponentsRoutingModule } from './mat-components-routing.module';
import { HomeComponent } from './home/home.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { IndicatorsComponent } from './indicators/indicators.component';
import { DialogsComponent } from './dialogs/dialogs.component';
import { SteppersComponent } from './steppers/steppers.component';
import { PanelsComponent } from './panels/panels.component';
import { OthersComponent } from './others/others.component';
import { ChipsAutoCompleteComponent } from './indicators/chips-auto-complete/chips-auto-complete.component';
import { SpinnerComponent } from './indicators/spinner/spinner.component';
import { ProgressBarComponent } from './indicators/progress-bar/progress-bar.component';
import {
  SnackBarComponent,
  PizzaPartyComponent
} from './dialogs/snack-bar/snack-bar.component';
import { BasicSnackBarComponent } from './dialogs/snack-bar/basic-snack-bar.component';
import {
  DialogOverviewComponent,
  DialogOverviewExampleDialog
} from './dialogs/dialog-overview/dialog-overview.component';
import { StepperOverviewComponent } from './steppers/stepper-overview/stepper-overview.component';
import { StepperVerticalComponent } from './steppers/stepper-vertical/stepper-vertical.component';
import { BasicExpansionPanelComponent } from './panels/basic-expansion-panel/basic-expansion-panel.component';
import { ExpansionPanelAccordionComponent } from './panels/expansion-panel-accordion/expansion-panel-accordion.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
    imports: [
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        MatComponentsRoutingModule,
        FlexLayoutModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatBadgeModule,
        MatStepperModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatSliderModule,
        MatSnackBarModule,
        MatIconModule,
        MatExpansionModule,
        MatChipsModule,
        MatBottomSheetModule,
        MatTooltipModule,
        MatDividerModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTabsModule
    ],
    declarations: [
        HomeComponent,
        ButtonsComponent,
        IndicatorsComponent,
        DialogsComponent,
        SteppersComponent,
        PanelsComponent,
        OthersComponent,
        ChipsAutoCompleteComponent,
        SpinnerComponent,
        ProgressBarComponent,
        SnackBarComponent,
        PizzaPartyComponent,
        BasicSnackBarComponent,
        DialogOverviewComponent,
        DialogOverviewExampleDialog,
        StepperOverviewComponent,
        StepperVerticalComponent,
        BasicExpansionPanelComponent,
        ExpansionPanelAccordionComponent
    ]
})
export class MatComponentsModule {}
