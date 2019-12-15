import { Injectable } from '@angular/core';
import * as Parse from 'parse';

@Injectable({
  providedIn: 'root'
})
export class GhichuService {

  constructor() {
    const appId = 'UZG9qPXGENE8OU7E8JMxUWrb45Rt7jxabafi54yf';
    const jsKey = 'pVXBBLMKZ6PbQrLEgZxg4LEpZmaaeFgtROJCcUf4';
    Parse.serverURL = 'https://parseapi.back4app.com';
    Parse.initialize(appId, jsKey);
  }

  public getNote() {
    const feedBackTable = Parse.Object.extend('GhiChu');
    const query = new Parse.Query(feedBackTable);
    return new Promise((rs, rj) => {
      query.find().then((results) => {
        rs(results);
        console.log('fb found', results);
      }, (error) => {
        console.error('Error while fetching dateNote', error);
      });
    });
  }

  public deleteNote(id) {
    const feedBack = Parse.Object.extend('GhiChu');
    const query = new Parse.Query(feedBack);
// here you put the objectId that you want to delete
    return new Promise((rs, rj) => {
      query.get(id).then((object) => {
        object.destroy().then((response) => {
          rs();
          console.log('Deleted feedBack', response);
        }, (error) => {
          console.error('Error while deleting feedBack', error);
        });
      });
    });
  }

  public createNote(note) {
    const GhiChu = Parse.Object.extend('GhiChu');
    const myNewObject = new GhiChu();

    myNewObject.set('NoiDung', note);

    myNewObject.save().then(
        (result) => {
          if (typeof document !== 'undefined') { alert(`GhiChu created: ${JSON.stringify(result)}`); }
          console.log('GhiChu created', result);
        },
        (error) => {
          if (typeof document !== 'undefined') { alert(`Error while creating GhiChu: ${JSON.stringify(error)}`); }
          console.error('Error while creating GhiChu: ', error);
        }
    );
  }
  public updateNote(id, note) {
    const GhiChu = Parse.Object.extend('GhiChu');
    const query = new Parse.Query(GhiChu);
    query.get(id).then((object) => {
      object.set('NoiDung', note);
      object.save().then((response) => {
        if (typeof document !== 'undefined') { alert(`Updated GhiChu: ${JSON.stringify(response)}`); }
        console.log('Updated GhiChu', response);
      }, (error) => {
        if (typeof document !== 'undefined') { alert(`Error while updating GhiChu: ${JSON.stringify(error)}`); }
        console.error('Error while updating GhiChu', error);
      });
    });
  }

}
