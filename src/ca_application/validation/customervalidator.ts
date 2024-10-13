import { Customer } from '../../ca_domain/entities/customer';
import { DomainError } from '../../ca_presentation/middleware/errorhandling/domainerror';
import { HttpStatusCode } from '../../ca_presentation/middleware/errorhandling/httpstatuscodes';
import { CustomerSchema } from './customerschema'; // Assuming the schema is in the same directory

export class CustomerValidator {
    validate(customer: Customer): void {
        try {
            CustomerSchema.parse(customer);
        } catch (error) {
            throw new DomainError(HttpStatusCode.BAD_REQUEST,(error as Error).message);
        }
        // Add other validation checks here if needed
    }
}