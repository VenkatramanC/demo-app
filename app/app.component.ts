import { Component } from '@angular/core';

export class Hero {
	id: number;
	name: string;
}

@Component({
    selector: 'my-app',
    template: '<h1>{{title}} {{hero.name}}</h1>'
})

export class AppComponent {
	title = 'Tour of Heroes';
	hero: Hero{
		id: 1;
		name: 'Wind Strom';
	}	
}


