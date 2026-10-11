import { Component } from '@angular/core';

@Component({
  selector: 'app-service-center',
  imports: [],
  templateUrl: './service-center.html',
  styleUrl: './service-center.css',
})
export class ServiceCenter {
  protected readonly images: string[] = [
    'Service Center/imgi_2_hp_service.png',
    'Service Center/imgi_3_lexmark_service.jpg',
    'Service Center/imgi_4_lenovo_service.jpg',
    'Service Center/imgi_5_samsung_service_centre.jpg',
    'Service Center/imgi_6_image.jpg',
  ];
}