// @login & register
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const gravatar = require('gravatar');
const keys = require('../../config/keys');
const passport = require('passport');

const User = require('../../models/User');

// @route  GET api/users/test
// @desc   返回的请求的json数据
// @access public
router.get('/test', (req, res) => {
  res.json({ msg: 'login works' });
});

// @route  POST api/users/register
// @desc   返回的请求的json数据
// @access public
router.post('/register', (req, res) => {
  // 查询数据库中是否拥有邮箱
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json('邮箱已被注册!');
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: '200',
        r: 'pg',
        d: 'mm'
      });

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password,
        identity: req.body.identity
      });

      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;

          newUser.password = hash;

          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route  POST api/users/login
// @desc   返回token jwt passport
// @access public

router.post('/login', (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  // 查询数据库
  User.findOne({ name }).then(user => {
    if (!user) {
      return res.status(404).json('用户不存在!');
    }

    // 密码匹配
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const rule = {
          id: user.id,
          name: user.name,
          avatar: user.avatar,
          identity: user.identity
        };
        jwt.sign(rule, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
          if (err) throw err;
          res.json({
            success: true,
            token: 'Bearer ' + token
          });
        });
        // res.json({msg:"success"});
      } else {
        return res.status(400).json('密码错误!');
      }
    });
  });
});

// @route  GET api/users/current
// @desc   return current user
// @access Private
router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
      identity: req.user.identity
    });
  }
);

// @route  POST api/users/createUser
// @desc   返回的请求的json数据
// @access public
router.post('/createUser', (req, res) => {
  // 查询数据库中是否拥有邮箱
  User.findOne({ name: req.body.name }).then(user => {
    if (user) {
      return res.status(400).json('该用户已被注册!');
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: '200',
        r: 'pg',
        d: 'mm'
      });

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password,
        identity: req.body.identity
      });

      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;

          newUser.password = hash;

          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});
// @route  GET api/users/viewUserList/:page/:size
// @access private
// 10条 下拉刷新(请求)3条 上拉加载(请求)3条
router.get(
  '/viewUserList',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    // let count = User.find().count();
    
    // User.aggregate([{$group : {_id : null, num_total : {$sum : 1}}}]).
    // then(function (res) {
    //   console.log(res); // [ { maxBalance: 98000 } ]
    // });


    let num_total = 0
    const query = JSON.parse(req.query.condition)
    if (req.query.condition.name) query.name = req.query.condition.name
    User.estimatedDocumentCount(query, function (err, count) {
      if (err) throw err
      num_total = count
    });
    User.find(query)
      .sort({ date: -1 })
      .then(users => {
        if (!users) {
          res.status(404).json('没有任何信息');
        } else {
          let size = req.query.size;
          let page = req.query.page;
          let index = size * (page - 1);
          let newUsers = [];
          for (let i = index; i < size * page; i++) {
            if (users[i] != null) {
              newUsers.unshift(users[i]);
            }
          }
          
          res.json({
            list: newUsers,
            count: num_total
          });
        }
      });
  }
);
// @route  POST api/users/edit
// @desc   编辑接口
// @access Private
router.post(
  '/updateUser',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    console.log(req.body)
    const userFields = {};
    if (req.body.name) userFields.name = req.body.name;
    if (req.body.identity) userFields.identity = req.body.identity;
    if (req.body.email) userFields.email = req.body.email;

    User.findOneAndUpdate(
      { _id: req.body.id },
      { $set: userFields },
      { new: true }
    ).then(user => res.json(user));
  }
);

module.exports = router;
