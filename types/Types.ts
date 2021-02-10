export type POST = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type COMMENT = {
  userId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type TASK = {
  userId: number;
  id: number;
  title: string;
  complete: boolean;
};
