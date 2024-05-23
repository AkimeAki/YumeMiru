export async function GET(): Promise<Response> {
	return new Response(JSON.stringify({ test: true }), {
		status: 200,
		headers: {
			"Content-Type": "application/json"
		}
	});
}
