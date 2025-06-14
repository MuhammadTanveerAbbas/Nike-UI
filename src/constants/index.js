import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";

import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
} from "../assets/images";

export const navLinks = [
  { id: "home", href: "#home", label: "Home" },
  { id: "about-us", href: "#about-us", label: "About Us" },
  { id: "products", href: "#products", label: "Products" },
  { id: "contact-us", href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  { id: "shoe1", thumbnail: bigShoe1, bigShoe: bigShoe1 },
  { id: "shoe2", thumbnail: bigShoe2, bigShoe: bigShoe2 },
  { id: "shoe3", thumbnail: bigShoe3, bigShoe: bigShoe3 },
];

export const statistics = [
  { id: "brands", value: "1k+", label: "Trusted Brands" },
  { id: "shops", value: "500+", label: "Retail Locations" },
  { id: "customers", value: "250k+", label: "Satisfied Customers" },
];

export const products = [
  { id: "p1", imgURL: shoe4, name: "Nike Air Jordan-01", price: 200.2 },
  { id: "p2", imgURL: shoe5, name: "Nike Air Jordan-10", price: 210.2 },
  { id: "p3", imgURL: shoe6, name: "Nike Air Jordan-100", price: 220.2 },
  { id: "p4", imgURL: shoe7, name: "Nike Air Jordan-001", price: 230.2 },
];

export const services = [
  {
    id: "shipping",
    imgURL: truckFast,
    label: "Complimentary Shipping",
    description:
      "Benefit from fast and free delivery on all orders, ensuring a seamless shopping experience.",
  },
  {
    id: "secure-payment",
    imgURL: shieldTick,
    label: "Secure Payment",
    description:
      "Shop with confidence using our advanced, encrypted payment systems for complete security.",
  },
  {
    id: "support",
    imgURL: support,
    label: "Dedicated Customer Support",
    description:
      "Our expert support team is available to assist you promptly at every stage of your journey.",
  },
];

export const reviews = [
  {
    id: "r1",
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "Exceptional craftsmanship and attention to detail exceeded my expectations. Highly recommended.",
  },
  {
    id: "r2",
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product quality and service were outstanding. I will definitely shop here again.",
  },
];

export const footerLinks = [
  {
    id: "products",
    title: "Products",
    links: [
      { id: "af1", name: "Air Force 1", link: "/" },
      { id: "am1", name: "Air Max 1", link: "/" },
      { id: "aj1", name: "Air Jordan 1", link: "/" },
      { id: "af2", name: "Air Force 2", link: "/" },
      { id: "nwfr", name: "Nike Waffle Racer", link: "/" },
    ],
  },
  {
    id: "help",
    title: "Support",
    links: [
      { id: "about", name: "About Us", link: "/" },
      { id: "faqs", name: "FAQs", link: "/" },
      { id: "howitworks", name: "How It Works", link: "/" },
      { id: "privacy", name: "Privacy Policy", link: "/" },
      { id: "payment", name: "Payment Policy", link: "/" },
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    links: [
      {
        id: "email",
        name: "customer@nike.com",
        link: "mailto:customer@nike.com",
      },
      { id: "phone", name: "+925 5486 2354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { id: "facebook", src: facebook, alt: "Facebook Logo" },
  { id: "twitter", src: twitter, alt: "Twitter Logo" },
  { id: "instagram", src: instagram, alt: "Instagram Logo" },
];
