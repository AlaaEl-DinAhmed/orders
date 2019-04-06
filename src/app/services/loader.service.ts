import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoaderService {
    loader$ = new BehaviorSubject<boolean>(null);
    constructor() {}
    showLoader() {
        this.loader$.next(true);
        return this.loader$.getValue();
    }
    hideLoader() {
        this.loader$.next(false);
        return this.loader$.getValue();
    }
}
