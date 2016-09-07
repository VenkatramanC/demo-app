import { Component } from '@angular/core';

export class Hero {
	id: number;
	name: string;
}

const HEROES: Hero [] = [ 
	{id: 2, name: "Mr Roy" }, 
	{id: 3, name: "Mr Raman"}, 
	{id: 4, name: "Mr Guru"}, 
	{id: 5, name: "Mr Sundar"}, 
	{id: 6, name: "Mr Raj"}, 
	{id: 7, name: "Mr Hero"}
];

@Component({
    selector: 'my-app',
    template:`
  		<h1>{{title}}</h1>
  		<h3>My Heroes</h3>
  		<ul>
  			<li *ngFor = "let hero of heroes">
  				<span class="badge">{{hero.id}}</span> {{hero.name}}
  			</li>
  		</ul> 
  		`
})
export class AppComponent {
	title = 'Tour of Heroes';
	heroes =  HEROES;
}



