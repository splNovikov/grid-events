import { environment } from '../../environments/environment';


const apiPrefix = 'api';
const apiUrl = `${environment.baseUrl}${apiPrefix}`;

export const apiRoutes = {
  news: `${apiUrl}/news`,
  me: `${apiUrl}/me`
};
