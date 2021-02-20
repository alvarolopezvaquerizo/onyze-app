import { Injectable } from '@angular/core';

@Injectable()
export class PassengersService {

    private passengers: Passenger[] = [
        {
            name: "Nora M. Buchanan",
            img: "https://www.nuevatribuna.es/media/nuevatribuna/images/2018/11/08/2018110813211214994.jpg",
            interactions: "4 interactions",
            payment: "Visa",
            email: "invision@invisionapp.com",
            phone: "+144-3412-4422",
            location: "New York, NY",
            from_name: "Jackson Heights",
            from_adreess: "37-27 74th Street",
            to_name: "Greenpoint",
            to_adreess: "81 Gate St Brooklyn",
            distance: "12.3 km",
            time: "42 min",
            price: "$34.20",
            energy: "12.4 kWh"
        },
        {
            name: "Jonh Wick",
            img: "https://st.depositphotos.com/1224365/2498/i/600/depositphotos_24980235-stock-photo-portrait-of-a-normal-man.jpg",
            interactions: "1 interactions",
            payment: "mastercard",
            email: "jonh@jonh.com",
            phone: "+247-1578-1177",
            location: "Mexico",
            from_name: "Rick Rock",
            from_adreess: "11-31 75th Street",
            to_name: "Hipercar",
            to_adreess: "70 Brooklyn St Gate",
            distance: "51.7 km",
            time: "127 min",
            price: "$61.30",
            energy: "19.9 kWh"
        },
        {
            name: "Anne Wilson L.",
            img: "https://image.freepik.com/foto-gratis/rostro-mujer-piel-clara-pared-blanca-concepto-limpieza-piel-crema-efecto-lifting-belleza-juventud-cara_179694-255.jpg",
            interactions: "8 interactions",
            payment: "Apple Pay",
            email: "anne@anne.es",
            phone: "+123-4567-8989",
            location: "Canada",
            from_name: "Teatre Latte R.",
            from_adreess: "11-7 114th Street",
            to_name: "Graypoint Swet",
            to_adreess: "1 Gallet St Berlin",
            distance: "9.2 km",
            time: "7 min",
            price: "$8.02",
            energy: "4.3 kWh"
        }
    ]

    constructor() {
        
    }

    getPassengers() {
        return this.passengers;
    };

}

export interface Passenger {
    name: string;
    img: string;
    interactions: string;
    payment: string;
    email: string;
    phone: string;
    location: string;
    from_name: string;
    from_adreess: string;
    to_name: string;
    to_adreess: string;
    distance: string;
    time: string;
    price: string;
    energy: string;
};