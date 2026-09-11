import { PROFILE } from './profile';
import { LegalInfo } from './types';

export const LEGAL: LegalInfo = {
  name: 'Joel Rosenberg',
  street: 'Musterstraße 1',
  postalCode: '12345',
  city: 'Musterstadt',
  country: { de: 'Deutschland', en: 'Germany' },
  email: PROFILE.links.email,
};
