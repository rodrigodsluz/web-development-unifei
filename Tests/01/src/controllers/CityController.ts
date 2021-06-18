import { Request, Response } from 'express';
import { Types } from 'mongoose';
import errorHandler from '../helpers/dbErrorHandler';
import fetch from 'node-fetch';
import City from '@models/City';

const { ObjectId } = Types;

export default {
  index(req: Request, res: Response) {
    res.render('index.ejs');
  },
  async getData(req: Request, res: Response) {
    const city = req.query.city;
    console.log(req.query.city);
    try{
      const response = await fetch(`https://viacep.com.br/ws/${city}/json/`);

    const resJson = await response.json();
    console.log(resJson);

    const localidade = resJson.localidade;
    console.log(localidade);

    await City.find({ cidade: localidade}).exec((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      console.log(result);
      const { cidade } = result;
      return res.render('list.ejs', { data: result });
    });
    }catch(error){
      return res.send({ message: 'CEP inválido, tente novamente'})
    }
    
  },
  async create(req: Request, res: Response) {
    const { cidade, temp } = req.body;
    console.log(cidade, temp);

    if(cidade !== '' || temp !== ''){
      const crud = new City({ cidade, temp });
    console.log(crud);
    crud.save((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }  
    });

    await City.find({}).exec((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      console.log(result);
      const { cidade } = result;
      return res.render('show.ejs', { data: result });
    });
    }else{
      return res.send({message: 'Algum campo está vazio, tente novamente'})
    }

    
  },
  add(req: Request, res: Response) {
    res.render('update.ejs');
  },
};
