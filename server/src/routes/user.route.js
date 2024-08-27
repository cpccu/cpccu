import { Router } from 'express';

import {
    getUserInfo,
    memberHandler,
    updateUserInfo,
    uploadORchangeIMG,
} from '../controllers/user.controller.js';
import { verifyToken } from '../middlewares/Auth.middleware.js';
import { upload } from '../middlewares/upload.middleware.js';

const router = Router();

//secure route
router.route('/user').get(verifyToken, getUserInfo);
router.route('/userInfo-update').patch(verifyToken, updateUserInfo);
router
    .route('/user/upload-image/:key')
    .patch(verifyToken, upload.single('image'), uploadORchangeIMG);

router.route('/member').get(memberHandler);

export default router;
