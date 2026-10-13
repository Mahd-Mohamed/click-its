export interface CustomerItem {
  image: string;
  name: string;
}

export interface CustomerGroup {
  title: string;
  items: CustomerItem[];
}

export const CUSTOMER_GROUPS: CustomerGroup[] = [
  {
    title: 'Automotive',
    items: [{ image: 'Customers/imgi_2_BAG.jpg', name: 'Bavarian Auto Group' }],
  },
  {
    title: 'Banking',
    items: [
      { image: 'Customers/imgi_3_ahly-bank.jpg', name: 'National Bank of Egypt' },
      { image: 'Customers/imgi_4_cib.jpg', name: 'CIB Bank' },
      { image: 'Customers/imgi_5_blom.jpg', name: 'Blom Bank' },
      { image: 'Customers/imgi_6_masr-bank.jpg', name: 'Banque misr' },
      { image: 'Customers/imgi_7_arab-bank1.jpg', name: 'Arab Bank' },
    ],
  },
  {
    title: 'Charity',
    items: [{ image: 'Customers/imgi_8_masr_elkher.jpg', name: 'Misr ElKheir Foundation' }],
  },
  {
    title: 'Communication',
    items: [
      { image: 'Customers/imgi_9_index.jpg', name: 'Telecom Egypt' },
      { image: 'Customers/imgi_10_m.jpg', name: 'Mobinil' },
      { image: 'Customers/imgi_11_q.jpg', name: 'Alcatel-Lucent' },
    ],
  },
  {
    title: 'Conatructions',
    items: [
      { image: 'Customers/imgi_12_2.jpg', name: 'OCI' },
      { image: 'Customers/imgi_13_1.jpg', name: 'Arab Contractors' },
    ],
  },
  {
    title: 'Government',
    items: [
      { image: 'Customers/imgi_14_10.jpg', name: 'Ministry of Water Resources and Irrigation' },
      { image: 'Customers/imgi_15_9.jpg', name: 'Ministry of Justice' },
      { image: 'Customers/imgi_16_8.jpg', name: 'Ministry of Higher Education' },
      { image: 'Customers/imgi_17_7.jpg', name: 'Ministry of Electricity and Energy' },
      { image: 'Customers/imgi_18_5.jpg', name: 'Drainage & Drinking Water Company' },
      { image: 'Customers/imgi_19_4.jpg', name: 'Central Traffic Department' },
      { image: 'Customers/imgi_20_5-1.jpg', name: 'Alexandria Port Authority' },
    ],
  },
  {
    title: 'Hospital',
    items: [
      { image: 'Customers/imgi_21_12.jpg', name: 'Nozha International Hospital' },
      { image: 'Customers/imgi_22_11.jpg', name: 'Dar Al Fouad Hospital' },
    ],
  },
  {
    title: 'Industrial',
    items: [
      { image: 'Customers/imgi_23_14.jpg', name: 'Toshiba' },
      { image: 'Customers/imgi_24_13.jpg', name: 'Dina Farms' },
    ],
  },
  {
    title: 'Insurance',
    items: [
      { image: 'Customers/imgi_25_16.jpg', name: 'Suez-Canal' },
      { image: 'Customers/imgi_26_15.jpg', name: 'Misr Insurance' },
    ],
  },
  {
    title: 'Library',
    items: [{ image: 'Customers/imgi_27_17.jpg', name: 'Library of Alexandria' }],
  },
  {
    title: 'Newspaper',
    items: [
      { image: 'Customers/imgi_28_20.jpg', name: 'Al Masry Al Youm' },
      { image: 'Customers/imgi_29_19.jpg', name: 'Al Ahram' },
      { image: 'Customers/imgi_30_18.jpg', name: 'Akhbar Al Youm' },
    ],
  },
  {
    title: 'Petroleum',
    items: [
      { image: 'Customers/imgi_31_23.jpg', name: 'GASCO' },
      { image: 'Customers/imgi_32_22.jpg', name: 'Enppi' },
      { image: 'Customers/imgi_33_21.jpg', name: 'Agiba' },
    ],
  },
  {
    title: 'Pharmaceutical',
    items: [{ image: 'Customers/imgi_34_245.jpg', name: 'IBN SINA Pharma' }],
  },
];

export const ALL_CUSTOMERS: CustomerItem[] = CUSTOMER_GROUPS.flatMap(
  (group) => group.items,
);
