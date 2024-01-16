import server from '$/$server';
import {
  API_BASE_PATH,
  CORS_ORIGIN,
  CREATIO_ORIGIN,
  SUPABASE_JWT_SECRET,
} from '$/service/envValues';
import cookie from '@fastify/cookie';
import cors from '@fastify/cors';
import fastifyEtag from '@fastify/etag';
import helmet from '@fastify/helmet';
import fastifyJwt from '@fastify/jwt';
import type { FastifyServerFactory } from 'fastify';
import Fastify from 'fastify';
import { COOKIE_NAME, JWT_PROP_NAME } from './constants';

export const init = (serverFactory?: FastifyServerFactory) => {
  const app = Fastify({ serverFactory });
  app.register(helmet);
  app.register(cors, { origin: [CORS_ORIGIN, CREATIO_ORIGIN], credentials: true });
  app.register(cookie);
  app.register(fastifyEtag, { weak: true });
  app.register(fastifyJwt, {
    secret: SUPABASE_JWT_SECRET,
    decoratorName: JWT_PROP_NAME,
    cookie: { cookieName: COOKIE_NAME, signed: false },
  });
  server(app, { basePath: API_BASE_PATH });

  return app;
};