// import { IRichText } from "./global.d";
// import { IRoute, IImage, ICta, ICtaImage } from "./global";

// export interface IWebSettings {
//   contentType: string;
//   name?: string;
//   createDate: string;
//   updateDate: string;
//   route: IRoute;
//   id: string;
//   properties: IProperties;
//   header?: IHeader;
//   footer?: IFooter;
//   cultures: Cultures;
// }

// export interface Cultures {}

// export interface IProperties {
//   //  Header Section
//   logo: IImage[];
//   logoWhite: IImage[];
//   logoCompressed: IImage[];
//   headerNavigations: IMainNavigation;
//   search?: {
//     items: {
//       content: {
//         properties: {
//           display: boolean;
//           popularLabel: string;
//           popularTags: {
//             items: {
//               content: {
//                 properties: {
//                   text: string;
//                   display: boolean;
//                 };
//               }
//             }[];
//           };
//         }
//       }
//     }[];
//   };

//   //  Footer Section
//   footerLogo: IImage[];
//   footerDescription: IRichText;
//   footerIcons?: {
//     items: ICtaImage[];
//   };
//   socialMedia?: {
//     items: ICta[];
//   };
//   footerMenu: FooterMenu;
//   copyright: string;
//   staticPages?: {
//     items: ICta[];
//   };
// }