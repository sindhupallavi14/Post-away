
export default class AppLevelErrHandling extends Error{
    constructor(message,statusCode)
    {
        super(message);
        this.statusCode=statusCode;
    }
}