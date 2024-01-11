 export interface Hotel {
        _id: string
        name: string,
        type_ID: string,
        address: {
          city: string,
          district: string,
          ward: string,
          specific_location: string
        },
        image: {
          path: string,
          id_imag: string
        },
        ranking: number,
        utilities: [
          string
        ],
        description: string
}
