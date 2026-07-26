// Navigation structure for the site
export const navLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'About Us',
    path: '/about',
  },
  {
    label: 'Academics',
    path: '/academics',
    children: [
      { label: 'Pre-Primary', path: '/academics/pre-primary' },
      { label: 'Primary', path: '/academics/primary' },
      { label: 'Middle School', path: '/academics/middle' },
      { label: 'Daycare', path: '/academics/daycare' },
    ],
  },
  {
    label: 'Admissions',
    path: '/admissions',
    children: [
      { label: 'Enquiry Form', path: '/admissions/enquiry' },
      { label: 'Admission Procedure', path: '/admissions/procedure' },
    ],
  },
  { label: 'School Facilities', path: '/facilities' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact Us', path: '/contact' },
];

export const socialLinks = {
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com',
  youtube: 'https://youtube.com',
};

export const contactInfo = {
  phone: '+91 98XX XXX XXX',
  email1: 'info@excellenceschool.com',
  email2: 'admissions@excellenceschool.com',
  address: 'Shamshad Market Road, Aligarh, Uttar Pradesh 202001',
};
