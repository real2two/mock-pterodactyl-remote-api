import HyperExpress from 'hyper-express';

export const activityRouter = new HyperExpress.Router();

activityRouter.post('/', async (req, res) => {
  console.log('Activity log', await req.json());
  return res.status(200).send('200 ok');
});
