import { withHeaders } from '@/middlewares/withHeaders';
import { stackMiddlewares } from './utils/stackMiddlewares';

const middlewares = [withHeaders];

export default stackMiddlewares(middlewares);
