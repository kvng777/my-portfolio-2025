export interface IImage {
  src: string;
  focalPoint: any;
  crops?: TCrop[];
  id: string;
  name: string;
  mediaType: string;
  url: string;
  extension: string;
  width: any;
  height: any;
  bytes: number;
  alt: string;
}

export interface ISortSet {
  data: IValuePair[];
  title: string;
  type: string;
  isMultiSelect: boolean;
}

export interface ILink {
  url: string;
  queryString?: any;
  title: string;
  target: any;
  destinationId?: any;
  destinationType?: any;
  route?: any;
  linkType?: string;
  display?: boolean;
  content?: string | {
    properties: {
      link: ILink[];
      text: string;
      dispaly: boolean;
    }
  };
  trackID?: string | undefined;
  link?: ILink[];
  text?: string;
}

// export interface IMedia {
//   url: string;
//   queryString: string;
//   title: string;
//   target: string;
//   destinationType: string;
//   destinationId: string;
//   route: IRoute;
//   linkType: string;
// }

export interface IStartItem {
  id: string;
  path: string;
}

export interface IRoute {
  path: string;
  startItem: IStartItem;
}

export interface ICta {
  content: any;
  items: {
    content: {
      properties: {
        iconID?: string;
        text?: string;
        link?: ILink[];
        // trackID?: string;
        display?: boolean;
      };
    };
  }[];
}

export interface ICtaImage {
  content: any;
  items: {
    content: {
      properties: {
        image: IImage[];
        // text?: string;
        link?: ILink[];
        // trackID?: string;
        display?: boolean;
      };
    };
  }[];
}

export interface IRichText {
  markup: string;
  blocks: object[];
}

export interface IValuePair {
  label: string;
  value: string;
}

export interface IFilterSet {
  copies: IFilterCopies;
  filters: IFilter[] | IGroupFilter[];
}

interface IFilterCopies {
  filterLabel: string;
  sortLabel: string;
  applyLabel: string;
  clearLabel: string;
  showingResultsLabel: string;
  mobileFilterlabel: string;
  mobileSortlabel: string;
}

export interface IFilter {
  data: IValuePair[];
  title: string;
  type: string;
  isMultiSelect: boolean;
}

export interface IGroupFilter {
  data: IGroupFilterItem[];
  title: string;
  type: string;
  isMultiSelect: boolean;
  isGroupOption: boolean;
}

export interface IGroupFilterItem {
  groupLabel: string;
  groupValue: string;
  items: IValuePair[];
  order: number;
}

export interface IColor {
  color: string;
  label: string;
}
