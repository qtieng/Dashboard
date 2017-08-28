import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { environment } from '../environments/environment'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app.routing'
import { NotFoundPageComponent } from './pages/not-found/not-found.component'
import { ErrorService } from './shared/services/error.service'
import { ComplianceEffects } from './shared/store/compliance/compliance.effects'
import { ComplianceService } from './shared/store/compliance/compliance.service'
import { ConfigEffects } from './shared/store/config/config.effects'
import { ConfigService } from './shared/store/config/config.service'
import { SensorsEffects } from './shared/store/sensors/sensors.effects'
import { SensorsService } from './shared/store/sensors/sensors.service'
import { SourceEffects } from './shared/store/source/source.effects'
import { SourceService } from './shared/store/source/source.service'
import { StudyEffects } from './shared/store/study/study.effects'
import { StudyService } from './shared/store/study/study.service'
import { SubjectEffects } from './shared/store/subject/subject.effects'
import { SubjectService } from './shared/store/subject/subject.service'
import { metaReducers, reducers } from './shared/store'

@NgModule({
  declarations: [AppComponent, NotFoundPageComponent],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,

    // ngrx/store
    StoreModule.forRoot(reducers, { metaReducers }),

    // Redux Devtools
    // https://github.com/zalmoxisus/redux-devtools-extension
    !environment.PROD ? StoreDevtoolsModule.instrument() : [],

    // Setup ngrx/effects
    EffectsModule.forRoot([
      ConfigEffects,
      StudyEffects,
      SubjectEffects,
      SourceEffects,
      SensorsEffects,
      ComplianceEffects
    ]),

    // Routing
    AppRoutingModule
  ],
  providers: [
    ConfigService,
    ErrorService,
    StudyService,
    SubjectService,
    SourceService,
    SensorsService,
    ComplianceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
