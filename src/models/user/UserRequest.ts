export class UserRequest {
    public id?: number;
    public projectId?: number;
    public fullName?: string;
    public age?: number;
    public sex?: string;
    public address?: string;
    public email?: string;
    public phoneNumber?: number;
    constructor(init?: Partial<UserRequest>) {
      Object.assign(this, init);
    }
  }