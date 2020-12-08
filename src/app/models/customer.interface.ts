export interface CustomerI {
  firstName: string;
  lastname: string;
  email: string;
  sendCatalog: boolean;
  addressType?: 'Home' | 'Work' | 'Other';
  street1?: string;
  street2?: string;
  city?: string;
  state?: string;
  zip?: string;
}

export const emptyCustomer = {
  firstName: '',
  lastName: '',
  email: '',
  sendCatalog: true,
  addressType: 'Home',
  street1: '',
  street2: '',
  city: '',
  state: '',
  zip: '',
};

