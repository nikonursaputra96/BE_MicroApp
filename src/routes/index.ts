import express  from "express";
import UserController from "../controllers/UserController";
import BlogController from "../controllers/BlogController";
import PaslonController from "../controllers/PaslonController";
import PartaiController from "../controllers/PartaiController";
import VoteController from "../controllers/VoteController";

const Route = express.Router()

Route.post('/user', UserController.create)
Route.get('/users', UserController.find)
Route.get('/users/:userId', UserController.catch)
Route.delete('/users/:userId', UserController.delete)
Route.put('/users/:userId', UserController.update)

Route.post('/blog', BlogController.create)
Route.get('/blogs', BlogController.find)
Route.put('/blogs/:idBlog', BlogController.update)
Route.delete('/blogs/:idBlog', BlogController.delete)

Route.post('/paslon', PaslonController.create)
Route.get('/paslons', PaslonController.find)
Route.put('/paslons/:idPaslon', PaslonController.update)
Route.delete('/paslons/:idPaslon', PaslonController.delete)

Route.post('/partai', PartaiController.create)
Route.get('/partais', PartaiController.find)
Route.put('/partais/:idPartai', PartaiController.update)
Route.delete('/partais/:idPartai', PartaiController.delete)

Route.post('/vote', VoteController.create)
Route.get('/votes', VoteController.find)
Route.put('/votes/:idVote', VoteController.update)
Route.delete('/votes/:idVote', VoteController.delete)


export default Route