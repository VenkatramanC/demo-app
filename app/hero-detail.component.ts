import { Component , Input } from '@angular/core' ;
import { Hero } from './hero';
@Component ({
	selector: 'my-hero-detail',
	template: 	`<div *ngIf = hero>
					<h2>{{hero.name}} details!!</h2>
					<div><label>Id: </label>{{ hero.id }}</div>
					<div>
						<label>Name: </label>
						<h4>{{ hero.name }}</h4>
					</div>
				</div>`
})

export class HeroDetailComponent{
	@Input()
	hero: Hero;
}