export interface ISingleValkContent {
  params: {
    valk: string;
  };
}

export interface ISingleBlogContent {
  params: {
    slug: string;
  };
}

export interface IRootLayout {
  children: React.ReactNode;
}

export interface MdxProps {
  code: string;
}

export interface IValkCard {
  title: string;
  description: string;
  date: string;
  link: string;
  category: string;
  image: string | null;
  valk: string;
  steps: string;
  distance: string;
  duration: string;
}

export interface IExternalLinkIcon {
  href: string;
  src: string;
  alt: string;
}

export interface IGoogleAnalytics {
  GA_TRACKING_ID: string;
}

export interface ImageData {
  desc: string;
  date: string;
  url: string;
}

export interface ICategoryIcon {
  category: string;
}

export interface IPostCard {
  title: string;
  description: string;
  date: string;
  link: string;
  category: string;
  image: string | null;
  slug: string;
}

export interface IBlogImage {
  source: string;
  description: string;
}

export interface IList {
  points: string[];
}

export interface IListItemWithTitle {
  title: string
  text: string
}

export interface IQuote {
  from: string;
  children: any;
}