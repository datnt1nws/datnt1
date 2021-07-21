export class UserResponse {
    public id?: number;
    public projectId?: number;
    public fullName?: string;
    public age?: number;
    public sex?: string;
    public address?: string;
    public email?: string;
    public phoneNumber?: number;
    constructor(init?: Partial<UserResponse>) {
      Object.assign(this, init);
    }
  }