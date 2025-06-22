
export interface IUserDetails extends IUserRegisterData {
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface IAddress {
  addressId?: string; 
  complement: string;
  state: string;
  city: string;
  district: string;
  street: string;
  country: string;
  postalCode: string;
  zone: string; 
  number: string;
  addressFor?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IAccount {
  confirmPassword?: string | undefined;
  email: string;
  password: string;
}

export interface IGeneralData {
  name: string;
  surname: string;
  role: string; 
  gender: string; 
  ethnicity: string; 
  birthDate: any; 
  sector: string;
  jobTitle: string,
  taxNumber: string,
  mobilePhone: string,
  isSupervisor: boolean, 
  isGuest?: boolean,
}

export interface IGuestGeneralData {
  name: string;
  surname: string;
  gender: string; 
  ethnicity: string; 
  birthDate: any; 
  cpf: string,
  mobilePhone: string,
}

export interface IUserRegisterData {
  generalData?: IGeneralData;
  address?: IAddress | any;
  account?: IAccount;
  [key: string]: any;
}
