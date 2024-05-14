export interface TypeLink {
  id: String;
  title: String;
  slashtag: String;
  destination: String;
  createdAt: Date;
  updatedAt: Date;
  expiredAt: Date;
  status: String;
  tags: String[];
  linkType: String;
  clicks: Number;
  isPublic: Boolean;
  shortUrl: String;
  domainId: String;
  domainName: String;
  domain: {
    id: String;
    ref: String;
    fullName: String;
    sharing: {
      protocol: {
        allowed: String[];
        default: String;
      };
    };
    active: Boolean;
  };
  https: Boolean;
  favourite: Boolean;
  creator: {
    id: String;
    fullName: String;
    avatarUrl: String;
  };
  integrated: Boolean;
}

export interface TypeFetchLinks {
  statusCode: Number;
  message: String;
  data: TypeLink[];
}

export interface TypeErrFetch {
  statusCode: number;
  code: string;
  message: string;
}
