import express  from "express";
import UserController from "../controllers/UserController";
import BlogController from "../controllers/BlogController";
import PaslonController from "../controllers/PaslonController";
import PartaiController from "../controllers/PartaiController";
import VoteController from "../controllers/VoteController";

const Route = express.Router()

Route.post('/user', UserController.create)
Route.get('/users', UserController.find)

Route.post('/blog', BlogController.create)
Route.get('/blogs', BlogController.find)

Route.post('/paslon', PaslonController.create)
Route.get('/paslons', PaslonController.find)

Route.post('/partai', PartaiController.create)
Route.get('/partais', PartaiController.find)

Route.post('/vote', VoteController.create)
Route.get('/votes', VoteController.find)


export default Route