import { HttpStatusCode } from '../../../ca_presentation/middleware/errorhandling/httpstatuscodes';
import { HttpStatusMessages } from '../../../ca_presentation/middleware/errorhandling/httpstatusmessages';
import { SystemError } from '../../../ca_presentation/middleware/errorhandling/systemerror';

export class BaseRepository {

  // Reusable exception handler
  protected handleError(error: unknown, controllerName: string)
  {
      const err = new SystemError(
        HttpStatusCode.INTERNAL_SERVER_ERROR,
        HttpStatusMessages[HttpStatusCode.INTERNAL_SERVER_ERROR]
      );
      err.stackTrace = (error as Error).stack;
      err.originmessage = (error as Error).message;
      err.name = controllerName;
      return Promise.reject(err);//not rethrowing , doing a promise rejection in async 
  }
  

  }
