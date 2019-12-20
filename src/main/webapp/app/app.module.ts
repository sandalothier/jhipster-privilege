import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { PrivilegeSharedModule } from 'app/shared/shared.module';
import { PrivilegeCoreModule } from 'app/core/core.module';
import { PrivilegeAppRoutingModule } from './app-routing.module';
import { PrivilegeHomeModule } from './home/home.module';
import { PrivilegeEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    PrivilegeSharedModule,
    PrivilegeCoreModule,
    PrivilegeHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    PrivilegeEntityModule,
    PrivilegeAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class PrivilegeAppModule {}
