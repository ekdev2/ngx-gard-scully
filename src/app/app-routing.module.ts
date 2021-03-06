import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './Pages/about/about.component';
import { DiseaseDetailsComponent } from './Pages/disease-details/disease-details.component';
import { DiseasesComponent } from './Pages/diseases/diseases.component';
import { DiseaseAliasComponent } from './Pages/disease-alias/disease-alias.component';
import { DiseaseAliasListingComponent } from './Pages/disease-alias-listing/disease-alias-listing.component';
import { EspanolComponent } from './Pages/espanol/espanol.component';
import { GlossaryComponent } from './Pages/glossary/glossary.component';
import { HelpComponent } from './Pages/help/help.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'diseases',
    pathMatch: 'full',
  },
  { path: 'about', component: AboutComponent },
  { path: 'help', component: HelpComponent },
  { path: 'news', component: GlossaryComponent },
  { path: 'diseases', component: DiseasesComponent },
  { path: 'diseases/:id', component: DiseaseDetailsComponent },
  { path: 'diseases/:slug/OtherNames', component: DiseaseAliasListingComponent },
  { path: 'diseases/:slug/OtherNames/:alias', component: DiseaseAliasComponent },
  { path: 'search', component: SearchResultsComponent },
  { path: 'espanol', component: EspanolComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
