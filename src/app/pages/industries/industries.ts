import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-industries',
  imports: [RouterLink, Navbar, Footer],
  templateUrl: './industries.html',
  styleUrl: './industries.css'
})
export class IndustriesComponent implements AfterViewInit {
  industries = [
    {
      id: 'pharma', num: '01', title: 'Pharmaceuticals',
      lead: 'The pharmaceutical industry needs the most customized supply chain solutions.',
      body: ['Our temperature-controlled transit warehouse and packaging services thoroughly facilitate your end-to-end needs. We prioritized getting well versed in the industry\'s global compliance requirements through partnerships and certifications — which has made us the top forwarder for this industry.'],
      tags: ['GDP Compliant', 'Temperature Controlled', 'IATA DG', 'Cold Chain', 'IMP Handling'],
      features: [
        { icon: '🌡', title: 'Cold Chain Expertise', desc: 'Ambient, chilled and frozen storage with IoT monitoring' },
        { icon: '📋', title: 'Global Compliance', desc: 'GDP, WHO, IATA certifications for pharmaceutical cargo' },
        { icon: '🔍', title: 'End-to-End Visibility', desc: 'Real-time tracking with full documentation transparency' },
      ],
      hasCta: true
    },
    {
      id: 'chemicals', num: '02', title: 'Chemicals',
      lead: 'Adhering to IATA guidelines during the import and export of chemicals is critical.',
      body: ['We factor this in while simultaneously offering you competitive options. Our approach includes finding you the right partners to transport your goods followed by constantly monitoring them. We have established strong relationships with the authorities, providing you with a smooth supply chain experience.'],
      tags: ['IATA DG Certified', 'Hazardous Cargo', 'Regulatory Compliance', 'Carrier Relations'],
      features: [
        { icon: '⚗', title: 'DG Expertise', desc: 'IATA certified dangerous goods handling and documentation' },
        { icon: '🤝', title: 'Partner Network', desc: 'Strong carrier relationships for competitive chemical freight' },
        { icon: '🛡', title: 'Regulatory Liaison', desc: 'Established authority relationships for smooth clearances' },
      ],
      hasCta: false
    },
    {
      id: 'energy', num: '03', title: 'Energy',
      lead: 'As an organization we have kept up with the growing consumption of renewable energy.',
      body: ['We have supported the transport of cutting-edge tools used to generate renewable energy by coming up with creative methods to serve emerging markets. Our adaptable nature allows us to handle inventory of any dimension and value for the energy sector across our global network.'],
      tags: ['Renewable Energy', 'Project Cargo', 'Oversized Freight', 'Emerging Markets'],
      features: [
        { icon: '⚡', title: 'Renewable Focus', desc: 'Transport of solar panels, wind components, and EV equipment' },
        { icon: '📐', title: 'Project Cargo', desc: 'Expert handling of oversized and out-of-gauge energy equipment' },
        { icon: '🌍', title: 'Global Reach', desc: 'Serving emerging energy markets with creative logistics solutions' },
      ],
      hasCta: false
    },
    {
      id: 'auto', num: '04', title: 'Automobile',
      lead: 'Our adaptable nature allows us to handle inventory of any dimension for the automobile industry.',
      body: ['We demonstrate the same flexibility by catering to the dynamic market trends of this industry across our global network. Our team strives to enable the uninterrupted functioning of your assembly line by reducing transit time and meeting deadlines.'],
      tags: ['Assembly Line Support', 'JIT Delivery', 'Lean Logistics', 'Competitive Pricing'],
      features: [
        { icon: '🚗', title: 'Assembly Line Ready', desc: 'JIT delivery to support lean manufacturing operations' },
        { icon: '💰', title: 'Carrier Pricing', desc: 'Volume-based carrier incentives passed on to clients' },
        { icon: '📦', title: 'Any Dimension', desc: 'Handling vehicle parts of all sizes from CKD to complete units' },
      ],
      hasCta: false
    },
    {
      id: 'electronics', num: '05', title: 'Electronics',
      lead: 'We understand the time sensitivity of electronic goods given the short product life-cycles.',
      body: ['The high competition in this industry forces you to operate on tighter margins. Our team is committed to leveraging our carrier pricing incentives to provide you with low-cost logistics without sacrificing speed or reliability. We optimize your supply chain through our distribution and consolidation services.'],
      tags: ['High-Value Cargo', 'Time Critical', 'Distribution', 'Consolidation'],
      features: [
        { icon: '⚡', title: 'Speed Priority', desc: 'Express and guaranteed services for time-critical electronics' },
        { icon: '📱', title: 'Product Lifecycle', desc: 'Aligned with launch windows and inventory management cycles' },
        { icon: '🗂', title: 'Consolidation', desc: 'LCL and groupage solutions for cost-efficient electronics movement' },
      ],
      hasCta: false
    },
    {
      id: 'textile', num: '06', title: 'Textile',
      lead: 'We optimize your supply chain through our distribution and consolidation services.',
      body: ['Our door-to-door offerings and constant shipment tracking allow you to efficiently monitor your inventory. The packaging industry needs forwarders with a widespread reach — we are able to offer this through our global partnerships and diverse network of carriers.'],
      tags: ['Door to Door', 'Consolidation', 'Global Network', 'Inventory Management'],
      features: [
        { icon: '🧵', title: 'Global Distribution', desc: 'End-to-end textile supply chain from manufacturing to retail' },
        { icon: '📊', title: 'Inventory Control', desc: 'Real-time shipment tracking across all textile consignments' },
        { icon: '✈', title: 'Multi-Modal', desc: 'Air and sea consolidation for seasonal fashion demands' },
      ],
      hasCta: false
    },
    {
      id: 'glassware', num: '07', title: 'Glassware',
      lead: 'Our team is acquainted with the extensive reach and distribution network of the glassware industry.',
      body: ['We couple our global supply chain knowledge with material handling expertise to ensure your shipments are transported reliably and efficiently. The fragile nature of glassware demands specialized packaging and careful handling throughout the logistics chain.'],
      tags: ['Fragile Cargo', 'Specialized Packaging', 'Material Handling', 'Global Distribution'],
      features: [
        { icon: '🔷', title: 'Careful Handling', desc: 'Expert fragile cargo protocols throughout the supply chain' },
        { icon: '📦', title: 'Custom Packaging', desc: 'Specialized packaging solutions to prevent breakage in transit' },
        { icon: '🌐', title: 'Wide Network', desc: 'Deep knowledge of glassware distribution channels globally' },
      ],
      hasCta: false
    },
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

    // Active nav highlight on scroll
    const navLinks = document.querySelectorAll<HTMLElement>('.industry-nav__link');
    const secObserver = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const id = e.target.id;
          navLinks.forEach(l => l.classList.toggle('active', l.dataset['id'] === id));
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    this.industries.forEach(ind => {
      const el = document.getElementById(ind.id);
      if (el) secObserver.observe(el);
    });
  }
}
