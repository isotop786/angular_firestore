const date = new Date();
export  interface User{
  firstName :string,
  lastName  :string,
  email: string,
  isActive?:boolean,
  balance?: number,
  registered?: Date ,
  hide?:boolean

}


