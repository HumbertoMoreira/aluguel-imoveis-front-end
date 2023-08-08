import { Component } from '@angular/core';
import { Reserva } from '../../models/Reserva'
import { ReservaService } from ''; 
@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.css']
})
export class ReadAllComponent {

  list: Reserva[] = []

  constructor(private service: Reserva){}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void{
    this.service.findAll().subscribe((resposta) => {
      this.list = resposta;
    })
  }

}
