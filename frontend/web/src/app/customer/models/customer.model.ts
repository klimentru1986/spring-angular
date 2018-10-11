import { CustomerAdditionalInfo } from './customer-additional-info.model';

export class Customer {
  id: number;
  firstName: string;
  lastName: string;
  additionalInfo: CustomerAdditionalInfo;
}
