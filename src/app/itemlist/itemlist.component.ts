import { Component, OnInit } from '@angular/core';
import { IItem } from '../interfaces/IItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemComponent } from '../item/item.component';
import { PokeapiService } from '../pokeapi.service';

@Component({
  selector: 'app-itemlist',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemComponent],
  templateUrl: './itemlist.component.html',
  styleUrl: './itemlist.component.css'
})
export class ItemlistComponent implements OnInit {
  items?: IItem
  cargando: boolean = true
  cantidad: number = 50

  constructor(private pokeApi: PokeapiService){
    
  }

  ngOnInit(): void {
    this.cargarItems()
  }

  cargarItems(){
    this.cargando = true
    this.pokeApi.getItem(this.cantidad).subscribe(items =>{
      this.items = items
      this.cargando =false
    })
  }
}
