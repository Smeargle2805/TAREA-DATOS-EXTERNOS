import { Component, OnInit } from '@angular/core';
import { IBerry } from '../interfaces/IBerry';
import { PokeapiService } from '../pokeapi.service';
import { BerryComponent } from '../berry/berry.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-berrylist',
  standalone: true,
  imports: [CommonModule, FormsModule, BerryComponent],
  templateUrl: './berrylist.component.html',
  styleUrl: './berrylist.component.css'
})
export class BerrylistComponent implements OnInit {
  berry?: IBerry
  cargando: boolean = true
  cantidad: number = 50

  constructor(private pokeApi: PokeapiService){
    
  }

  ngOnInit(): void {
    this.cargarBerries()
  }

  cargarBerries(){
    this.cargando = true
    this.pokeApi.getBerry(this.cantidad).subscribe(berry =>{
      this.berry = berry
      this.cargando =false
    })
  }

}
