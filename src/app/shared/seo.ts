import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SITE_OG_IMAGE, SITE_URL } from '../data/site';

export interface SeoData {
  title: string;
  description: string;
  path: string;
}

@Injectable({ providedIn: 'root' })
export class Seo {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  update({ title, description, path }: SeoData): void {
    const url = SITE_URL + path;

    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: url });
    if (SITE_OG_IMAGE) {
      this.meta.updateTag({ property: 'og:image', content: SITE_URL + SITE_OG_IMAGE });
      this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    }

    this.setCanonical(url);
  }

  private setCanonical(url: string): void {
    const head = this.document.head;
    let link = head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
