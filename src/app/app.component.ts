import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PokeapiService } from './pokeapi.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'itemList';

  constructor(private PokeApi: PokeapiService){

  }

  ngOnInit(): void {
    this.PokeApi.getItem(100)
  }
}
