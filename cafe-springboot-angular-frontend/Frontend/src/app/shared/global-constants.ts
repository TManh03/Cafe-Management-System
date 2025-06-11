export class GlobalConstants{

    //Message
    public static genericError: string = "Something went wrong. Please try again later";

    public static unauthroized:string = "You are not authorized person to access this page.";

    public static productExistError:string = "Product already exists";

    public static productAdded: string = "Product added successfully";

    //Regex
    public static nameRegex: RegExp = /^[\p{L}0-9 ]*$/u;

    public static emailRegex:string = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";

    public static contactNumberRegex:string = "^[0-9]{10}$";

    public static passwordRegex: RegExp = /^(?=.*[A-Z])(?=.*[\W_]).{8,}$/;

    //Variable
    public static error:string = "error";
}