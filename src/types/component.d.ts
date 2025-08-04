import { ICta, IImage, ILink, IRichText, IRoute } from "./global";

export interface IComponentBase {
  type: string;
  title?: string;
  description?: string;
}

export interface IBanner extends IComponentBase {
  image?: IImage;
  cta?: ILink;
}

//  Header
export interface IHeader {
  logo: IImage[];
  logoWhite: IImage[];
  logoCompressed: IImage[];
  navigation?: {
    items: ICta[];
  };
  // search?: {
  //   items: any[];
  // }
}

//  Footer
export interface IFooter {
  logo: IImage[];
  description: IRichText;
  icons?: {
    items: ICtaImage[];
  };
  socialMedia?: {
    items: ICta[];
  };
  footerMenu: {
    items: FooterMenuItems[];
  };
  copyright: string;
  staticPages?: {
    items: ICta[];
  };
}

interface FooterMenuItems {
  content: {
    contentType: string;
    id: string;
    properties: {
      text: string;
      link: ILink[];
      title: string;
      display: boolean;
      childrenLinks: {
        items: {
          content: {
            properties: {
              title: string;
              link: ILink[];
              text: string;
              trackID: string;
              display: boolean;
            };
          };
        }[];
      };
    };
  };
  settings: string | null;
}

//  Home Banner
export interface IHomeBanner {
  title: IRichText;
  description: string;
  cTA?: {
    items:  ICta[];
  };
  media?: IImage[];
}

//  Image Cards
export interface IImageCards {
  title: IRichText;
  description: string;
  cTAs?: {
    items: ICta[]
  };
  images?: IImage[];
}

//  Our Impact
export interface IOurImpact {
  backgroundImage?: IImage[];
  title: IRichText;
  description: string;
  cTA?: {
    items: ICta[];
  };
  cards?: INewsPickableDetail[];
}

//  Big Card
export interface IBigCard {
  title: IRichText;
  description: string;
  cTA?: {
    items: ICta[];
  };
  // cards?: {
  //   items: any[];
  // };
}

//  Carousel Cards
export interface ICarouselCards {
  title: IRichText;
  description?: string;
  cTA?: {
    items: ICta[];
  };
  cards: ICardDetail[];
  backgroundColor: {
    color: string;
    label: string;
  };
}
export interface IRelatedArticles {
  title: IRichText;
  description?: string;
  cTA?: {
    items: ICta[];
  };
  cards: {
    items: ICardDetail[];
  };
  backgroundColor: {
    color: string;
    label: string;
  };
}

export interface IRelatedArticles {
  title: IRichText;
  description?: string;
  cTA?: {
    items: ICta[];
  };
  news: {
    items: ICardDetail[];
  };
  backgroundColor: {
    color: string;
    label: string;
  };
}

//  Text And Shape
export interface ITextAndShape {
  title: IRichText;
  description: string;
  cta?: {
    items: ICta[];
  };
  image?: IImage[];
}

//  Text Amd Quote
export interface ITextAndQuote {
  title: IRichText;
  description: IRichText;
  image?: IImage[];
  quoteImage?: IImage[];
  quoteText: string;
  quoteAuthor: string;
}

////  Repeated Components
//  News Detail Card
interface INewsPickableDetail {
  contentType: string;
  id: string;
  updateDate: string;
  route: IRoute;
  properties: {
    link: string;
    thumbnail: IImage[];
    title: string;
    description: string;
    tags: string[];
    publishedDate: string;
    readingTime: string;
  };
}

//  Card Detail
export interface ICardDetail {
  index: number;
  title: string;
  subtitle?: string;
  description: string;
  image: IImage[];
  cTA?: {
    items: ICta[];
  };
  tags: string[];
}

//  News Listing Item Detail
export interface INewsDetail {
  link: string;
  thumbnail: IImage[];
  title: string;
  description: string;
  tags: string[];
  publishedDate: string;
  readingTime: string;
  isQuartzCream: boolean;
}