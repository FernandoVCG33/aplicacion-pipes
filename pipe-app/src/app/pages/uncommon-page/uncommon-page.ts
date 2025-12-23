import {Component, signal} from '@angular/core';
import {Card} from '../../components/card/card';
import {
  AsyncPipe,
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  KeyValuePipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe
} from '@angular/common';

const client1={
  name:'Fernando',
  gender:'male',
  age:21,
  address:'Ottawa, Canada'
}

const client2={
  name:'Cindy',
  gender:'female',
  age:20,
  address:'Toronto, Canada'
}

@Component({
  selector: 'app-uncommon-page',
  imports: [
    Card, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, UpperCasePipe,
    KeyValuePipe, TitleCasePipe, AsyncPipe
  ],
  templateUrl: './uncommon-page.html',
})
export default class UncommonPage {
  client=signal(client1);

  invitationMap={
    male:'invitarlo',
    female:'invitarla',
  };
  changeClient(){
    if( this.client() === client1){
      this.client.set(client2);
      return;
    }
    this.client.set(client1);
  }

  clientsMap=signal({
    '=0':'no tenemos ningún cliente esperando.',
    '=1':'tenemos un cliente esperando.',
    '=2':'tenemos 2 clientes esperando.',
    'other':'tenemos # clientes esperando.'
  })
  clients=signal([
    'Maria',
    'Pedro',
    'Juan',
    'Ana',
    'Luis',
    'Laura',
    'Carlos',
    'Marta',
    'Jose',
    'Lucia'
  ]);
  deleteClient()
  {
    this.clients.update(prev => prev.slice(1));
  }

  //keyValue Pipe
  person={
    name:'Fernando',
    age:21,
    address:'Ottawa, Canada',
    profession:'Software Developer'
  }
  // Async Pipe
  promiseValue:Promise<string>=new Promise((resolve, reject)=>{
    setTimeout(() => {
          resolve(`tenemos data en la promesa`);
          console.log(`tenemos data en la promes`);
    },3500);
  })
}
