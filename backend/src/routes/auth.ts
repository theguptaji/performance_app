import { Request, Response } from "express";

const authHandler = (req: Request, res: Response) => {

    console.log('req', req);
    console.log('req.body', req.body);
    const auth = { login: "username", password: "password" }; // change this

    // parse login and password from headers
    const b64auth = (req.headers.authorization || "").split(" ")[1] || "";
    // const [login, password] = Buffer.from(b64auth, "base64")
    //     .toString()
    //     .split(":");
    const [login, password] = b64auth.toString().split(":");

    // Verify login and password are set and correct
    if (login && password && login === auth.login && password === auth.password) {
        // Access granted...
        return "next()";
    }

    // Access denied...
    res.set("WWW-Authenticate", 'Basic realm="401"'); // change this
    res.status(401).send("Authentication required."); // custom message

    // ----------------------------------------------------------------------
}

export default authHandler;