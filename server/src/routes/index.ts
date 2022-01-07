import { Router } from 'express';
import {
  getPeople,
  addPerson,
  updatePerson,
  deletePerson,
} from '../controllers/person';

const router: Router = Router();

router.get('/people', getPeople);
router.post('/add-person', addPerson);
router.put('/edit-person', updatePerson);
router.delete('/delete-person/:id', deletePerson);

export default router;
