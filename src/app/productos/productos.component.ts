import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos:Producto[]=[
    {idproducto:1,nombre:"chocolate",precio:3.50,cantidad:30},
    {idproducto:2,nombre:"galleta",precio:0.50,cantidad:40}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
