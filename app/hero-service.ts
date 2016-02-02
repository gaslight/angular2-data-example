import {Injectable} from 'angular2/core';
import {Store, StoreConfig} from "angular2-data";
import { Injectable } from "angular2/core";
import {Hero} from './hero';

@Injectable()
@StoreConfig({
  baseURL: "http://localhost:8000"
})
export class HeroService extends Store {

  constructor(public http: Http) {}

	getHeroes() {
		return this.query(Hero);
	}

	getHero(id: number) {
    return this.find(Hero, id);
	}
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
