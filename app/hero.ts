import {Model} from "angular2-data";
import _ from "underscore";

@Model({
  path: "/heroes"
})
export class Hero {
  constructor(props) {
    // yeah, yeah, kinda gross I know.
    _.extend(this, props);
  }
}
