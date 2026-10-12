import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Solution {
  title: string;
  image: string;
  path: string;
  excerpt: string;
}

@Component({
  selector: 'app-solutions',
  imports: [RouterLink],
  templateUrl: './solutions.html',
  styleUrl: './solutions.css',
})
export class Solutions {
  protected readonly solutions: Solution[] = [
    {
      title: 'Virtualization',
      image: 'Solutions/Virtualization.jpg',
      path: '/virtualization',
      excerpt:
        'Creation of virtual resources to manage workloads more scalably across servers, desktops, storage and networks.',
    },
    {
      title: 'Security Solutions',
      image: 'Solutions/security.jpg',
      path: '/security-solutions',
      excerpt:
        'Firewalls, access controls and video surveillance to protect your critical data and infrastructure.',
    },
    {
      title: 'Blade Server Solution',
      image: 'Solutions/server.png',
      path: '/blade-server-solution',
      excerpt:
        'Compact, modular blade servers designed to save space, energy and simplify management.',
    },
    {
      title: 'Storage Solutions',
      image: 'Solutions/storage.gif',
      path: '/storage-solutions',
      excerpt:
        'SAN, NAS and DAS solutions for secure, high-speed and scalable data storage.',
    },
    {
      title: 'Network Solutions',
      image: 'Solutions/network.jpg',
      path: '/network-solutions',
      excerpt:
        'End-to-end network design, cabling, switches and routers to keep your business connected.',
    },
    {
      title: 'VoIP Solution',
      image: 'Solutions/viop.png',
      path: '/voip-solution',
      excerpt:
        'Reliable, high-quality voice communication over IP with cost-effective deployment.',
    },
    {
      title: 'Disaster Recovery',
      image: 'Solutions/disaster.jpg',
      path: '/disaster-recovery',
      excerpt:
        'Backup and disaster recovery planning to ensure business continuity when disruptions occur.',
    },
    {
      title: 'Printing Solution',
      image: 'Solutions/print_sol.jpg',
      path: '/printing-solution',
      excerpt:
        'Centralized, secure print management to reduce costs and simplify document workflows.',
    },
    {
      title: 'Internet Solutions',
      image: 'Solutions/internet_connect.png',
      path: '/internet-solutions',
      excerpt:
        'Website design, mobile-ready sites and tools to strengthen your online presence.',
    },
  ];
}