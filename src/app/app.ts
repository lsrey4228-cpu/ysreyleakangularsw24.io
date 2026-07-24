// this is import it is mean libray
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Product } from './product/product';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

}
