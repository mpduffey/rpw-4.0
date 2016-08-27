import {provideRouter, RouterConfig} from '@angular/router';
import {RPWDashboard} from 'modules/rpw-dashboard/rpw-dashboard';
import {ArticleForm} from 'modules/article-form/article-form';
import {ClassEditor} from 'modules/class-editor/class-editor';

export const routes: RouterConfig = [
  {path: '', component: RPWDashboard, label: false},
  {path: 'rpw-dashboard', component: RPWDashboard, label: "RPW Dashboard"},
	{path: 'class-editor', component: ClassEditor, label: "Class Editor"},
	{path: 'article-form', component: ArticleForm, label: "Add Article"}
];

export const APP_ROUTER_PROVIDERS = [provideRouter(routes)];