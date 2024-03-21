import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { IBerryResultado } from '../interfaces/IBerryResultado';
import { IBerryDetalle } from '../interfaces/IBerryDetalle';
import { PokeapiService } from '../pokeapi.service';

@Component({
  selector: 'app-berry',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './berry.component.html',
  styleUrl: './berry.component.css'
})
export class BerryComponent  implements OnInit{

  @Input() public berryResultado?: IBerryResultado
  public berry?: IBerryDetalle
  public cargando: boolean = true

  constructor(private pokeApi: PokeapiService){}

  ngOnInit(): void {
    this.cargando =true
    this.pokeApi.getBerryDetalle(this.berryResultado?.url || '')
    .subscribe(berry => {
      this.berry = berry
      this.cargando = false
    })
  }

}
