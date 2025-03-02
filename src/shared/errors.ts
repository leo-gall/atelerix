export class InvalidConfigFileError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidConfigFileError";
  }
}
