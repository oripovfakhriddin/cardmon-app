export const LOCALSTORAGEOTHERSKEY = "othersdebts";
export const LOCALSTORAGEMYKEY = "mydebts";

export const otherDebts = [
  {
    id:"1",
    firstName: "Sherzod",
    lastName: "Mamatov",
    phoneNumber: "+998 90 666 66 66",
    amount: 2000,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, eaque!",
    dedline: "2023-11-23",
    worked: true,
    state: "Student"
  },
  {
    id:"2",
    firstName: "Samandar",
    lastName: "Keldibekov",
    phoneNumber: "+998 90 777 77 77",
    amount: 5000,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, eaque!",
    dedline: "2023-10-23",
    worked: true,
    state: "Student"
  },
  {
    id:"3",
    firstName: "Ilhomjon",
    lastName: "Rafiqov",
    phoneNumber: "+998 90 888 88 88",
    amount: 10000,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, eaque!",
    dedline: "2023-12-15",
    worked: true,
    state: "Student"
  },
] 

export const otherDebt = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    amount: "", 
    description: "",
    dedline: "",
    worked: false,
    state: "",
}