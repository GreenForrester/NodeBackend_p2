import { NextFunction, Request, Response} from 'express';
import { HttpStatusCode } from './httpstatuscodes';
import { ApplicationError } from './applicationerror';
import { DomainError } from './domainerror';
import { SystemError } from './systemerror';

class ExceptionHandler 
{

  public handleException(error: Error, req: Request, resp: Response, next: NextFunction): void 
  {
    console.error(error.stack); // Log the error for debugging
    console.log(error.constructor.name);

    let statusCode = HttpStatusCode.INTERNAL_SERVER_ERROR;
    let message = 'An unexpected error occurred.';

    switch (error.constructor.name) 
    { 
        case "ApplicationError":
          statusCode = (error as ApplicationError).statusCode;
          message = (error as ApplicationError).message;
          break;
        case "SystemError":
          statusCode = (error as SystemError).statusCode;
          message = (error as SystemError).message;
          break;
        case "DomainError":
          statusCode = (error as DomainError).statusCode;
          message = (error as DomainError).message;
          break;

        // ... handle other custom errors
        default:
          resp.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({ message: 'Unknown Internal Server Error' }); 
    }  
      
      resp.status(statusCode).json({ message: message });
      next(error); //pass to next middleware in app.ts chain
  }
}

export const exceptionHandler = new ExceptionHandler().handleException;