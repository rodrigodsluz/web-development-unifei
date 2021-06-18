import { Request, Response } from 'express';
import Crud from '@models/Crud';
import { Types } from 'mongoose';
import errorHandler from '../helpers/dbErrorHandler';

const { ObjectId } = Types;

export default {
  index(req: Request, res: Response) {
    res.render('index.ejs');
  },
  create(req: Request, res: Response) {
    const { name } = req.body;
    const { cpf } = req.body;

    const crud = new Crud({ name, cpf });

    crud.save((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.redirect('/list');
    });
  },
  read(req: Request, res: Response) {
    Crud.find({}).exec((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.render('list.ejs', { data: result });
    });
  },
  modify(req: Request, res: Response) {
    const { id } = req.params;

    Crud.find(ObjectId(id)).exec((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.render('update.ejs', { data: result });
    });
  },
  update(req: Request, res: Response) {
    const { id } = req.params;
    const { name } = req.body;
    const { cpf } = req.body;

    Crud.updateOne(
      { _id: ObjectId(id) },
      {
        $set: {
          name: name,
          cpf: cpf,
        },
      },
      // @ts-ignore
      (err, result) => {
        if (err) {
          return res.status(400).json({
            error: errorHandler(err),
          });
        }
        res.redirect('/list');
      },
    );
  },
  delete(req: Request, res: Response) {
    const { id } = req.params;
    // @ts-ignore
    Crud.deleteOne({ _id: ObjectId(id) }, (err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.redirect('/list');
    });
  },
};
