import { Component, Input } from '@angular/core';
@Component({
    selector: 'app-my-second',
    templateUrl: './second.html',
    styleUrls: ['./second.scss']
})
export class SecondComponent {
    @Input()
    name: string;
}
