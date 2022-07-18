import { Request, Response } from 'express';
import * as DateService from './date.service';

export const get = async (
  req: Request,
  res: Response
) => {
  let queryRes: string | null;

  try {
    queryRes = await DateService.getDate();
  } catch (err) {
    return res.status(500).json({ message: "The Cake is a lie."});
  }

  if (queryRes === null) {
    return res.status(500).json({ message: "Today does not exist"});
  } else {
    return res.json(queryRes);
  }
};