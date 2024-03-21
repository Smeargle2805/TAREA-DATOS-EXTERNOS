import { Component, Input, OnInit } from '@angular/core';
import { IItemResultado } from '../interfaces/IItemResultado';
import { IItemDetalle } from '../interfaces/IItemDetalle';
import { PokeapiService } from '../pokeapi.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements OnInit {
  @Input() public itemResultado?: IItemResultado
  public item?: IItemDetalle
  public cargando: boolean = true

  constructor(private pokeApi: PokeapiService){}

  ngOnInit(): void {
    this.cargando =true
    this.pokeApi.getItemDetalle(this.itemResultado?.url || '')
    .subscribe(item => {
      this.item = item
      this.cargando = false
    })
  }

}
