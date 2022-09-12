const express=require('express')
const router=express.Router()

const {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
} =require('../controllers/people')

router.get('/',getPeople)
router.post('/',createPerson)
router.post('/postman',createPersonPostman)
router.put('/:id',updatePerson)
router.delete('/:id',deletePerson)

//another way for same links chaining
// router.route('/').get(getPeople).post(createPerson)
// router.route('/postman').get(createPersonPostman)
// router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports=router