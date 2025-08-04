// import { ILink } from '@/types/global';

export const checkMediaUrl = (link: string) => {
  const images = [
    'jpg',
    'jpeg',
    'jpe',
    'jp2',
    'svg',
    'svgz',
    'gif',
    'png',
    'webp',
    'tiff',
    'tif',
  ];
  const videos = ['mp4', 'avi', 'mov', 'mpg', 'mp2'];

  if (!link || link === null) {
    return '';
  }

  if (link.substr(0, 1) === '#') {
    return 'anchor';
  }

  // const regex = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;
  /* eslint-disable-next-line */
  var regex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = link.match(regex);

  if (match && link.indexOf('http') > -1 && match[2]?.length === 11) {
    return 'youtube';
  }

  if (link.indexOf('vimeo') > -1) {
    return 'vimeo';
  }

  const url =
    link.indexOf('http') > -1
      ? new URL(link.toLowerCase())
      : { pathname: link.toLowerCase() };
  const extension = url.pathname.split('.')[1] || '';

  if (images.includes(extension)) {
    return 'image';
  }
  if (videos.includes(extension)) {
    return 'video';
  }
  return '';
};

export const isExternalLink = (url: string) => {
  const pattern = /^(((http|https|ftp):\/\/)|mailto:)/;
  return pattern.test(url);
};

// export const linkToParams = (link: any) => {
//   if (link) {
//     const thisLink: ILink = link.length > 0 ? link[0] : link;
//     let href: string = '';
//     switch (thisLink.linkType) {
//       case 'Content':
//         href = thisLink.route.path;
//         break;
//       case 'External':
//       case 'Media': // TODO: Kevin - for handling PDF downloads
//         href = thisLink.url;
//         break;
//     }
//     if (thisLink.queryString) {
//       href = `${href}${thisLink.queryString}`;
//     }
//     return {
//       href,
//       linktype: thisLink.linkType,
//       target: thisLink.target,
//       querystring: thisLink.queryString,
//     };
//   }
//   return {
//     href: '',
//     linkType: '',
//     querystring: '',
//   };
// };

export const removeHtmlEntitiesFromStr = (str: string) =>
  str?.replace(/&(?:[a-z]+|#\d+);/g, '');

export const removeTagsFromStr = (str: string) =>
  str ? removeHtmlEntitiesFromStr(str)?.replace(/<[^>]*>/g, '') : '';

export const stringToKey = (str: string) => {
  str = removeTagsFromStr(removeHtmlEntitiesFromStr(str));
  str = str.replace(/\s+/g, '_');
  str = str.toLowerCase();
  return str;
};

