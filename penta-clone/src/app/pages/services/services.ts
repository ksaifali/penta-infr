import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-services',
  imports: [RouterLink, Navbar, Footer],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class ServicesComponent implements AfterViewInit {
  services = [
    { id: 'air-freight',   num: '01', title: 'Air Freight',          lead: 'Speed, reliability and competitive rates — India\'s most trusted air freight service.',             tags: ['IATA DG Certified','Guaranteed Space','Express & Standard','Charter Available','Door-to-Door'] },
    { id: 'sea-freight',   num: '02', title: 'Sea Freight',           lead: 'Full Container Load or Less-than-Container Load — flexible ocean freight for every cargo size.',     tags: ['FCL & LCL','All Major Shipping Lines','Reefer Containers','Break Bulk','Door-to-Door'] },
    { id: 'multimodal',    num: '03', title: 'Multimodal Transport',  lead: 'Seamlessly combine air, sea, and road under a single bill of lading for optimized cost and transit.', tags: ['Air + Sea','Sea + Road','Single BL','Cross-border','Real-Time Tracking'] },
    { id: 'customs',       num: '04', title: 'Customs Broking',       lead: 'Swift, accurate customs clearance backed by deep regulatory expertise and authority relationships.',   tags: ['Licensed CHA','DGFT Licensed','All Major Ports','DG Clearance','Pharma Expertise'] },
    { id: 'project-cargo', num: '05', title: 'Project Cargo',         lead: 'Expert handling for oversized, heavy-lift, and complex project shipments.',                           tags: ['Heavy-Lift','Out-of-Gauge','Route Survey','Charter Available','Renewable Energy'] },
    { id: 'warehousing',   num: '06', title: 'Warehousing & Fleet',   lead: 'Strategic storage near key ports and airports, paired with a reliable nationwide fleet.',             tags: ['Bonded Warehousing','Cold Storage','Reefer Fleet','GPS Tracked','Pan-India'] },
  ];

  processSteps = [
    { num: '01', title: 'Enquire',      desc: 'Share your cargo details — our team responds within 4 hours' },
    { num: '02', title: 'Quote & Plan', desc: 'We design a routing solution and provide a transparent quote' },
    { num: '03', title: 'Execute',      desc: 'Booking confirmed, documentation handled, cargo dispatched' },
    { num: '04', title: 'Delivered',    desc: 'Real-time tracking until delivery with proof of delivery' },
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const delay = +((e.target as HTMLElement).dataset['delay'] ?? '0');
          setTimeout(() => e.target.classList.add('visible'), delay);
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.animate-up').forEach(el => observer.observe(el));
  }
}
