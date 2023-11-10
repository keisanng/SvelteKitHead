declare interface PageMeta {
  robots?: string;
  title: {
    page?: string;
    site?: string;
    strict?: boolean;
  };
  description?: string;
  type: {
    og?: string;
    tw?: string;
  };
  locales: Array<string>;
}
