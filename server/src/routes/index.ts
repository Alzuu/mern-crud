import { Router } from 'express';
import {
  getPeople,
  getPerson,
  addPerson,
  updatePerson,
  deletePerson,
} from '../controllers/person';

const router: Router = Router();

router.get('/people', getPeople);
router.get('/people/:id', getPerson);
router.post('/add-person', addPerson);
router.put('/edit-person/:id', updatePerson);
router.delete('/delete-person/:id', deletePerson);

export default router;
