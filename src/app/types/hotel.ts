 export interface Hotel {
  _id: string
  hotelName: string,
  hotelType: string,
  address: {
    province: number,
    district: number,
    ward: number,
    street_address: string
  },
  hotelImage: {
    path: string,
    id_imag: string
  },
  ranking: number,
  utilities: [
    string
  ],
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
  },
  ranking: string,
  descreiptionHotel: string
}
