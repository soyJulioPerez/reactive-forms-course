export interface CustomerI {
  firstName: string;
  lastName: string;
  emailGroup: {
    email: string;
    confirmEmail: string;
  };
  phone: string;
  notification: 'Email' | 'Text';
  sendCatalog: boolean;
  rating: number;
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
  emailGroup: {
    email: '',
    confirmEmail: '',
  },
  phone: '',
  notification: 'Email',
  sendCatalog: true,
  rating: null,
  addressType: 'Home',
  street1: '',
  street2: '',
  city: '',
  state: '',
  zip: '',
};

