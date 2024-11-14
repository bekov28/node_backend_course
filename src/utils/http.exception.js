export class HttpException extends Error {
  constructor(statusCode, statusMsg, msg) {
    super(msg);
    this.statusCode = statusCode;
    this.statusMsg = statusMsg;
    this.msg = msg;
  }
}
console.log(new HttpException(400, "Bad Request", "Wrong request sent"));
