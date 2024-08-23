import { Router } from 'express';
import { verifyToken } from '../middlewares/Auth.middleware.js';
import { upload } from '../middlewares/upload.middleware.js';
import {
    createPostHandler,
    deletePostHandler,
    updatePostHandler,
} from '../controllers/post.controller.js';

const router = Router();

router
    .route('/create-post')
    .post(verifyToken, upload.array('media', 20), createPostHandler);

router
    .route('/update-post/:id')
    .patch(verifyToken, upload.array('media', 20), updatePostHandler);

router.route('/delete-post/:id').delete(verifyToken, deletePostHandler);

export default router;
