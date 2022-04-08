//mock数据模拟
import Mock from 'mockjs'

//图表数据
let List = []
export default {
  getStatisticalData: () => {
    //Mock.Random.float 产生随机数50到1000之间 保留小数 最小0位 最大0位
    for (let i = 0; i < 7; i++) {
      List.push(
        Mock.mock({
          西青区: Mock.Random.natural(50, 1000, 0, 0),
          南开区: Mock.Random.natural(50, 1000, 0, 0),
          和平区: Mock.Random.natural(50, 1000, 0, 0),
          河东区: Mock.Random.natural(50, 1000, 0, 0),
          东丽区: Mock.Random.natural(50, 1000, 0, 0),
          北辰区: Mock.Random.natural(50, 1000, 0, 0)
        })
      )
}
return {
    //状态码
    code: 20000, 
    data: {
      // 柱状图（本周）
      weekData: [
        {
          name: '周一',
          value: 2000
        },
        {
          name: '周二',
          value: 1400
        },
        {
          name: '周三',
          value: 1200
        },
        {
          name: '周四',
          value: 1900
        },
        {
          name: '周五',
          value: 1600
        },
        {
            name: '周六',
            value: 1300
          },
        {
          name: '周天',
          value: 1000
        }
      ],
      // 柱状图（今日）
      todayData: [
        {
          date: '0:00',
          new: 10,
          
        },
        {
          date: '2:00',
          new: 0,
          
        },
        {
          date: '4:00',
          new: 2,
          
        },
        {
          date: '6:00',
          new:10,
          
        },
        {
          date: '8:00',
          new: 30,
          
        },
        {
          date: '10:00',
          new: 40,
          
        },
        {
            date: '12:00',
            new: 53,
            
          },
          {
            date: '14:00',
            new: 30,
            active: 770
          },
          {
            date: '16:00',
            new: 20,
            
          },
          {
            date: '18:00',
            new: 60,
            
          },
          {
            date: '20:00',
            new: 40,
            
          },
        {
          date: '22:00',
          new: 20,
          
        }
      ],
      // 折线图
    //   orderData: {
    //     date: ['20191001', '20191002', '20191003', '20191004', '20191005', '20191006', '20191007'],
    //     data: List
    //   },
      tableData: [
        {
            rednumber:'69',
            greennumber:'75',
            location:'西青区'
        },
        {
            rednumber:'50',
            greennumber:'65',
            location:'南开区'
        },
        {
            rednumber:'100',
            greennumber:'120',
            location:'和平区'
        },
        {
            rednumber:'65',
            greennumber:'63',
            location:'河东区'
        },
        {
            rednumber:'77',
            greennumber:'88',
            location:'东丽区'
        },
        {
            rednumber:'66',
            greennumber:'69',
            location:'北辰区'
        }
      ]
    }
  }
}
}