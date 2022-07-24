import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { Specification } from '../../infra/typeorm/entities/Specification';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

class CreateSpecificationController {
  async handle(req: Request, res: Response): Promise<Response<Specification>> {
    const { name, description } = req.body;

    const createSpecificationUseCase = container.resolve(
      CreateSpecificationUseCase
    );

    const createdSpecification = await createSpecificationUseCase.execute({
      name,
      description,
    });

    return res.status(201).json(createdSpecification);
  }
}

export { CreateSpecificationController };
