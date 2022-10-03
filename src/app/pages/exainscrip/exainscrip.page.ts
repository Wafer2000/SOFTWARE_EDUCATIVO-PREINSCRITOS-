import { UsuariosIns, RespuestaIns } from './../../models/models';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController } from '@ionic/angular';
import { PreguntasIns } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exainscrip',
  templateUrl: './exainscrip.page.html',
  styleUrls: ['./exainscrip.page.scss'],
})
export class ExainscripPage implements OnInit {

  usuario: UsuariosIns[] = [];

  preguntas1: PreguntasIns [] = [];
  resp1: string = '';

  preguntas2: PreguntasIns [] = [];
  resp2: string = '';

  preguntas3: PreguntasIns [] = [];
  resp3: string = '';

  preguntas4: PreguntasIns [] = [];
  resp4: string = '';

  preguntas5: PreguntasIns [] = [];
  resp5: string = '';

  preguntas6: PreguntasIns [] = [];
  resp6: string = '';

  preguntas7: PreguntasIns [] = [];
  resp7: string = '';

  preguntas8: PreguntasIns [] = [];
  resp8: string = '';

  preguntas9: PreguntasIns [] = [];
  resp9: string = '';

  preguntas10: PreguntasIns [] = [];
  resp10: string = '';

  enableNuevo = false;

  completado: boolean = false;

  constructor(
    public modalController: ModalController,
    public firestoreService: FirestoreService, 
    public firebaseauthService: FirebaseauthService,
    private interaction: InteractionService,
    public menucontroller: MenuController,
    public router: Router
    ) { }

  ngOnInit() {
    this.Preguntas();
    this.Completado();
    this.verificar();
  }

  async verificar(){
    const veri = await this.firebaseauthService.getEmailVerified()
    if(veri==false){
      this.router.navigate(['/sendemail']);
      this.interaction.presentToast('Email No Verificado');
    }
  }

  openmenu(){
    console.log('Abrir Menu');
    this.menucontroller.toggle('menu');
  }

  async Completado(){
    const uid = await this.firebaseauthService.getUid();
    this.firestoreService.getCollectionUnic<UsuariosIns>('UsuariosIns', 'uid', uid).subscribe(res=>{
      this.usuario = res;
    });
  }

  Preguntas(){
    const path = 'PreguntaIns';
    this.firestoreService.getCollectionUnic<PreguntasIns>(path, 'id', '1').subscribe(res => {
      this.preguntas1 = res;
      console.log(res)
    });
    this.firestoreService.getCollectionUnic<PreguntasIns>(path, 'id', '2').subscribe(res => {
      this.preguntas2 = res;
      console.log(res)
    });
    this.firestoreService.getCollectionUnic<PreguntasIns>(path, 'id', '3').subscribe(res => {
      this.preguntas3 = res;
      console.log(res)
    });
    this.firestoreService.getCollectionUnic<PreguntasIns>(path, 'id', '4').subscribe(res => {
      this.preguntas4 = res;
      console.log(res)
    });
    this.firestoreService.getCollectionUnic<PreguntasIns>(path, 'id', '5').subscribe(res => {
      this.preguntas5 = res;
      console.log(res)
    });
    this.firestoreService.getCollectionUnic<PreguntasIns>(path, 'id', '6').subscribe(res => {
      this.preguntas6 = res;
      console.log(res)
    });
    this.firestoreService.getCollectionUnic<PreguntasIns>(path, 'id', '7').subscribe(res => {
      this.preguntas7 = res;
      console.log(res)
    });
    this.firestoreService.getCollectionUnic<PreguntasIns>(path, 'id', '8').subscribe(res => {
      this.preguntas8 = res;
      console.log(res)
    });
    this.firestoreService.getCollectionUnic<PreguntasIns>(path, 'id', '9').subscribe(res => {
      this.preguntas9 = res;
      console.log(res)
    });
    this.firestoreService.getCollectionUnic<PreguntasIns>(path, 'id', '10').subscribe(res => {
      this.preguntas10 = res;
      console.log(res)
    });
  }

  async GuardarRespuestas(resp1, resp2, resp3, resp4, resp5, resp6, resp7, resp8, resp9, resp10, usuariosins){
    const uid = await this.firebaseauthService.getUid();
    const path = 'RespuestaIns';
    const respuestas: RespuestaIns = {
      uid,
      nombres: usuariosins.nombres,
      apellidos: usuariosins.apellidos,
      resp1,
      resp2,
      resp3,
      resp4,
      resp5,
      resp6,
      resp7,
      resp8,
      resp9,
      resp10,
      tiempo: new Date(),
      fecha: new Date().toLocaleDateString('es-GB'),
      hora: new Date().toLocaleTimeString('en-US'),
    }
    this.interaction.presentLoading('Guardando Respuestas...')
    this.firestoreService.createDoc(respuestas, path, uid).then(res=>{
      console.log('Respuestas-> ',res);
      const path1 = 'UsuariosIns';
      const data1 = {
        completado: true
      };
      this.firestoreService.updateDoc(path1, uid, data1).then(res =>{
        console.log('Se realizo -> ', res)
      })
      this.interaction.closeLoading();
      this.interaction.presentToast('Guardado con exito')
    }).catch(err=>{
      console.log('ERROR-> ',err)
      this.interaction.closeLoading();
      this.interaction.presentToast('A ocurrido un ERROR')
    })
  }

}
