// export class Contact {

//     constructor(
//         private firstName: string,
//         private irstName: string,
//         private eMail: string,
//         private state: string,
//         private hosting: string
//         ) {

//     }
// }

export interface Contact {
    firstName: string;
    lastName: string;
    eMail: string;
    state: string;
    hosting: string;
}