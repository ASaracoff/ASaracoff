// URL Anatomy
// Universal Resource Locators

// http://site.com/some/page.html?x=1

// Protocol Hostname    Port    Resource        Query
// http      site.com    80    /some/page.html   ?x=1

// Protocols = conventions /ways of one thing talking to another
// http: hypertex transfer protocol (standard web>)
    // how browsers and servers communicate
// https: HTTP Secured
    // how browsers and servers communicate with encryption
// ftp: file transfer protocol
    // older protocol for sending files ove internet
// many others but these are the most common

// port - every server has 65,535 unique 'ports' you can talk to
// servics tend to have a default port
    // http is 80
    // https - 443
    // don't need to specify in URL unless you want a different port
    // wiki has a list of ALL the ports and their uses
    // don;t have to worry about them until you are testing your own code/app etc

// Resource
    // talks to some 'web server' program on the server
        // some may just read an actual file on disk:   
            // /some/page.html
        // others 'dynamically generates' a page

// Query String ?x=1
    // provides 'extra info' - search tersm, info from forsm etc
        // server is provided this info'might use to change page
        // sometimes JS will use this info in addition/instead
    // multiiple arguments are separated by '&' "?x=1&y=2"
        // arguments can be given several times ">x=1&x=2"

// so....
// http://site.com/some/page.html?x=1
    // means
// turn site into "123.45.67.89"
// connect to "123.45.67.89"
// port 80 default
//  use http protocol
// ask for "/some/page.html"
// [ass along query string: "x=1"
    // if arbitrary info is added they will be ignored

// ---------------------------------------------------------------

// HTTP
// Browsers and Servers
    // server: computer that does services to another computer
    // many types of servers

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Request and Response
                    // Request
    // Web Browser  --  Get/HTTP/1.1: Headers -->  Server
                    // Internal Work
    // Web Browser | Server <----> Database (DB) Server
                    // Response
    // Web Browser  <-- Headers: <html></html> -- Server
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// how to we talk to servers? HTTP
// Protocol
    // the way they talk
    // a structure set of expectations
        // server understands what a request looks like
        // browser knows what to see as a response
    // specify info

// What is in a Request?
    // Method (ex: GET)
    // HTTP porotocol version (almost always 1.1)
    // Resource URL you want
    // Headers
        // Hostname you're asking about
        // Date you browser thinks it is
        // language you browser want info in
        // any cookies that server has sent
        // and more!

// What is a Response?
    // HTTP protocol verions (usually 1.1)
    // response status code (200,404,etc)
    // Headers
        // content type (typically "text/html" for web pages)
        // date/time the server thinks it is
        // cookies server wants to set
        // any caching info
        // and more!

// Response Codes:
        // #1 = information responses: continue, switching protocols/early hints
    // 200 - OK
        // #2 = successful responses
    // 301 - a redirect; what you requested is elsewhere
        // starts with #3 = redirection status code
    // 404 - not found
        // #4 = client error responses, usually invalid syntax
    // 500 - server had an internal problem
        // #5 = server error responses
    // there are more, but these are the most important ones


// ---------------------------------------------------------------

// Rested </> - web tool 
    // sed request manually and see what happens
    // what is in the request and response
    // debugging help
    // free download

// headers
    // accept language
        // what type lang (engish/spanish/etc)
        // Accept-Language: <language>
        // Accept-Language: <fr-CH, fr;q=0.9, en:q=0.8, de;q-0.7, *;q=0.5>
            // fr = french
            // en = english
            // de = german
            // * = whatever is fine
            // q = 0.9 -> set preference, higher # more desireable language

            
// ---------------------------------------------------------------

// Methods: GET & POST
    // what kind of request/action
    // PUT, GET, POST, DELETE, HEAD, TRACE, PATCH
        // each are a diff aciton of intent
        // not all mandatory
    // GET vs POST
        // GET = request without side effects (is no change on server data)
            // typically arguments are passed along query string
                // if you know the arguments, you can change the URL
            // entering-URL-in-browser, cliking links, and some form submissions
        // POST = requests with side effects: ie change data on server
            // typically arguments sent as body of the request (not in query string)
            // some form sabmissions (never entering-URL-in-browser or links)
            // always do this if there's a side-effect: sending mail, charge credit card, etc

// HTTP Methods
    // GET and POST are 'HTTP methods' aka HTTP verbs
    // they are the most common by far BUT there are others
