import { HttpStatusCode } from '../middleware/errorhandling/httpstatuscodes';
import { HttpStatusMessages } from '../middleware/errorhandling/httpstatusmessages';
import { ApplicationError } from '../middleware/errorhandling/applicationerror';
import { SystemError } from '../middleware/errorhandling/systemerror';
import { DomainError } from '../middleware/errorhandling/domainerror';

export class BaseController {

  // Reusable exception handler
  protected handleError(error: unknown, controllerName: string)
  { 
    if (error instanceof SystemError) throw error; //No need to recreate 
    if (error instanceof DomainError) throw error; //No need to recreate 

      const err = new ApplicationError(
        HttpStatusCode.INTERNAL_SERVER_ERROR,
        HttpStatusMessages[HttpStatusCode.INTERNAL_SERVER_ERROR]
      );
      err.stackTrace = (error as Error).stack;
      err.originmessage = (error as Error).message;
      err.name = controllerName;
      throw err; 
  }
}