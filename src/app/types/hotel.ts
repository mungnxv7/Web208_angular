 export interface Hotel {
        _id: string
        hotelName: string,
        hotelType: string,
        address: {
          province: string,
          district: string,
          ward: string,
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
