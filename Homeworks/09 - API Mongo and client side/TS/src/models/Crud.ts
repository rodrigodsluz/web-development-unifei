import {
  Schema, model, Document, Model,
} from 'mongoose';

export type CrudAttributes = {
  name: String;
  cpf: Number;
};

export type CrudDocument = Document & CrudAttributes;

type CrudModel = Model<CrudDocument>;

const CrudSchema = new Schema(
  {
    name: String,
    cpf: Number,
  },{ collection: 'usercollection' }
);

export default model<CrudDocument, CrudModel>('Crud', CrudSchema);
