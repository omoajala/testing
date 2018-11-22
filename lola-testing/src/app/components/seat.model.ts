import { Deserializable } from '../components/deserialize.component';

export class Seat implements Deserializable {
    row: number;
    seat: string;
    class: string;
  
    deserialize(input: any) {
      Object.assign(this, input);
      return this;
    }
  }