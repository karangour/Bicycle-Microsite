export type Screenshot = {
  screenshot_number: string;
  icon: string;
  title: string;
  description: string;
  datapoint: string[];
};

export type UseCaseData = {
  usecase_map: string;
  title: string;
  problem: string;
  solution: string;
  screenshots: Screenshot[];
};

export type UseCaseIntro = {
  heading: string;
  subheading: string;
  examples: {
    title: string;
    description: string;
    icon: string;
  }[];
};

export type UseCaseMain = {
  heading: string;
  subheading: string;
  data: UseCaseData[];
  business: UseCaseData[];
};

export type Feature = {
  feature_map: string;
  title: string;
  description: string;
  screenshot: Screenshot;
};

export type Pillar = {
  title: string;
  feature: Feature[];
};

export type Features = {
  heading: string;
  description: string;
  pillars: Pillar[];
};

export type VerticalDataType = {
  title: {
    heading: string;
    description: string;
    heroimage: string;
  };
  usecase: {
      intro: UseCaseIntro;
      main: UseCaseMain;
    };
  features: Features;
  
};
