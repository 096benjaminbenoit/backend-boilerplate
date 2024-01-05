import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Book } from "../entities/Book";
import { CreateBookInput, UpdateBookInput } from "../inputs/BookInput";
import { GraphQLError } from "graphql";

@Resolver()
export class BookResolver {
  @Mutation(() => Book)
  async createBook(@Arg("data", { validate: true }) data: CreateBookInput) {
    const newBook = new Book();
    Object.assign(newBook, data);
    const { id } = await newBook.save();
    return Book.findOne({
      where: { id },
    });
  }

  @Query(() => [Book])
  async books() {
    return Book.find();
  }

  @Mutation(() => Book)
  async updateBook(
    @Arg("bookId") id: number,
    @Arg("data", { validate: true }) data: UpdateBookInput
  ) {
    const bookToUpdate = await Book.findOneBy({ id });
    if (!bookToUpdate) throw new GraphQLError("not found");

    await Object.assign(bookToUpdate, data);

    await bookToUpdate.save();
    return Book.findOne({
      where: { id },
    });
  }

  @Mutation(() => String)
  async deleteBook(@Arg("bookId") id: number) {
    const book = await Book.findOne({ where: { id } });
    if (!book) throw new GraphQLError("not found");
    await book.remove();
    return "deleted";
  }
}
