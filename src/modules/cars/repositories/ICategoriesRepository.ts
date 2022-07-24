import { Category } from '../infra/typeorm/entities/Category';

// DTO - Data Transfer object
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

// SOLID - L => LSP => Liskov Substitution Principle
// ICategoriesRepository (every repository can implement this)
interface ICategoriesRepository {
  findByName(name: string): Promise<Category>;

  list(): Promise<Category[]>;

  create({ name, description }: ICreateCategoryDTO): Promise<Category>;
}

export { ICategoriesRepository, ICreateCategoryDTO };
