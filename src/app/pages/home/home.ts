import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  OnInit,
  ViewChild,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

interface HomeNewsItem {
  title: string;
  date: string;
  excerpt: string;
  image: string;
}

interface QuickAccessItem {
  title: string;
  description: string;
  path: string;
  icon?: string;
  paths?: string[];
  viewBox?: string;
  fill?: boolean;
}

export interface CustomerItem {
  image: string;
  name: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, AfterViewInit, OnDestroy {
  constructor(private readonly ngZone: NgZone) {}

  readonly slides: Slide[] = [
    {
      image: 'slider1.jpg',
      title: 'Customer Centricity and Value',
      subtitle: 'The power of trust',
    },
    {
      image: 'slider2.jpg',
      title: 'Teamwork',
      subtitle: 'The power of together',
    },
    {
      image: 'slider3.jpg',
      title: 'Commitment',
      subtitle: 'The power of believing we can',
    },
    {
      image: 'slider4.png',
      title: 'Customer Centricity and Value',
      subtitle: 'The power of trust',
    },
  ];

  readonly newsItems: HomeNewsItem[] = [
    {
      title: 'ARUBA Sales Champion Q4/2017',
      date: '28 November 2017',
      excerpt:
        'Congratulations Eng. Hesham Mansour – Presales Manager – for being the ...  read more',
      image: 'news/imgi_2_n.png',
    },
    {
      title: 'Lenovo Authorized Service Center',
      date: '19 April 2017',
      excerpt:
        'We are signed to be authorized service center to Lenovo as Personal System group (PSG).',
      image: 'news/imgi_3_lenovo_news.jpg',
    },
    {
      title: 'Samsung Authorized Service Center',
      date: '19 April 2017',
      excerpt:
        'We are signed to be authorized service center to Samsung as Imaging & Printing solution (IPG).',
      image: 'news/imgi_4_samsung_news.jpg',
    },
  ];

  readonly quickAccessItems: QuickAccessItem[] = [
    {
      title: 'Check Warranty',
      description:
        'The free Warranty Checker enables you to check the warranty status of your device.',
      path: '/warranty',
      icon: 'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z',
    },
    {
      title: 'Track S.O.',
      description: 'Track your Sales Order status.',
      path: '/so',
      icon: 'M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2ZM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1Zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2Z',
    },
    {
      title: 'Tickets',
      description:
        'If you have any question, Please contact us as soon as possible.',
      path: '/ticket',
      viewBox: '0 0 985.333 985.334',
      fill: true,
      paths: [
        'M868.565,492.8c-4.4,22.101-24,38.2-47.5,39.2c-7.4,0.3-13.7,5.7-15.101,13c-1.5,7.3,2.2,14.7,8.9,17.8 c21.3,10,33.2,32.4,28.7,54.5l-4.2,21c-5.5,27.7-36.101,45-62.9,38.4c-7.5-1.8-15.2-3.2-22.8-4.7c-11.2-2.2-22.4-4.5-33.6-6.7 c-14.801-3-29.601-5.899-44.4-8.899c-17.6-3.5-35.3-7.101-52.9-10.601c-19.699-4-39.399-7.899-59.1-11.899 c-21-4.2-42.1-8.4-63.1-12.7c-21.601-4.3-43.2-8.7-64.7-13c-21.4-4.3-42.7-8.601-64.101-12.9c-20.399-4.1-40.8-8.2-61.199-12.3 c-18.7-3.7-37.3-7.5-56-11.2c-16.2-3.2-32.4-6.5-48.5-9.7c-12.9-2.6-25.8-5.199-38.8-7.8c-8.9-1.8-17.801-3.6-26.7-5.399 c-4.101-0.801-8.2-1.7-12.3-2.5c-0.2,0-0.4-0.101-0.601-0.101c2.2,10.4,1.2,21.5-3.6,31.9c-10.101,21.8-33.601,33.2-56.2,28.8 c-6.7-1.3-14,1.2-16.9,7.4l-9,19.5c-2.899,6.199,0,13.399,5.301,17.699c1,0.801,721.8,333.101,722.999,333.4 c6.7,1.3,14-1.2,16.9-7.4l9-19.5c2.9-6.199,0-13.399-5.3-17.699c-18-14.301-24.601-39.601-14.5-61.4c10.1-21.8,33.6-33.2,56.2-28.8 c6.699,1.3,14-1.2,16.899-7.4l9-19.5c2.9-6.2,0-13.399-5.3-17.7c-18-14.3-24.6-39.6-14.5-61.399s33.6-33.2,56.2-28.8 c6.7,1.3,14-1.2,16.9-7.4l9-19.5c2.899-6.2,0-13.4-5.301-17.7c-18-14.3-24.6-39.6-14.5-61.4c10.101-21.8,33.601-33.199,56.2-28.8 c6.7,1.3,14-1.2,16.9-7.399l9.899-21.601c2.9-6.2,0.2-13.5-6-16.399l-107.699-49.7L868.565,492.8z',
        'M9.665,485.9c1.2,0.6,779.3,156.699,780.6,156.699c6.801-0.3,13.4-4.5,14.7-11.1l4.2-21c1.3-6.7-3.1-13.1-9.3-16 c-20.8-9.8-33.101-32.8-28.4-56.4c4.7-23.6,25-40.1,48-41.1c6.8-0.3,13.4-4.5,14.7-11.1l3.1-15.4l1.101-5.7 c1.3-6.7-3.101-13.1-9.3-16c-20.801-9.8-33.101-32.8-28.4-56.399c4.7-23.601,25-40.101,48-41.101c6.8-0.3,13.4-4.5,14.7-11.1 l4.2-21c1.3-6.7-3.101-13.1-9.301-16c-20.8-9.8-33.1-32.8-28.399-56.4c4.7-23.6,25-40.1,48-41.1c6.8-0.3,13.399-4.5,14.7-11.1 l4.699-23.3c1.301-6.7-3-13.2-9.699-14.5c0,0-781.9-156.8-782.7-156.8c-5.8,0-10.9,4.1-12.1,9.9l-4.7,23.3 c-1.3,6.7,3.1,13.1,9.3,16c20.8,9.8,33.1,32.8,28.4,56.4c-4.7,23.6-25,40.1-48,41.1c-6.801,0.3-13.4,4.5-14.7,11.1l-4.2,21 c-1.3,6.7,3.1,13.1,9.3,16c20.8,9.8,33.101,32.8,28.4,56.4c-4.7,23.6-25,40.1-48,41.1c-6.8,0.3-13.4,4.5-14.7,11.1l-4.2,21 c-1.3,6.7,3.101,13.1,9.3,16c20.801,9.8,33.101,32.8,28.4,56.4c-4.7,23.601-25,40.101-48,41.101c-6.8,0.3-13.4,4.5-14.7,11.1 l-4.2,21C-0.935,476.7,3.464,483,9.665,485.9z M676.165,229.6c2.7-13.5,15.9-22.3,29.4-19.6s22.3,15.9,19.6,29.4l-33,164.2 l-20.3,101.2c-2.4,11.9-12.8,20.101-24.5,20.101c-1.601,0-3.3-0.2-4.9-0.5c-13.5-2.7-22.3-15.9-19.6-29.4l22.7-112.9L676.165,229.6 z M225.365,139.1c2.7-13.5,15.9-22.3,29.4-19.6s22.3,15.9,19.6,29.4l-11.4,56.7l-12.899,64.3l-10.4,51.8l-18.5,92.6 c-2.399,11.9-12.8,20.101-24.5,20.101c-1.6,0-3.3-0.2-4.899-0.5c-0.7-0.101-1.4-0.301-2-0.5c-12.4-3.601-20.101-16.101-17.5-28.9 l3.699-18.7l9.7-48.4L225.365,139.1z',
      ],
    },
    {
      title: 'Complains',
      description:
        'If you have any problem, Please contact us as soon as possible.',
      path: '/complain',
      icon: 'M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.586l-2.707 2.707A1 1 0 0 1 12 18.586V16H5a2 2 0 0 1-2-2V6Zm4 1h10v2H7V7Zm0 3h6v2H7v-2Z',
    },
  ];

  // Hero Slider
  readonly currentSlide = signal(0);
  private autoplayTimer?: ReturnType<typeof setInterval>;
  private readonly intervalMs = 5000;

  // Customers Slider
  readonly customers: CustomerItem[] = [
    { image: 'Customers/imgi_2_BAG.jpg', name: 'Bavarian Auto Group' },
    { image: 'Customers/imgi_3_ahly-bank.jpg', name: 'National Bank of Egypt' },
    { image: 'Customers/imgi_4_cib.jpg', name: 'CIB Bank' },
    { image: 'Customers/imgi_5_blom.jpg', name: 'Blom Bank' },
    { image: 'Customers/imgi_6_masr-bank.jpg', name: 'Banque misr' },
    { image: 'Customers/imgi_7_arab-bank1.jpg', name: 'Arab Bank' },
    { image: 'Customers/imgi_8_masr_elkher.jpg', name: 'Misr ElKheir Foundation' },
    { image: 'Customers/imgi_9_index.jpg', name: 'Telecom Egypt' },
    { image: 'Customers/imgi_10_m.jpg', name: 'Mobinil' },
    { image: 'Customers/imgi_11_q.jpg', name: 'Alcatel-Lucent' },
    { image: 'Customers/imgi_12_2.jpg', name: 'OCI' },
    { image: 'Customers/imgi_13_1.jpg', name: 'Arab Contractors' },
    { image: 'Customers/imgi_14_10.jpg', name: 'Ministry of Water Resources and Irrigation' },
    { image: 'Customers/imgi_15_9.jpg', name: 'Ministry of Justice' },
    { image: 'Customers/imgi_16_8.jpg', name: 'Ministry of Higher Education' },
    { image: 'Customers/imgi_17_7.jpg', name: 'Ministry of Electricity and Energy' },
    { image: 'Customers/imgi_18_5.jpg', name: 'Drainage & Drinking Water Company' },
    { image: 'Customers/imgi_19_4.jpg', name: 'Central Traffic Department' },
    { image: 'Customers/imgi_20_5-1.jpg', name: 'Alexandria Port Authority' },
    { image: 'Customers/imgi_21_12.jpg', name: 'Nozha International Hospital' },
    { image: 'Customers/imgi_22_11.jpg', name: 'Dar Al Fouad Hospital' },
    { image: 'Customers/imgi_23_14.jpg', name: 'Toshiba' },
    { image: 'Customers/imgi_24_13.jpg', name: 'Dina Farms' },
    { image: 'Customers/imgi_25_16.jpg', name: 'Suez-Canal' },
    { image: 'Customers/imgi_26_15.jpg', name: 'Misr Insurance' },
    { image: 'Customers/imgi_27_17.jpg', name: 'Library of Alexandria' },
    { image: 'Customers/imgi_28_20.jpg', name: 'Al Masry Al Youm' },
    { image: 'Customers/imgi_29_19.jpg', name: 'Al Ahram' },
    { image: 'Customers/imgi_30_18.jpg', name: 'Akhbar Al Youm' },
    { image: 'Customers/imgi_31_23.jpg', name: 'GASCO' },
    { image: 'Customers/imgi_32_22.jpg', name: 'Enppi' },
    { image: 'Customers/imgi_33_21.jpg', name: 'Agiba' },
    { image: 'Customers/imgi_34_245.jpg', name: 'IBN SINA Pharma' },
    // Duplicate for seamless infinite scrolling loop
    { image: 'Customers/imgi_2_BAG.jpg', name: 'Bavarian Auto Group' },
    { image: 'Customers/imgi_3_ahly-bank.jpg', name: 'National Bank of Egypt' },
    { image: 'Customers/imgi_4_cib.jpg', name: 'CIB Bank' },
    { image: 'Customers/imgi_5_blom.jpg', name: 'Blom Bank' },
    { image: 'Customers/imgi_6_masr-bank.jpg', name: 'Banque misr' },
    { image: 'Customers/imgi_7_arab-bank1.jpg', name: 'Arab Bank' },
    { image: 'Customers/imgi_8_masr_elkher.jpg', name: 'Misr ElKheir Foundation' },
    { image: 'Customers/imgi_9_index.jpg', name: 'Telecom Egypt' },
    { image: 'Customers/imgi_10_m.jpg', name: 'Mobinil' },
    { image: 'Customers/imgi_11_q.jpg', name: 'Alcatel-Lucent' },
    { image: 'Customers/imgi_12_2.jpg', name: 'OCI' },
    { image: 'Customers/imgi_13_1.jpg', name: 'Arab Contractors' },
    { image: 'Customers/imgi_14_10.jpg', name: 'Ministry of Water Resources and Irrigation' },
    { image: 'Customers/imgi_15_9.jpg', name: 'Ministry of Justice' },
    { image: 'Customers/imgi_16_8.jpg', name: 'Ministry of Higher Education' },
    { image: 'Customers/imgi_17_7.jpg', name: 'Ministry of Electricity and Energy' },
    { image: 'Customers/imgi_18_5.jpg', name: 'Drainage & Drinking Water Company' },
    { image: 'Customers/imgi_19_4.jpg', name: 'Central Traffic Department' },
    { image: 'Customers/imgi_20_5-1.jpg', name: 'Alexandria Port Authority' },
    { image: 'Customers/imgi_21_12.jpg', name: 'Nozha International Hospital' },
    { image: 'Customers/imgi_22_11.jpg', name: 'Dar Al Fouad Hospital' },
    { image: 'Customers/imgi_23_14.jpg', name: 'Toshiba' },
    { image: 'Customers/imgi_24_13.jpg', name: 'Dina Farms' },
    { image: 'Customers/imgi_25_16.jpg', name: 'Suez-Canal' },
    { image: 'Customers/imgi_26_15.jpg', name: 'Misr Insurance' },
    { image: 'Customers/imgi_27_17.jpg', name: 'Library of Alexandria' },
    { image: 'Customers/imgi_28_20.jpg', name: 'Al Masry Al Youm' },
    { image: 'Customers/imgi_29_19.jpg', name: 'Al Ahram' },
    { image: 'Customers/imgi_30_18.jpg', name: 'Akhbar Al Youm' },
    { image: 'Customers/imgi_31_23.jpg', name: 'GASCO' },
    { image: 'Customers/imgi_32_22.jpg', name: 'Enppi' },
    { image: 'Customers/imgi_33_21.jpg', name: 'Agiba' },
    { image: 'Customers/imgi_34_245.jpg', name: 'IBN SINA Pharma' },
  ];

  @ViewChild('customerTrack')
  private customerTrack?: ElementRef<HTMLDivElement>;

  private customerAnimFrameId?: number;
  private isCustomerSliderPaused = false;
  private customerUserInteractionTimeout?: ReturnType<typeof setTimeout>;
  private customerScrollPosition = 0;
  private lastTime = 0;

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngAfterViewInit(): void {
    this.startCustomerAutoScroll();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
    this.stopCustomerAutoScroll();
  }

  // Hero Slider Methods
  next(): void {
    this.currentSlide.update((index) => (index + 1) % this.slides.length);
  }

  prev(): void {
    this.currentSlide.update(
      (index) => (index - 1 + this.slides.length) % this.slides.length,
    );
  }

  goTo(index: number): void {
    this.currentSlide.set(index);
    this.restartAutoplay();
  }

  private startAutoplay(): void {
    this.stopAutoplay();
    this.autoplayTimer = setInterval(() => this.next(), this.intervalMs);
  }

  private stopAutoplay(): void {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
      this.autoplayTimer = undefined;
    }
  }

  private restartAutoplay(): void {
    if (this.autoplayTimer) {
      this.startAutoplay();
    }
  }

  // Customers Slider Methods
  private startCustomerAutoScroll(): void {
    this.stopCustomerAutoScroll();
    this.lastTime = performance.now();

    this.ngZone.runOutsideAngular(() => {
      const step = (currentTime: number) => {
        const delta = Math.min((currentTime - this.lastTime) / 1000, 0.1);
        this.lastTime = currentTime;

        const el = this.customerTrack?.nativeElement;
        if (el && !this.isCustomerSliderPaused) {
          const halfWidth = el.scrollWidth / 2;
          if (halfWidth > 0) {
            this.customerScrollPosition += 45 * delta;
            if (this.customerScrollPosition >= halfWidth) {
              this.customerScrollPosition -= halfWidth;
            }
            el.scrollLeft = this.customerScrollPosition;
          }
        }

        this.customerAnimFrameId = requestAnimationFrame(step);
      };

      this.customerAnimFrameId = requestAnimationFrame(step);
    });
  }

  private stopCustomerAutoScroll(): void {
    if (this.customerAnimFrameId) {
      cancelAnimationFrame(this.customerAnimFrameId);
      this.customerAnimFrameId = undefined;
    }
    if (this.customerUserInteractionTimeout) {
      clearTimeout(this.customerUserInteractionTimeout);
      this.customerUserInteractionTimeout = undefined;
    }
  }

  pauseCustomerSlider(): void {
    this.isCustomerSliderPaused = true;
  }

  resumeCustomerSlider(): void {
    const el = this.customerTrack?.nativeElement;
    if (el) {
      this.customerScrollPosition = el.scrollLeft;
    }
    this.lastTime = performance.now();
    this.isCustomerSliderPaused = false;
  }

  scrollNextCustomer(): void {
    const el = this.customerTrack?.nativeElement;
    if (!el) return;
    this.pauseCustomerSlider();
    el.scrollBy({ left: 320, behavior: 'smooth' });

    if (this.customerUserInteractionTimeout) {
      clearTimeout(this.customerUserInteractionTimeout);
    }
    this.customerUserInteractionTimeout = setTimeout(() => {
      if (el) {
        const halfWidth = el.scrollWidth / 2;
        if (el.scrollLeft >= halfWidth) {
          el.scrollLeft -= halfWidth;
        }
        this.customerScrollPosition = el.scrollLeft;
      }
      this.resumeCustomerSlider();
    }, 2000);
  }

  scrollPrevCustomer(): void {
    const el = this.customerTrack?.nativeElement;
    if (!el) return;
    this.pauseCustomerSlider();
    const halfWidth = el.scrollWidth / 2;
    if (el.scrollLeft <= 10) {
      el.scrollLeft = halfWidth;
    }
    el.scrollBy({ left: -320, behavior: 'smooth' });

    if (this.customerUserInteractionTimeout) {
      clearTimeout(this.customerUserInteractionTimeout);
    }
    this.customerUserInteractionTimeout = setTimeout(() => {
      if (el) {
        this.customerScrollPosition = el.scrollLeft;
      }
      this.resumeCustomerSlider();
    }, 2000);
  }
}