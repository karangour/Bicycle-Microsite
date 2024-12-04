export type Screenshot = {
    icon: string;
    title: string;
    description: string;
    datapoint: string[];
    [key: string]: string | string[] | undefined;
  };
  
  export type UseCaseData = {
    title: string;
    problem: string;
    solution: string;
    screenshots: Screenshot[];
  };
  
  export type UseCaseMain = {
    heading: string;
    subheading: string;
    data: UseCaseData[];
    business?: UseCaseData[]; // Optional as some verticals may not have this
  };
  
  export type Feature = {
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
      intro: {
        heading: string;
        subheading: string;
        examples: {
          title: string;
          description: string;
          icon: string;
        }[];
      };
      main: UseCaseMain;
    };
    features?: Features; // Optional as not all verticals may have features
  };
  