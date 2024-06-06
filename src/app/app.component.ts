import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  public title: string = 'Hola Mundo';

  public counter: number = 10;

  incrementCounter(valor: number): void{
    this.counter += valor;
  }

  resetButton(): void{
    this.counter = 10;
  }

}
