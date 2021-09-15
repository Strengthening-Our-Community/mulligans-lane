import supabase from '$lib/db';

export async function post(request) {
	let fullname = request.body.get('fullname');
	let streetaddress = request.body.get('streetaddress');
	let suburb = request.body.get('suburb');
	let postcode = request.body.get('postcode');
	let mobile = request.body.get('email');
	let email = request.body.get('email');
	let password = request.body.get('password');
	let confirmpassword = request.body.get('confirmpassword');

	const { user, error } = await supabase.auth.signUp({ mobile, email, password });

	if (error) {
		return {
			status: error.status,
			body: error.message
		};
	} else {
		console.log(user);
	}
	return {
		status: 200,
		body: 'You have successfully registered.',
		headers: {
			'set-cookie': `session=bert; Path=/; HttpOnly; Secure; SameSite=Strict; Expires=${new Date(
				20000 * 1000
			).toUTCString()};`
		}
	};
}
