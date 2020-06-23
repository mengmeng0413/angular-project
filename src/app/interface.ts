export interface Todo {
  id: number;
  description: string;
  category: number;
  content: string;
}

export enum Category{
  html,
  css,
  js
}
