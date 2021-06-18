import {
  Schema, model, Document, Model,
} from 'mongoose';

export type cepAttributes = {
  cidade: String;
  temp: Number;
};

export type CrudDocument = Document & cepAttributes;

type CrudModel = Model<CrudDocument>;

const CrudSchema = new Schema(
  {
    cidade: String,
    temp: Number,
  },{ collection: 'usercollection' }
);

export default model<CrudDocument, CrudModel>('Crud', CrudSchema);
