import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-pentakuhl',
  imports: [RouterLink, Navbar, Footer],
  templateUrl: './pentakuhl.html',
  styleUrl: './pentakuhl.css'
})
export class PentakuhlComponent implements AfterViewInit {
  certs = [
    { icon: '✦', title: 'ISTA 7D Validated', desc: 'All packaging solutions validated to ISTA 7D standards for pharmaceutical transport assurance' },
    { icon: '◈', title: 'GDP Compliant', desc: 'Good Distribution Practice compliance across every step of the cold chain' },
    { icon: '⬡', title: 'Pelican BioThermal™ Authorised', desc: 'Official authorised distributor of Pelican BioThermal products across India' },
    { icon: '◎', title: 'In-House Customs', desc: 'Dedicated customs clearance teams for all temperature-sensitive imports and exports' },
  ];

  infraCards = [
    { title: 'Cold Rooms', desc: 'Maintain temperatures at ambient, chilled, and freezing levels. Compliant storage near key airports across India.', icon: '❄', temps: [{ label: '-20°C', bg: '#1a3a5c' }, { label: '+2–8°C', bg: '#1a5c3a' }, { label: '+15–25°C', bg: '#5c3a1a' }], feat: null },
    { title: 'Reefer Fleet', desc: 'Own fleet of reefer-controlled vehicles for nationwide last-mile transport. Our products enter a hibernation state that prolongs thermal capacity.', icon: '🚛', temps: null, feat: 'Nationwide coverage' },
    { title: 'IoT Data Loggers', desc: 'Real-time data mapping for all temperature-controlled consignments, offering a transparent and accurate view into shipment status at all times.', icon: '📡', temps: null, feat: 'Live monitoring' },
    { title: '8 Airport Locations', desc: 'Strategically positioned offices at 8 major airports across India, with dedicated import and export teams at each location.', icon: '✈', temps: null, feat: 'Major hubs covered' },
  ];

  products = [
    { title: 'Single-Use Parcel Shippers', desc: 'Designed to give consistent results and temperature stability with the help of phase change materials.', specs: [{ key: 'Type', val: 'Single-use passive' }, { key: 'PCM Technology', val: 'Yes' }, { key: 'ISTA 7D', val: 'Validated' }] },
    { title: 'Credo Cube™', desc: 'Offers durable protection across a wide temperature range. With VIPs, PCMs and TICS, the payload is packed in a durable, long-lasting environment.', specs: [{ key: 'VIP Panels', val: 'Yes' }, { key: 'PCM + TICS', val: 'Yes' }, { key: 'Reusable', val: 'Yes' }] },
    { title: 'Reusable Pallet Shippers', desc: 'Designed to provide your product with a durable and secure environment, ensuring the temperature remains locked and sealed within the container.', specs: [{ key: 'Type', val: 'Reusable pallet' }, { key: 'Physical Protection', val: 'Enhanced' }, { key: 'Temp Sealed', val: 'Yes' }] },
    { title: 'CoolGuard™ by Pelican', desc: 'The CoolGuard™ range from Pelican BioThermal combines market-leading performance using PCM coolants with excellent payload to external volume ratios.', specs: [{ key: 'Brand', val: 'Pelican BioThermal™' }, { key: 'PCM Coolants', val: 'Market-leading' }, { key: 'Volume Ratio', val: 'Excellent' }] },
  ];

  cargoTypes = [
    { icon: '💊', title: 'IMPs', desc: 'Investigational Medicinal Products for clinical trials and research' },
    { icon: '⚗', title: 'Comparators', desc: 'Reference products and comparator drugs for clinical studies' },
    { icon: '🧪', title: 'APIs', desc: 'Active Pharmaceutical Ingredients requiring strict temperature control' },
    { icon: '💉', title: 'High-Value Formulations', desc: 'Premium finished pharmaceutical formulations with full chain-of-custody' },
    { icon: '⚠', title: 'DG Samples', desc: 'Dangerous goods and diagnostic samples with IATA DG certification' },
    { icon: '🧬', title: 'Biologics', desc: 'Biologics and biosimilars requiring stringent cold chain management' },
  ];

  locations = [
    { code: 'BOM', name: 'Mumbai', badge: 'HQ' },
    { code: 'DEL', name: 'Delhi', badge: '' },
    { code: 'BLR', name: 'Bangalore', badge: '' },
    { code: 'MAA', name: 'Chennai', badge: '' },
    { code: 'HYD', name: 'Hyderabad', badge: '' },
    { code: 'AMD', name: 'Ahmedabad', badge: '' },
    { code: 'CCU', name: 'Kolkata', badge: '' },
    { code: 'PNQ', name: 'Pune', badge: '' },
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

    const counters = document.querySelectorAll<HTMLElement>('[data-target]');
    const cObserver = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const el = e.target as HTMLElement;
          const target = +el.dataset['target']!;
          const suffix = el.dataset['suffix'] || '';
          const duration = 1800;
          const start = performance.now();
          const step = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            el.textContent = Math.round((1 - Math.pow(1 - p, 3)) * target) + suffix;
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          cObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => cObserver.observe(c));
  }
}
