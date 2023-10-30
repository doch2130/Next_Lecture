// 예전 API 호출 방식
// src/app
// src/pages
// pages/api/example.ts
import { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
	const body = req.body;
	console.log(req.cookies.cookie);
	console.log(body);
	// res.status(200).end();
	res.status(200).json({});
}

export default handler