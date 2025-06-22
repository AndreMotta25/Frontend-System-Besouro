import { IAddress } from "./RegisterUserInterfaces";

export interface IDefaultUser {
  createdAt?: string;
  email?: string;
  jobTitle: string;
  name: string;
  role: string;
  sector: string;
  surname: string;
  userId: string;
}

export interface IDecodedToken extends IDefaultUser {
  exp: number;
  iss: string;
  sub: string;
}

export interface IUser extends IDefaultUser {
  birthDate: string;
  enabled: boolean;
  ethnicity: string;
  gender: string;
  isGuest: boolean;
  isSupervisor: boolean;
  mobilePhone: string;
  password: string;
  taxNumber: string;
  updatedAt: string;
  userMarkedToRemovalOn: string | null;
  address: IAddress;
}

export interface IGuest extends IDefaultUser {
  birthDate: string;
  cpf: string;
  createdAt: string;
  enabled: boolean;
  ethnicity: string;
  approvedEndpoints: {
    [key: string]: boolean;
  };
  gender: string;
  invitationTokenCreatedBy: IDefaultUser | null;
  mobilePhone: string;
  password: string;
  rejectionReason: string;
  updatedAt: string;
  userMarkedToRemovalOn: string | null;
}
