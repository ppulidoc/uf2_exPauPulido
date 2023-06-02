import {Component, OnInit} from '@angular/core';
import {HttpClientModule, HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-exercisis',
  templateUrl: './exercisis.component.html',
  styleUrls: ['./exercisis.component.css']
})
export class ExercisisComponent implements OnInit {
constructor(private http: HttpClient ) {
  this.ex1()

}

  ngOnInit() {
    this.agregarCampoVirgenSanta();
  }

  ex1(){
    this.http.post('http://localhost:3080/api/ex1', {} ).subscribe();
  }


  agregarCampoVirgenSanta() {
    this.http.post<any>('http://localhost:3080/api/virgenSanta', {}).subscribe(
    );
  }



}
