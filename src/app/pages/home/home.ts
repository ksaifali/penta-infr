import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Navbar, Footer, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements AfterViewInit {
  formData = { name: '', company: '', email: '', phone: '', service: '', message: '' };
  formStatus: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  constructor(private contactService: ContactService) {}

  onSubmit() {
    this.formStatus = 'loading';
    this.contactService.submit({
      name: this.formData.name,
      email: this.formData.email,
      phone: this.formData.phone,
      message: `Service: ${this.formData.service} | Company: ${this.formData.company} | ${this.formData.message}`
    }).subscribe({
      next: () => {
        this.formStatus = 'success';
        this.formData = { name: '', company: '', email: '', phone: '', service: '', message: '' };
      },
      error: () => { this.formStatus = 'error'; }
    });
  }
  whyCards = [
    { title: 'Professional Management', desc: 'Seasoned logistics professionals managing each shipment with care, compliance, and commitment to timelines.' },
    { title: 'Competitive Pricing', desc: 'Strong carrier relationships enable us to pass on meaningful pricing advantages without compromising quality.' },
    { title: 'Global Compliance', desc: 'ISO certified and CTPAT compliant — meeting international standards that protect your cargo across borders.' },
    { title: 'Pharma Expertise', desc: 'Industry-leading cold chain capabilities and GDP-compliant operations purpose-built for pharmaceutical clients.' },
    { title: 'Real-Time Visibility', desc: 'Track your shipments live with IoT-enabled data loggers and transparent reporting throughout transit.' },
    { title: '30+ Year Legacy', desc: 'Built on trust since 1993 — a stable, experienced partner for businesses navigating complex global trade.' },
  ];
  @ViewChildren('[data-target]') counters!: QueryList<ElementRef>;
  @ViewChildren('.animate-up') animatables!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.initAnimations();
    this.initCounters();
  }

  private initAnimations() {
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

  private initCounters() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          this.animateCounter(e.target as HTMLElement);
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('[data-target]').forEach(el => observer.observe(el));
  }

  private animateCounter(el: HTMLElement) {
    const target = +el.dataset['target']!;
    const suffix = el.dataset['suffix'] || '';
    const duration = 1800;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(ease * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
}
