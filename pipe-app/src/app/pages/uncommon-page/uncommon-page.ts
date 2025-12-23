import {Component, signal} from '@angular/core';
import {Card} from '../../components/card/card';
import {I18nSelectPipe} from '@angular/common';

const client1={
  name:'Fernando',
  gender:'Male',
  age:21,
  address:'Ottawa, Canada'
}

const client2={
  name:'Cindy',
  gender:'Female',
  age:20,
  address:'Toronto, Canada'
}
@Component({
  selector: 'app-uncommon-page',
  imports: [
    Card,I18nSelectPipe
  ],
  templateUrl: './uncommon-page.html',
})
export default class UncommonPage {
  client=signal(client1);
  invitationMap={
    male:'invitarlo',
    female:'invitarla',
  }
  changeClient(){
    if(this.client()==client1){
      this.client.set(client2)
    }
    this.client.set(client1);
  }
}
