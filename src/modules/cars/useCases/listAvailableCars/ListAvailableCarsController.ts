import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { Car } from '@modules/cars/infra/typeorm/entities/Car';

import { ListAvailableCarsUseCase } from './ListAvailableCarsUseCase';

class ListAvailableCarsController {
  async handle(req: Request, res: Response): Promise<Response<Car[]>> {
    const { name, brand, category_id } = req.query;

    const listAvailableCarsUseCase = container.resolve(
      ListAvailableCarsUseCase
    );

    const cars = await listAvailableCarsUseCase.execute({
      brand: brand as string,
      name: name as string,
      category_id: category_id as string,
    });

    return res.json(cars);
  }
}

export { ListAvailableCarsController };
