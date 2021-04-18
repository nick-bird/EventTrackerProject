export class PracticeLog {
id: number;
materials: string;
notes: string;
timePlayed: number;
createdAt: Date;


constructor(

  id?: number,
  materials?: string,
  notes?: string,
  timePlayed?: number,
  createdAt?: Date,

){

this.id = id;
this.materials = materials;
this.notes = notes;
this.timePlayed = timePlayed;
this.createdAt = createdAt;

}
}
