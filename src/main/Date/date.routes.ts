import express from 'express';
import { get } from './date.controller';

export const dateRouter = express.Router();

dateRouter.route('/').get(get);
