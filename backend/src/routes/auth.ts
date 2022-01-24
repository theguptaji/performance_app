import { Request, Response } from "express";

const authHandler = (req: Request, res: Response) => {

    const auth = { login: "aman", password: "aman" }; // change this

    // parse login and password from headers
    const b64auth = (req.headers.authorization || "").split(" ")[1] || "";
    const [user, password] = Buffer.from(b64auth, "base64")
        .toString()
        .split(":");
    console.log("[user, password]:", user, password);

    // Verify login and password are set and correct
    if (user && password && user === auth.login && password === auth.password) {
        // Access granted...
        res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
        res.status(200).send("Authentication done!.");
        return;
    }

    // Access denied...
    res.set("WWW-Authenticate", 'Basic realm="401"'); // change this
    res.status(401).send("Authentication required."); // custom message

    // ----------------------------------------------------------------------
}

export default authHandler;