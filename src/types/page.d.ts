import { IBanner } from "./component";

export interface IPage {
  id: string;
  name: string;
  seo: {
    pageTitle?: string;
    pageDescription?: string;
    pageUrl?: string;
    pageKeywords?: string;
    pageOgTitle?: string;
    pageOgDescription?: string;
    pageOgImage?: string;
  };
  breadcrumb: {
    items?: { text: string; path: string; }[];
  };
  contentType: string;
  contents?: IBanner[];
  properties?: any;
  pageTitle?: string;
}
