import { RequestLine } from "../requestlines/requestlines.class";
import { User } from "../user/user.class";

export class Request {
    id: number = 0;
    description: string = "";
    justification: string = "";
    rejectionReason: string = "";
    deliveryMode: string = "Pickup";
    status: string = "New";
    total: number = 0.00;
    userId: number = 0;

    user!: User;

    requestLine!: RequestLine[];
}