 export interface ListHotel{
  docs:Hotel[],
  hasNextPage: boolean
  hasPrevPage: boolean
  limit: number
  nextPage: number | null
  page: number
  pagingCounter: number
  prevPage: number |null
  totalDocs: number
  totalPages: number
 }
 
 export interface Hotel {
  _id: string
  hotelName: string,
  hotelType: {
    _id: string,
    name: string
  }
  address: {
    province: number,
    district: number,
    ward: number,
    street_address: string
  },
  hotelImage: {
    path: string,
    filename: string
  },
  ranking: number,
  descreiptionHotel: string
}

export interface FormHotel {
  hotelName: string,
  hotelType: string,
  address: {
    province: number | null,
    district: number | null,
    ward: number | null,
    street_address: string
  },
  hotelImage: {
    path: string,
    filename: string
  },
  ranking: string,
  descreiptionHotel: string
}
