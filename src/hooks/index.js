/** @type {import('@sveltejs/kit').GetSession} */

export function getSession(request) {
	console.log('Hooks - request:  ');
	console.log(request);
	// return request.locals.user
	// 	? {
	// 			user: {
	// 				// only include properties needed client-side —
	// 				// exclude anything else attached to the user
	// 				// like access tokens etc
	//              // Here I could put what I want in request.locals
	// 				name: request.locals.user.name,
	// 				email: request.locals.user.email,
	// 				avatar: request.locals.user.avatar
	// 			}
	// 	  }
	// 	: {};
}
