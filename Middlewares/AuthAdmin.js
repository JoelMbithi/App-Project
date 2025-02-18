import jwt from 'jsonwebtoken';

const AuthAdmin = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) return res.status(403).json({ success: false, message: 'Not Authorized' });
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.email !== process.env.ADMIN_EMAIL) {
      return res.status(403).json({ success: false, message: 'Not Authorized' });
    }
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: error.message });
  }
};

export default AuthAdmin;