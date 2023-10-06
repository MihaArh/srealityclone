export interface IEstate {
  id: number;
  title: string;
  image_url: string;
}

export interface IEstatesApi {
  totalPages: number;
  currentPage: number;
  estates: IEstate[];
}
