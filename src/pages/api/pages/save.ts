import { pagesService } from '@/services/pages.service';

import { ResponseCodes } from 'http-constants-ts';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  if (request.method !== 'POST') {
    return response.status(ResponseCodes.METHOD_NOT_ALLOWED).send('Method not allowed');
  }

  const title = request.headers.title as string;
  const content = request.body as string;

  // TODO: Validate title and content
  const result = await pagesService.create(title, content);
  response.send(result);
}