import aspida from '@aspida/axios';
import api from 'api/$api';
import { createSigner } from 'fast-jwt';
import { COOKIE_NAME } from 'service/constants';
import { API_BASE_PATH, PORT, SUPABASE_JWT_SECRET } from 'service/envValues';
import { SELF_USER } from 'tests/const';

const jwt = createSigner({ key: SUPABASE_JWT_SECRET })(SELF_USER);

export const apiClient = api(
  aspida(undefined, {
    baseURL: `http://127.0.0.1:${PORT}${API_BASE_PATH}`,
    headers: { cookie: `${COOKIE_NAME}=${jwt}` },
  })
);

export const sampleBlob = new Blob([]);
