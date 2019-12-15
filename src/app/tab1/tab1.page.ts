import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { GhichuService } from '../api/ghichu.service';
// import {HttpClient} from '@angular/common/http';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
      private ghiChuService: GhichuService,
      public modalController: ModalController,
  ) {
  }
  public allGhiChu = {};
  public listShowFb: any = [];
  public storeAllDataNote = [];
  public id: number;
  public note: string;


  // tslint:disable-next-line:use-lifecycle-interface
  async  ngOnInit() {
    await this.ghiChuService.getNote().then((res) => {
      // tslint:disable-next-line:forin
      for (const i in res) {
        this.storeAllDataNote.push(
            {id: res[i].id, noidung: res[i].attributes.NoiDung}
        );
      }
      console.log('res', this.storeAllDataNote, typeof (res));
    });
    console.log(this.storeAllDataNote[0]);
  }
  async onClickMe(id) {
    console.log(id);
    await this.ghiChuService.deleteNote(id);
    // location.reload();
    this.storeAllDataNote = [];
    this.ghiChuService.getNote().then((res) => {
      // tslint:disable-next-line:forin
      for (const i in res) {
        this.storeAllDataNote.push(
            {id: res[i].id, noidung: res[i].attributes.NoiDung}
        );
      }
      console.log('res', this.storeAllDataNote, typeof (res));
    });
  }
  async createNote() {
    console.log(this.id);
    console.log(this.note);
    await this.ghiChuService.createNote(this.note);
    // location.reload();
    this.storeAllDataNote = [];
    this.ghiChuService.getNote().then((res) => {
      // tslint:disable-next-line:forin
      for (const i in res) {
        this.storeAllDataNote.push(
            {id: res[i].id, noidung: res[i].attributes.NoiDung}
        );
      }
      console.log('res', this.storeAllDataNote, typeof (res));
    });
  }


}
