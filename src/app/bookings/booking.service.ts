import { Booking } from './booking.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BookingService {
// tslint:disable-next-line: variable-name
    private _booings: Booking[] = [
        {
            id: '',
            placeId: 'p1',
            placeTitle: 'Norway',
            guestNumber: 2,
            userId: 'qwer'
        }
    ];

    get bookings() {
        return [...this._booings];
    }
}
