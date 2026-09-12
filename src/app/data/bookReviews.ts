import bookReviewImage from '../../assets/Book Review.png';

export interface BookReview {
  title: string;
  role: string;
  description: string;
  publisher: string;
  publicationDate: string;
  language: string;
  isbn10: string;
  isbn13: string;
  image: string;
  bookUrl: string;
  linkedinPostUrl: string;
}

export const bookReviews: BookReview[] = [
  {
    title: 'CompTIA CySA+ CS0-003 Certification Guide - 5th Edition',
    role: 'Book Reviewer',
    description:
      'Contributed as a book reviewer for the CompTIA CySA+ CS0-003 Certification Guide - 5th Edition.',
    publisher: 'Packt Publishing',
    publicationDate: '2025-04-30',
    language: 'English',
    isbn10: '1835468926',
    isbn13: '978-1835468920',
    image: bookReviewImage,
    bookUrl: 'https://www.packtpub.com/en-us/product/comptia-cysa-cs0-003-certification-guide-9781835461389',
    linkedinPostUrl: 'https://lnkd.in/p/dN_uU5Es',
  },
];