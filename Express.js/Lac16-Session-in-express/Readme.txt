// Secret : Session is the secret use to sign the session ID cookie. This can be either STRING for a single secret, or an array of multiple secrets.

// Resave : It force the session to be saved back to to the session store , even if the session was never modified during the request.

// SavaUnInitialized : It force a session that is "uninitialized" to be saved to the store.A session is uninitialized when it is new new but not modified.

// cookie __ Setting objects for the session ID cookie
// name __ Setting objects for the session ID cookie
// Proxy __ Trust that reverse proxy when setting secure cookies.
// Store __ The session store instance, defaults to a new Memory Store instance.

//   requst.session
//   To store or access the session data.   Example : req.session.count = 2
//   request.session.regenerate()
//   To regenerate the session simply invoked the method
//   request.session.destroy(callback)
//   To destroy the session and will unset the req.session.property. Once complete the callback will be invoked
//   request.session.reload(callback)
//   To reload the session date from the store and re-populates the req.session object. Once complete the callback will be invo
//   request.session.id;
//   request.session.cookie;
//   Cookie.maxAge;
//   Cookie.originalMaxAge;
//   request.session.ID;
