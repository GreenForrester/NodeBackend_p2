export class DomainError extends Error 
{
    public statusCode: number;
    public message: string;
    public originmessage: string;
    public timestamp: Date;
    public name: string;
    public stackTrace: string | undefined;
  
    constructor(statusCode: number, message: string) 
    {
      super(message);
      this.statusCode = statusCode;
      this.message = message;
      this.originmessage = "";
      this.timestamp = new Date();
      this.name = this.constructor.name; // Set the name for easier identification
      this.stackTrace = this.stack;
      Object.setPrototypeOf(this, new.target.prototype); // Ensure proper inheritance
    }
  }