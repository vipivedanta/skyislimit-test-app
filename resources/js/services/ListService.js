import axios from 'axios'

export const getList = async function() {
	try {

		let res = await axios.get('https://www.reddit.com/r/webdev.json')
		return {
			status: true,
			data: res.data.data.children
		}

	} catch ( error ) {
		return { status: false, error : 'Could not fetch listing' }
	}
}