export const config = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID 
  // APP_ID: "wx7a75fe504468b549",
  // 公众号APP_SECRET 
  // APP_SECRET: "9e7a266e693a704096e2a3a8cd97c68d",
  //模板消息id
  TEMPLATE_ID:"3HzlGGuB6wgWAeU1QOygZMRPIa3cl2XvXLw3ob4GUgc",
  //接收公众号消息的微信号，如果多个，如["wx1","wx2"]
  USERS:["oAaBv6fuZ4yqz_VtdPEBDCInSqMo"],
  
  /**
   * 信息配置
   */

  /** 天气相关 */

  // 默认所在省份, USERS 中没填的话, 会默认拿这里的省份
  PROVINCE: "甘肃",
  // 默认所在城市, USERS 中没填的话, 会默认拿这里的城市
  CITY: "白银",

  /** 重要节日相关 */

  //重要节日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
  // tpye必须填！ 只能 “生日” 和 “节日” 二选一!
  // 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
  // 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
  FESTIVALS: [
    {"type": "生日", "name": "王夫人", "year": "1999", "date": "06-10"},
    {"type": "生日", "name": "王先生", "year": "2001", "date": "03-25"},
  ],
  // 限制重要节日的展示条目, 需要填写数字; 
  // 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
  // 如果为0, 则默认展示全部
  FESTIVALS_LIMIT: 4,

  /** 日期相关 */
  
  CUSTOMIZED_DATE_LIST: [
    // 在一起的日子
    {"keyword": "love_day", date: "2011-10-01"},
  ],

  SLOT_LIST: [
    // 这样配置的话，就会每次随机选一句话发送
    {"keyword": "lover_prattle", contents: [
      "因为太喜欢你，所以看谁都像是情敌。",
      "申请成为你爱里的永久居民。",
      "你很傻，你很笨，可我还是很羡慕你，因为你有我",
      "遇见你，就好像捡到了100斤的运气",
    ]},
  ],

}
