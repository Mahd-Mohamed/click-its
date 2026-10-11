import { Component } from '@angular/core';

interface NewsItem {
  image: string;
  title: string;
  date: string;
  category: string;
  content: string;
}

@Component({
  selector: 'app-news',
  imports: [],
  templateUrl: './news.html',
  styleUrl: './news.css',
})
export class News {
  protected readonly items: NewsItem[] = [
    {
      image: 'news/imgi_2_n.png',
      title: 'ARUBA Sales Champion Q4/2017',
      date: '28 / November / 2017',
      category: 'Awards',
      content:
        'Congratulations Eng. Hesham Mansour – Presales Manager – for being the "ARUBA SALES CHAMPION WINNER – Q4/2017" .',
    },
    {
      image: 'news/imgi_3_lenovo_news.jpg',
      title: 'Lenovo Authorized Service Center',
      date: '19 / April / 2017',
      category: 'Partnership',
      content:
        'We are signed to be authorized service center to Lenovo as Personal System group (PSG).',
    },
    {
      image: 'news/imgi_4_samsung_news.jpg',
      title: 'Samsung Authorized Service Center',
      date: '19 / April / 2017',
      category: 'Partnership',
      content:
        'We are signed to be authorized service center to Samsung as Imaging & Printing solution (IPG).',
    },
  ];
}