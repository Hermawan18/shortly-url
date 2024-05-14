export interface TypeLink {
  id: string;
  title: string;
  slashtag: string;
  destination: string;
  createdAt: Date;
  updatedAt: Date;
  expiredAt: Date;
  status: string;
  tags: string[];
  linkType: string;
  clicks: number;
  isPublic: boolean;
  shortUrl: string;
  domainId: string;
  domainName: string;
  domain: {
    id: string;
    ref: string;
    fullName: string;
    sharing: {
      protocol: {
        allowed: string[];
        default: string;
      };
    };
    active: boolean;
  };
  https: boolean;
  favourite: boolean;
  creator: {
    id: string;
    fullName: string;
    avatarUrl: string;
  };
  integrated: boolean;
}

export interface TypeFetchLinks {
  statusCode: number;
  message: string;
  data: TypeLink[];
}

export interface TypeErrFetch {
  statusCode: number;
  code: string;
  message: string;
}
