import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'about-us',
    title: 'About Us',
    loadComponent: () => import('./pages/about-us/about-us').then((m) => m.AboutUs),
  },
  {
    path: 'mission',
    title: 'Our Mission',
    loadComponent: () => import('./pages/mission/mission').then((m) => m.Mission),
  },
  {
    path: 'vision',
    title: 'Our Vision',
    loadComponent: () => import('./pages/vision/vision').then((m) => m.Vision),
  },
  {
    path: 'core-values',
    title: 'Core Values',
    loadComponent: () => import('./pages/core-values/core-values').then((m) => m.CoreValues),
  },
  {
    path: 'solutions',
    title: 'Solutions',
    loadComponent: () => import('./pages/solutions/solutions').then((m) => m.Solutions),
  },
  {
    path: 'virtualization',
    title: 'Virtualization',
    loadComponent: () => import('./pages/virtualization/virtualization').then((m) => m.Virtualization),
  },
  {
    path: 'security-solutions',
    title: 'Security Solutions',
    loadComponent: () => import('./pages/security-solutions/security-solutions').then((m) => m.SecuritySolutions),
  },
  {
    path: 'blade-server-solution',
    title: 'Blade Server Solution',
    loadComponent: () => import('./pages/blade-server-solution/blade-server-solution').then((m) => m.BladeServerSolution),
  },
  {
    path: 'storage-solutions',
    title: 'Storage Solutions',
    loadComponent: () => import('./pages/storage-solutions/storage-solutions').then((m) => m.StorageSolutions),
  },
  {
    path: 'network-solutions',
    title: 'Network Solutions',
    loadComponent: () => import('./pages/network-solutions/network-solutions').then((m) => m.NetworkSolutions),
  },
  {
    path: 'voip-solution',
    title: 'VoIP Solution',
    loadComponent: () => import('./pages/voip-solution/voip-solution').then((m) => m.VoipSolution),
  },
  {
    path: 'disaster-recovery',
    title: 'Disaster Recovery',
    loadComponent: () => import('./pages/disaster-recovery/disaster-recovery').then((m) => m.DisasterRecovery),
  },
  {
    path: 'printing-solution',
    title: 'Printing Solution',
    loadComponent: () => import('./pages/printing-solution/printing-solution').then((m) => m.PrintingSolution),
  },
  {
    path: 'internet-solutions',
    title: 'Internet Solutions',
    loadComponent: () => import('./pages/internet-solutions/internet-solutions').then((m) => m.InternetSolutions),
  },
  {
    path: 'services',
    title: 'Services',
    loadComponent: () => import('./pages/services/services').then((m) => m.Services),
  },
  {
    path: 'partners',
    title: 'Partners',
    loadComponent: () => import('./pages/partners/partners').then((m) => m.Partners),
  },
  {
    path: 'service-center',
    title: 'Service Center',
    loadComponent: () => import('./pages/service-center/service-center').then((m) => m.ServiceCenter),
  },
  {
    path: 'customers',
    title: 'Customers',
    loadComponent: () => import('./pages/customers/customers').then((m) => m.Customers),
  },
  {
    path: 'support',
    title: 'Support',
    loadComponent: () => import('./pages/support/support').then((m) => m.Support),
  },
  {
    path: 'ticket',
    title: 'Ticket',
    loadComponent: () => import('./pages/ticket/ticket').then((m) => m.Ticket),
  },
  {
    path: 'complain',
    title: 'Complain',
    loadComponent: () => import('./pages/complain/complain').then((m) => m.Complain),
  },
  {
    path: 'warranty',
    title: 'Warranty',
    loadComponent: () => import('./pages/warranty/warranty').then((m) => m.Warranty),
  },
  {
    path: 'so',
    title: 'S.O.',
    loadComponent: () => import('./pages/so/so').then((m) => m.So),
  },
  {
    path: 'events',
    title: 'Events',
    loadComponent: () => import('./pages/events/events').then((m) => m.Events),
  },
  {
    path: 'news',
    title: 'News',
    loadComponent: () => import('./pages/news/news').then((m) => m.News),
  },
  {
    path: 'careers',
    title: 'Careers',
    loadComponent: () => import('./pages/careers/careers').then((m) => m.Careers),
  },
  {
    path: 'contact-us',
    title: 'Contact Us',
    loadComponent: () => import('./pages/contact-us/contact-us').then((m) => m.ContactUs),
  },
  { path: '**', redirectTo: '' },
];