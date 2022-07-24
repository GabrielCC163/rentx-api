import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { Category } from '../../infra/typeorm/entities/Category';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {
  async handle(req: Request, res: Response): Promise<Response<Category>> {
    const { name, description } = req.body;

    const createCategoryUseCase = container.resolve(CreateCategoryUseCase);

    const categoryCreated = await createCategoryUseCase.execute({
      name,
      description,
    });

    return res.status(201).json(categoryCreated);
  }
}

export { CreateCategoryController };
