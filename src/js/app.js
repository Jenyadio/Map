export default class ErrorRepository {
  constructor() {
    this.error = new Map();
  }

  addError(errNum, errText) {
    this.error.set(errNum, errText);
  }

  translate(code) {
    if (this.error.has(code)) {
      return this.error.get(code);
    }
    return 'Unknown error';
  }
}
