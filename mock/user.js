
const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  },
  xiaoyh363: {
    token: 'user-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80',
    name: 'Normal Editor'
  },
  'user-token': {
    roles: ['user'],
    introduction: 'I am an user',
    avatar: 'https://guli-file-190513.oss-cn-beijing.aliyuncs.com/avatar/default.jpg',
    name: '肖云昊'
  }
}

module.exports = [
  // user login
  {
    url: '/vue-admin-template/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]

      // mock error
      if (!token) {
        return {
          code: 60204,
          message: '用户名或密码错误'
        }
      }

      return {
        code: 20000,
        data: token
      }
    }
  },

  // get user info
  {
    url: '/vue-admin-template/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },

  // user logout
  {
    url: '/vue-admin-template/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  // 抱佛脚 mock 接口

  {
    url: '/vue-admin-template/user/getUserPage',
    type: 'post',
    response: _ => {
      return {
        "success": true,
        "code": 20000,
        "message": "成功",
        "data": user_data
      }
    }
  },

  {
    url: '/vue-admin-template/user/getLabPage',
    type: 'post',
    response: _ => {
      return {
        "success": true,
        "code": 20000,
        "message": "成功",
        "data": lab_data
      }
    }
  },

  {
    url: '/vue-admin-template/user/getSensorPage',
    type: 'post',
    response: _ => {
      return {
        "success": true,
        "code": 20000,
        "message": "成功",
        "data": sensor_data
      }
    }
  },
]

const sensor_data = {
  "total": 5,
  "rows": [
    {
      'id': 1,
      'name': '温度',
      'voltage': '24V',
      'range': '-50~150',
      'unit': '°C',
      'pm': '1W',
    },
    {
      'id': 2,
      'name': '湿度',
      'voltage': '5~10V',
      'range': '0~100',
      'unit': '%',
      'pm': '0.02W',
    },
    {
      'id': 3,
      'name': '一氧化碳浓度',
      'voltage': '5V',
      'range': '10~1000',
      'unit': 'ppm',
      'pm': '350mW',
    },
    {
      'id': 4,
      'name': '酒精浓度',
      'voltage': '24V',
      'range': '50~5000',
      'unit': 'ppm',
      'pm': '15mW',
    },
    {
      'id': 5,
      'name': '光照强度',
      'voltage': '2.7~3.8V',
      'range': '0~1',
      'unit': 'MLux',
      'pm': '0.75mW',
    },
    
  ]
}

const lab_data = {
  "total": 5,
  "rows": [
    {
      'id': 1,
      'name': '实验室117',
      'lab': '物理学院',
      'user': '张三',
      'sensors': [
        {
          'name': '温度',
          'unit': '摄氏度°C'
        },
        {
          'name': '湿度',
          'unit': '百分比%'
        },
        {
          'name': '一氧化碳浓度',
          'unit': 'ppm'
        },
      ]
    },
    {
      'id': 2,
      'name': '实验室203',
      'lab': '物理学院',
      'user': '王二'
    },
    {
      'id': 3,
      'name': '实验室303',
      'lab': '物理学院',
      'user': '李刚'
    },
    {
      'id': 4,
      'name': '实验室404',
      'lab': '物理学院',
      'user': '张三'
    },
    {
      'id': 5,
      'name': '实验室547',
      'lab': '物理学院',
      'user': '晴天'
    },
  ]
}

const user_data = {
  "total": 51,
  "rows": [
    {
      "id": "1",
      "name": "张三",
      "birth": "1996-01-01",
      "role": "学生",
      "college": "物理学院",
      "lab": '实验室117',
      "level": 1,
      "avatar": "https://guli-file-190513.oss-cn-beijing.aliyuncs.com/avatar/default.jpg",
      "sort": '物理学院',
      "idDeleted": 0,
      "gmtCreate": "2019-10-30 22:18:46",
      "gmtModified": "2019-11-12 21:36:36"
    },
    {
      "id": "1189389726308478977",
      "name": "晴天",
      "birth": "1996-01-01",
      "role": "学生",
      "college": "物理学院",
      "lab": '实验室303', 
      "level": 2,
      "avatar": "https://online-teach-file.oss-cn-beijing.aliyuncs.com/teacher/2019/10/30/de47ee9b-7fec-43c5-8173-13c5f7f689b2.png",
      "sort": 1,
      "idDeleted": 0,
      "gmtCreate": "2019-10-30 19:53:03",
      "gmtModified": "2019-10-30 19:53:03"
    },
    {
      "id": "1189390295668469762",
      "name": "李刚",
      "birth": "1996-01-01",
      "role": "学生",
      "college": "物理学院",
      "lab": '实验室203',
      "level": 2,
      "avatar": "https://online-teach-file.oss-cn-beijing.aliyuncs.com/teacher/2019/10/30/b8aa36a2-db50-4eca-a6e3-cc6e608355e0.png",
      "sort": 2,
      "idDeleted": 0,
      "gmtCreate": "2019-10-30 19:55:19",
      "gmtModified": "2019-11-12 21:37:52"
    },
    {
      "id": "1189426437876985857",
      "name": "王二",
      "birth": "1996-01-01",
      "role": "学生",
      "college": "物理学院",
      "lab": '实验室303',
      "level": 1,
      "avatar": "https://online-teach-file.oss-cn-beijing.aliyuncs.com/teacher/2019/11/08/e44a2e92-2421-4ea3-bb49-46f2ec96ef88.png",
      "sort": 0,
      "idDeleted": 0,
      "gmtCreate": "2019-10-30 22:18:56",
      "gmtModified": "2019-11-12 21:37:35"
    },
    {
      "id": "1189426464967995393",
      "name": "王五",
      "birth": "1996-01-01",
      "role": "学生",
      "college": "物理学院",
      "lab": '实验室547',
      "level": 1,
      "avatar": "https://online-teach-file.oss-cn-beijing.aliyuncs.com/teacher/2019/10/30/65423f14-49a9-4092-baf5-6d0ef9686a85.png",
      "sort": 0,
      "idDeleted": 0,
      "gmtCreate": "2019-10-30 22:19:02",
      "gmtModified": "2019-11-12 21:37:18"
    },
    {
      "id": "1192249914833055746",
      "name": "李四",
      "birth": "1996-01-01",
      "role": "学生",
      "college": "物理学院",
      "lab": '实验室404',
      "level": 1,
      "avatar": "https://online-teach-file.oss-cn-beijing.aliyuncs.com/teacher/2019/11/07/91871e25-fd83-4af6-845f-ea8d471d825d.png",
      "sort": 0,
      "idDeleted": 0,
      "gmtCreate": "2019-11-07 17:18:25",
      "gmtModified": "2019-11-12 21:37:01"
    },
    {
      "id": "1192327476087115778",
      "name": "测试用户",
      "birth": "1996-01-01",
      "role": "学生",
      "college": "物理学院",
      "lab": '实验室404',
      "level": 1,
      "avatar": "https://online-teach-file.oss-cn-beijing.aliyuncs.com/teacher/2019/11/08/5805c6cd-c8ad-4a77-aafd-d2e083bfd8a4.png",
      "sort": 0,
      "idDeleted": 0,
      "gmtCreate": "2019-11-07 22:26:37",
      "gmtModified": "2019-11-12 00:26:26"
    },
    {
      "id": "1195337453429129218",
      "name": "test",
      "birth": "1996-01-01",
      "role": "学生",
      "college": "物理学院",
      "lab": '实验室547',
      "level": 1,
      "avatar": "https://guli-file-190513.oss-cn-beijing.aliyuncs.com/avatar/default.jpg",
      "sort": 0,
      "idDeleted": 0,
      "gmtCreate": "2019-11-16 05:47:12",
      "gmtModified": "2019-11-16 05:47:27"
    },
    {
      "id": "1373120933199441921",
      "name": "teacher1",
      "birth": "1996-01-01",
      "role": "教师",
      "college": "物理学院",
      "lab": '实验室303',
      "level": 0,
      "avatar": "string",
      "sort": 0,
      "idDeleted": 0,
      "gmtCreate": "2021-03-20 11:55:16",
      "gmtModified": "2021-03-20 11:55:16"
    },
    {
      "id": "1373120980490219522",
      "name": "teacher2",
      "birth": "1996-01-01",
      "role": "教师",
      "college": "物理学院",
      "lab": '实验室117',
      "level": 0,
      "avatar": "string",
      "sort": 0,
      "idDeleted": 0,
      "gmtCreate": "2021-03-20 11:55:28",
      "gmtModified": "2021-03-20 11:55:28"
    }
  ]
}