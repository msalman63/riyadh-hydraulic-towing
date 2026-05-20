import { Routes } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';

export const routes: Routes = [
    {path : 'nav' , component : Navbar},
    { path : 'home' , component : Home}
];
