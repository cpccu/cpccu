import { Router } from 'express';
import { verifyToken } from './../middlewares/Auth.middleware.js';
import {
    createCommentHandler,
    deleteCommentHandler,
    updateCommentHandler,
} from '../controllers/comment.controller.js';

const router = Router();

router.route('/create-comment/:postID').post(verifyToken, createCommentHandler);
router
    .route('/update-comment/:commentID')
    .patch(verifyToken, updateCommentHandler);

router
    .route('/delete-comment/:commentID')
    .delete(verifyToken, deleteCommentHandler);

export default router;
