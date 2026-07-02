/**
 * 100个景点的静态数据（无需后端数据库）
 * 每个景点使用 picsum.photos 的唯一图片（seed 保证固定不同）
 */
export const attractions = [
  // ===== 自然风光 (1-20) =====
  {
    id: 1, name: '九寨沟', category: '自然风光', city: '阿坝', price: 169, rating: 4.9,
    description: '世界自然遗产，以翠海、叠瀑、彩林、雪峰、藏情闻名，四季皆美，被誉为童话世界',
    cover_image: 'https://picsum.photos/seed/jiuzhaigou/800/500'
  },
  {
    id: 2, name: '黄龙风景区', category: '自然风光', city: '阿坝', price: 180, rating: 4.8,
    description: '以彩池、雪山、峡谷、森林四绝著称，钙华地貌举世无双',
    cover_image: 'https://picsum.photos/seed/huanglong/800/500'
  },
  {
    id: 3, name: '张家界国家森林公园', category: '自然风光', city: '张家界', price: 225, rating: 4.9,
    description: '电影阿凡达取景地，三千奇峰拔地而起，云雾缭绕如仙境',
    cover_image: 'https://picsum.photos/seed/zhangjiajie/800/500'
  },
  {
    id: 4, name: '桂林漓江', category: '自然风光', city: '桂林', price: 210, rating: 4.8,
    description: '桂林山水甲天下，漓江两岸峰林倒影，竹筏漂流美不胜收',
    cover_image: 'https://picsum.photos/seed/guilin/800/500'
  },
  {
    id: 5, name: '黄山', category: '自然风光', city: '黄山', price: 190, rating: 4.9,
    description: '五岳归来不看山，黄山归来不看岳。奇松、怪石、云海、温泉四绝',
    cover_image: 'https://picsum.photos/seed/huangshan/800/500'
  },
  {
    id: 6, name: '泰山', category: '自然风光', city: '泰安', price: 115, rating: 4.7,
    description: '五岳之首，日出云海壮美绝伦，历代帝王封禅之地',
    cover_image: 'https://picsum.photos/seed/taishan/800/500'
  },
  {
    id: 7, name: '峨眉山', category: '自然风光', city: '乐山', price: 160, rating: 4.8,
    description: '佛教四大名山之一，金顶云海壮观，猴群嬉戏可爱',
    cover_image: 'https://picsum.photos/seed/emeishan/800/500'
  },
  {
    id: 8, name: '庐山', category: '自然风光', city: '九江', price: 165, rating: 4.7,
    description: '匡庐奇秀甲天下，避暑胜地，李白望庐山瀑布千古传诵',
    cover_image: 'https://picsum.photos/seed/lushan/800/500'
  },
  {
    id: 9, name: '武陵源', category: '自然风光', city: '张家界', price: 225, rating: 4.9,
    description: '石英砂岩峰林地貌，天然地质博物馆，袁家界核心景区',
    cover_image: 'https://picsum.photos/seed/wulingyuan/800/500'
  },
  {
    id: 10, name: '稻城亚丁', category: '自然风光', city: '甘孜', price: 146, rating: 4.9,
    description: '最后的香格里拉，仙乃日、央迈勇、夏诺多吉三神山圣境',
    cover_image: 'https://picsum.photos/seed/daocheng/800/500'
  },
  {
    id: 11, name: '喀纳斯湖', category: '自然风光', city: '阿勒泰', price: 145, rating: 4.8,
    description: '西北第一湾，月亮湾神钟山，秋景堪称中国最美',
    cover_image: 'https://picsum.photos/seed/kanas/800/500'
  },
  {
    id: 12, name: '九寨沟诺日朗瀑布', category: '自然风光', city: '阿坝', price: 169, rating: 4.7,
    description: '中国最宽的钙华瀑布，宽达270米，水声如雷鸣',
    cover_image: 'https://picsum.photos/seed/nuorilang/800/500'
  },
  {
    id: 13, name: '虎跳峡', category: '自然风光', city: '丽江', price: 45, rating: 4.6,
    description: '世界上最深的峡谷之一，金沙江水奔腾咆哮，气势磅礴',
    cover_image: 'https://picsum.photos/seed/hutiao/800/500'
  },
  {
    id: 14, name: '玉龙雪山', category: '自然风光', city: '丽江', price: 100, rating: 4.7,
    description: '纳西族神山，海拔5596米，冰川公园四季积雪不化',
    cover_image: 'https://picsum.photos/seed/yulong/800/500'
  },
  {
    id: 15, name: '三清山', category: '自然风光', city: '上饶', price: 150, rating: 4.7,
    description: '西太平洋最美一英里，花岗岩峰林地貌，道教名山',
    cover_image: 'https://picsum.photos/seed/sanqingshan/800/500'
  },
  {
    id: 16, name: '天山天池', category: '自然风光', city: '昌吉', price: 105, rating: 4.6,
    description: '天山博格达峰下的高山湖泊，传说中西王母沐浴之处',
    cover_image: 'https://picsum.photos/seed/tianchi/800/500'
  },
  {
    id: 17, name: '黄果树瀑布', category: '自然风光', city: '安顺', price: 160, rating: 4.7,
    description: '亚洲最大瀑布，高77.8米宽101米，徐霞客笔下最壮观',
    cover_image: 'https://picsum.photos/seed/huangguoshu/800/500'
  },
  {
    id: 18, name: '纳木错', category: '自然风光', city: '拉萨', price: 120, rating: 4.8,
    description: '西藏三大圣湖之一，世界海拔最高的大型湖泊，天湖圣境',
    cover_image: 'https://picsum.photos/seed/namtso/800/500'
  },
  {
    id: 19, name: '赛里木湖', category: '自然风光', city: '博尔塔拉', price: 70, rating: 4.7,
    description: '大西洋最后一滴眼泪，高山冷水湖，花海与碧波交相辉映',
    cover_image: 'https://picsum.photos/seed/sailimu/800/500'
  },
  {
    id: 20, name: '青海湖', category: '自然风光', city: '海南', price: 90, rating: 4.7,
    description: '中国最大的内陆咸水湖，油菜花海与湛蓝湖水交相辉映',
    cover_image: 'https://picsum.photos/seed/qinghaihu/800/500'
  },

  // ===== 历史文化 (21-40) =====
  {
    id: 21, name: '万里长城-八达岭', category: '历史文化', city: '北京', price: 40, rating: 4.8,
    description: '万里长城最著名的段落，不到长城非好汉，中华民族的象征',
    cover_image: 'https://picsum.photos/seed/greatwall/800/500'
  },
  {
    id: 22, name: '故宫', category: '历史文化', city: '北京', price: 60, rating: 4.9,
    description: '世界上现存规模最大的宫殿建筑群，明清两代24位皇帝的皇宫',
    cover_image: 'https://picsum.photos/seed/forbidden/800/500'
  },
  {
    id: 23, name: '兵马俑', category: '历史文化', city: '西安', price: 120, rating: 4.9,
    description: '世界第八大奇迹，秦始皇陵陪葬坑，八千陶俑千人千面',
    cover_image: 'https://picsum.photos/seed/terracotta/800/500'
  },
  {
    id: 24, name: '布达拉宫', category: '历史文化', city: '拉萨', price: 200, rating: 4.9,
    description: '世界最高宫殿，藏式建筑艺术的巅峰，雪域高原的标志',
    cover_image: 'https://picsum.photos/seed/potala/800/500'
  },
  {
    id: 25, name: '莫高窟', category: '历史文化', city: '敦煌', price: 238, rating: 4.8,
    description: '世界最大的佛教艺术宝库，四千多个洞窟壁画彩塑跨越千年',
    cover_image: 'https://picsum.photos/seed/mogao/800/500'
  },
  {
    id: 26, name: '颐和园', category: '历史文化', city: '北京', price: 30, rating: 4.7,
    description: '中国古典园林之首，昆明湖万寿山，皇家园林的典范之作',
    cover_image: 'https://picsum.photos/seed/summerpalace/800/500'
  },
  {
    id: 27, name: '天坛', category: '历史文化', city: '北京', price: 28, rating: 4.7,
    description: '明清皇帝祭天祈谷之所，祈年殿三重檐蓝瓦圆顶巧夺天工',
    cover_image: 'https://picsum.photos/seed/tiantan/800/500'
  },
  {
    id: 28, name: '雍和宫', category: '历史文化', city: '北京', price: 25, rating: 4.6,
    description: '北京最大的藏传佛教寺院，雍正帝府邸改建，香火鼎盛',
    cover_image: 'https://picsum.photos/seed/yonghe/800/500'
  },
  {
    id: 29, name: '平遥古城', category: '历史文化', city: '晋中', price: 125, rating: 4.6,
    description: '保存最完好的汉族古城，明清金融中心，日升昌票号发源地',
    cover_image: 'https://picsum.photos/seed/pingyao/800/500'
  },
  {
    id: 30, name: '丽江古城', category: '历史文化', city: '丽江', price: 0, rating: 4.7,
    description: '纳西族文化瑰宝，小桥流水人家，世界文化遗产',
    cover_image: 'https://picsum.photos/seed/lijiang/800/500'
  },
  {
    id: 31, name: '皖南古村落-西递宏村', category: '历史文化', city: '黄山', price: 104, rating: 4.7,
    description: '徽派建筑的活化石，画里乡村，马头墙水口园林',
    cover_image: 'https://picsum.photos/seed/xidi/800/500'
  },
  {
    id: 32, name: '龙门石窟', category: '历史文化', city: '洛阳', price: 90, rating: 4.7,
    description: '中国石刻艺术最高峰，卢舍那大佛庄严慈悲，千年不朽',
    cover_image: 'https://picsum.photos/seed/longmen/800/500'
  },
  {
    id: 33, name: '开平碉楼', category: '历史文化', city: '江门', price: 55, rating: 4.5,
    description: '中西合璧的建筑奇观，华侨文化的见证，世界文化遗产',
    cover_image: 'https://picsum.photos/seed/kaitang/800/500'
  },
  {
    id: 34, name: '大足石刻', category: '历史文化', city: '重庆', price: 115, rating: 4.6,
    description: '世界石窟艺术最后高峰，千手观音金碧辉煌令人叹为观止',
    cover_image: 'https://picsum.photos/seed/dazu/800/500'
  },
  {
    id: 35, name: '曲阜三孔', category: '历史文化', city: '济宁', price: 140, rating: 4.6,
    description: '孔子故里，孔庙孔府孔林，儒家文化圣地',
    cover_image: 'https://picsum.photos/seed/qufu/800/500'
  },
  {
    id: 36, name: '云冈石窟', category: '历史文化', city: '大同', price: 120, rating: 4.7,
    description: '北魏皇家石窟工程，昙曜五窟气势恢宏，佛教艺术瑰宝',
    cover_image: 'https://picsum.photos/seed/yungang/800/500'
  },
  {
    id: 37, name: '鼓浪屿', category: '历史文化', city: '厦门', price: 0, rating: 4.6,
    description: '万国建筑博览，钢琴之岛，世界文化遗产，文艺小清新圣地',
    cover_image: 'https://picsum.photos/seed/gulangyu/800/500'
  },
  {
    id: 38, name: '乔家大院', category: '历史文化', city: '晋中', price: 54, rating: 4.5,
    description: '皇家有故宫，民间有乔家，晋商大院的杰出代表',
    cover_image: 'https://picsum.photos/seed/qiaojiayuan/800/500'
  },
  {
    id: 39, name: '苏州园林-拙政园', category: '历史文化', city: '苏州', price: 70, rating: 4.8,
    description: '中国四大名园之首，咫尺之内再造乾坤，江南园林之王',
    cover_image: 'https://picsum.photos/seed/zhuozhengyuan/800/500'
  },
  {
    id: 40, name: '周庄古镇', category: '历史文化', city: '苏州', price: 100, rating: 4.5,
    description: '中国第一水乡，小桥流水人家，双桥月色千古传颂',
    cover_image: 'https://picsum.photos/seed/zhoushuang/800/500'
  },

  // ===== 主题乐园 (41-55) =====
  {
    id: 41, name: '上海迪士尼乐园', category: '主题乐园', city: '上海', price: 475, rating: 4.7,
    description: '中国大陆首座迪士尼乐园，奇幻童话城堡全球最高',
    cover_image: 'https://picsum.photos/seed/disney/800/500'
  },
  {
    id: 42, name: '长隆野生动物世界', category: '主题乐园', city: '广州', price: 350, rating: 4.7,
    description: '中国规模最大综合性旅游度假区，五大主题区动物种类繁多',
    cover_image: 'https://picsum.photos/seed/chimelong/800/500'
  },
  {
    id: 43, name: '深圳欢乐谷', category: '主题乐园', city: '深圳', price: 290, rating: 4.5,
    description: '全国连锁主题乐园，刺激过山车与梦幻旋转木马应有尽有',
    cover_image: 'https://picsum.photos/seed/oceanpark/800/500'
  },
  {
    id: 44, name: '北京环球影城', category: '主题乐园', city: '北京', price: 418, rating: 4.8,
    description: '北京环球度假区，哈利波特的魔法世界、变形金刚基地',
    cover_image: 'https://picsum.photos/seed/universal/800/500'
  },
  {
    id: 45, name: '珠海长隆海洋王国', category: '主题乐园', city: '珠海', price: 398, rating: 4.8,
    description: '全球最大的海洋主题乐园，鲸鲨馆震撼人心',
    cover_image: 'https://picsum.photos/seed/oceanworld/800/500'
  },
  {
    id: 46, name: '杭州宋城', category: '主题乐园', city: '杭州', price: 300, rating: 4.5,
    description: '一个故事游宋城，《宋城千古情》演出震撼心灵',
    cover_image: 'https://picsum.photos/seed/songcheng/800/500'
  },
  {
    id: 47, name: '芜湖方特东方神画', category: '主题乐园', city: '芜湖', price: 280, rating: 4.5,
    description: '华夏五千年文明主题乐园，女娲补天孟姜女等经典重现',
    cover_image: 'https://picsum.photos/seed/fangte/800/500'
  },
  {
    id: 48, name: '上海海昌海洋公园', category: '主题乐园', city: '上海', price: 449, rating: 4.6,
    description: '国内第四座海洋主题公园，虎鲸表演精彩绝伦',
    cover_image: 'https://picsum.photos/seed/haichang/800/500'
  },
  {
    id: 49, name: '珠海长隆飞鸟乐园', category: '主题乐园', city: '珠海', price: 120, rating: 4.4,
    description: '万鸟齐飞的生态乐园，空中走廊穿越鸟的世界',
    cover_image: 'https://picsum.photos/seed/birdpark/800/500'
  },
  {
    id: 50, name: '郑州华强方特', category: '主题乐园', city: '郑州', price: 280, rating: 4.4,
    description: '中华传统文化与现代科技完美融合的主题乐园',
    cover_image: 'https://picsum.photos/seed/huaqiang/800/500'
  },
  {
    id: 51, name: '常州恐龙园', category: '主题乐园', city: '常州', price: 300, rating: 4.6,
    description: '东方侏罗纪，中华恐龙园升级版，穿越白垩纪',
    cover_image: 'https://picsum.photos/seed/dinosaur/800/500'
  },
  {
    id: 52, name: '武汉欢乐谷', category: '主题乐园', city: '武汉', price: 280, rating: 4.4,
    description: '华中地区最大主题乐园，十项世界之最游乐设施',
    cover_image: 'https://picsum.photos/seed/wuhanhappy/800/500'
  },
  {
    id: 53, name: '成都欢乐谷', category: '主题乐园', city: '成都', price: 230, rating: 4.4,
    description: '川西休闲胜地，阳光港、欢乐时光等八大区域',
    cover_image: 'https://picsum.photos/seed/chengduhappy/800/500'
  },
  {
    id: 54, name: '天津方特', category: '主题乐园', city: '天津', price: 280, rating: 4.4,
    description: '北方版东方神画，女娲补天、梁祝等神话再现',
    cover_image: 'https://picsum.photos/seed/tianjinfangte/800/500'
  },
  {
    id: 55, name: '南京欢乐海岸', category: '主题乐园', city: '南京', price: 200, rating: 4.3,
    description: '秦淮河畔的主题乐园，水陆联动游玩体验独特',
    cover_image: 'https://picsum.photos/seed/nanjingcoast/800/500'
  },

  // ===== 城市地标 (56-75) =====
  {
    id: 56, name: '东方明珠广播电视塔', category: '城市地标', city: '上海', price: 199, rating: 4.6,
    description: '上海标志性建筑，468米高，球体观光层俯瞰浦江两岸',
    cover_image: 'https://picsum.photos/seed/orientalpearl/800/500'
  },
  {
    id: 57, name: '外滩', category: '城市地标', city: '上海', price: 0, rating: 4.8,
    description: '万国建筑博览群，十里洋场繁华地，夜景观赏最佳处',
    cover_image: 'https://picsum.photos/seed/thebund/800/500'
  },
  {
    id: 58, name: '天安门广场', category: '城市地标', city: '北京', price: 0, rating: 4.8,
    description: '世界上最大的城市中心广场，可容纳100万人举行盛大集会',
    cover_image: 'https://picsum.photos/seed/tiananmen/800/500'
  },
  {
    id: 59, name: '西湖', category: '城市地标', city: '杭州', price: 0, rating: 4.9,
    description: '人间天堂在杭州，西湖十景美如画，白蛇传传奇流芳百世',
    cover_image: 'https://picsum.photos/seed/westlake/800/500'
  },
  {
    id: 60, name: '广州塔', category: '城市地标', city: '广州', price: 150, rating: 4.6,
    description: '小蛮腰，600米高中国第一塔，世界最高观景平台',
    cover_image: 'https://picsum.photos/seed/cantower/800/500'
  },
  {
    id: 61, name: '滨海湾金沙', category: '城市地标', city: '新加坡', price: 0, rating: 4.8,
    description: '空中花园无边泳池，鱼尾狮公园，全球最美酒店之一',
    cover_image: 'https://picsum.photos/seed/singapore/800/500'
  },
  {
    id: 62, name: '台北101', category: '城市地标', city: '台北', price: 60, rating: 4.6,
    description: '曾是世界第一高楼，89层观景台俯瞰全城，跨年烟火秀',
    cover_image: 'https://picsum.photos/seed/101tower/800/500'
  },
  {
    id: 63, name: '重庆洪崖洞', category: '城市地标', city: '重庆', price: 0, rating: 4.7,
    description: '现实版千与千寻，十二层吊脚楼灯火辉煌璀璨夺目',
    cover_image: 'https://picsum.photos/seed/hongyadong/800/500'
  },
  {
    id: 64, name: '南京夫子庙', category: '城市地标', city: '南京', price: 0, rating: 4.5,
    description: '中国第一大庙，秦淮河画舫夜游，金陵文化发源地',
    cover_image: 'https://picsum.photos/seed/confucius/800/500'
  },
  {
    id: 65, name: '西安城墙', category: '城市地标', city: '西安', price: 54, rating: 4.7,
    description: '中国现存规模最大古代城垣，骑行一圈13.7公里怀古',
    cover_image: 'https://picsum.photos/seed/xiancitywall/800/500'
  },
  {
    id: 66, name: '天津之眼', category: '城市地标', city: '天津', price: 70, rating: 4.5,
    description: '世界上唯一建在桥上的摩天轮，海河两岸美景尽收眼底',
    cover_image: 'https://picsum.photos/seed/tianjineye/800/500'
  },
  {
    id: 67, name: '三亚天涯海角', category: '城市地标', city: '三亚', price: 44, rating: 4.4,
    description: '碧海蓝天椰林海，天涯海角石成为永恒爱情象征',
    cover_image: 'https://picsum.photos/seed/sanya/800/500'
  },
  {
    id: 68, name: '深圳世界之窗', category: '城市地标', city: '深圳', price: 245, rating: 4.4,
    description: '微缩的世界，130个景点浓缩全球名胜，夜间烟花秀精彩',
    cover_image: 'https://picsum.photos/seed/worldwindow/800/500'
  },
  {
    id: 69, name: '武汉黄鹤楼', category: '城市地标', city: '武汉', price: 70, rating: 4.5,
    description: '天下江山第一楼，崔颢题诗李白搁笔，江南三大名楼之一',
    cover_image: 'https://picsum.photos/seed/huanghelou/800/500'
  },
  {
    id: 70, name: '长沙橘子洲', category: '城市地标', city: '长沙', price: 0, rating: 4.6,
    description: '青年毛泽东雕塑公园，湘江中心的生态绿洲，烟花故乡',
    cover_image: 'https://picsum.photos/seed/juzizhou/800/500'
  },
  {
    id: 71, name: '青岛栈桥', category: '城市地标', city: '青岛', price: 0, rating: 4.5,
    description: '青岛的象征，回澜阁海滨风光，红瓦绿树碧海蓝天',
    cover_image: 'https://picsum.photos/seed/qingdao/800/500'
  },
  {
    id: 72, name: '厦门鼓浪屿日光岩', category: '城市地标', city: '厦门', price: 50, rating: 4.6,
    description: '鼓浪屿最高峰，一览全岛海景，郑成功屯兵遗址',
    cover_image: 'https://picsum.photos/seed/ri Guangyan/800/500'
  },
  {
    id: 73, name: '哈尔滨冰雪大世界', category: '城市地标', city: '哈尔滨', price: 320, rating: 4.6,
    description: '世界最大冰雪主题乐园，冰雕城堡晶莹剔透如梦如幻',
    cover_image: 'https://picsum.photos/seed/harbinger/800/500'
  },
  {
    id: 74, name: '大连星海广场', category: '城市地标', city: '大连', price: 0, rating: 4.4,
    description: '亚洲最大城市广场，跨海大桥夜景美不胜收',
    cover_image: 'https://picsum.photos/seed/xinghai/800/500'
  },
  {
    id: 75, name: '珠海渔女', category: '城市地标', city: '珠海', price: 0, rating: 4.4,
    description: '珠海标志雕像，渔女手捧明珠矗立海边浪漫动人',
    cover_image: 'https://picsum.photos/seed/fishgirl/800/500'
  },

  // ===== 文化体验 (76-90) =====
  {
    id: 76, name: '西安大唐不夜城', category: '文化体验', city: '西安', price: 0, rating: 4.7,
    description: '梦回大唐盛世，灯光璀璨步行街，不倒翁小姐姐爆红全网',
    cover_image: 'https://picsum.photos/seed/datang/800/500'
  },
  {
    id: 77, name: '印象刘三姐', category: '文化体验', city: '桂林', price: 215, rating: 4.6,
    description: '张艺谋导演大型山水实景演出，漓江为舞台群星为演员',
    cover_image: 'https://picsum.photos/seed/liujiesong/800/500'
  },
  {
    id: 78, name: '宋城千古情', category: '文化体验', city: '杭州', price: 330, rating: 4.7,
    description: '世界两大奇观之一，一场演出看透杭州千年历史',
    cover_image: 'https://picsum.photos/seed/qianqing/800/500'
  },
  {
    id: 79, name: '云南映象', category: '文化体验', city: '大理', price: 280, rating: 4.5,
    description: '杨丽萍导演原生态歌舞，云南少数民族风情原汁原味',
    cover_image: 'https://picsum.photos/seed/yunnanshow/800/500'
  },
  {
    id: 80, name: '敦煌丝路花雨', category: '文化体验', city: '敦煌', price: 320, rating: 4.6,
    description: '中国经典舞剧，敦煌壁画飞天形象的舞台再现',
    cover_image: 'https://picsum.photos/seed/silkroute/800/500'
  },
  {
    id: 81, name: '成都川剧变脸', category: '文化体验', city: '成都', price: 180, rating: 4.5,
    description: '蜀中绝技变脸吐火，巴蜀文化精髓，茶馆里品味川味',
    cover_image: 'https://picsum.photos/seed/chuanju/800/500'
  },
  {
    id: 82, name: '凤凰古城沱江泛舟', category: '文化体验', city: '湘西', price: 108, rating: 4.5,
    description: '沈从文笔下的边城，吊脚楼沿河而建，沱江泛舟诗意盎然',
    cover_image: 'https://picsum.photos/seed/fenghuang/800/500'
  },
  {
    id: 83, name: '婺源篁岭晒秋', category: '文化体验', city: '上饶', price: 130, rating: 4.6,
    description: '中国最美乡村，五彩晒秋人家，油菜花海梯田如画',
    cover_image: 'https://picsum.photos/seed/wuyuan/800/500'
  },
  {
    id: 84, name: '宏村月沼夜景', category: '文化体验', city: '黄山', price: 104, rating: 4.6,
    description: '牛形古村落，月沼倒影马头墙，水墨中国画里的乡村',
    cover_image: 'https://picsum.photos/seed/hongcun/800/500'
  },
  {
    id: 85, name: '福建土楼', category: '文化体验', city: '漳州', price: 65, rating: 4.5,
    description: '东方古城堡，世界文化遗产，四菜一汤网红土楼',
    cover_image: 'https://picsum.photos/seed/tulou/800/500'
  },
  {
    id: 86, name: '贵州西江千户苗寨', category: '文化体验', city: '黔东南', price: 100, rating: 4.5,
    description: '世界最大苗族聚居村寨，万家灯火夜景震撼壮观',
    cover_image: 'https://picsum.photos/seed/miaozhai/800/500'
  },
  {
    id: 87, name: '湘西芙蓉镇', category: '文化体验', city: '湘西', price: 120, rating: 4.5,
    description: '挂在瀑布上的千年古镇，瀑布穿镇而过奇观罕见',
    cover_image: 'https://picsum.photos/seed/furong/800/500'
  },
  {
    id: 88, name: '景德镇陶瓷文化', category: '文化体验', city: '景德镇', price: 100, rating: 4.5,
    description: '瓷都千年传承，古窑民俗博览区亲手拉坯做瓷器',
    cover_image: 'https://picsum.photos/seed/jingdezhen/800/500'
  },
  {
    id: 89, name: '潮汕工夫茶体验', category: '文化体验', city: '潮州', price: 50, rating: 4.4,
    description: '中国茶道活化石，关公巡海韩信点兵，一壶工夫品人生',
    cover_image: 'https://picsum.photos/seed/gongchuatea/800/500'
  },
  {
    id: 90, name: '客家围屋文化', category: '文化体验', city: '梅州', price: 30, rating: 4.3,
    description: '中原移民的防御性民居，圆形方形围屋独具特色',
    cover_image: 'https://picsum.photos/seed/hakka/800/500'
  },

  // ===== 特色体验 (91-100) =====
  {
    id: 91, name: '呼伦贝尔大草原', category: '特色体验', city: '呼伦贝尔', price: 0, rating: 4.7,
    description: '中国最美草原，天苍苍野茫茫，骑马射箭住蒙古包',
    cover_image: 'https://picsum.photos/seed/grassland/800/500'
  },
  {
    id: 92, name: '西双版纳热带雨林', category: '特色体验', city: '西双版纳', price: 75, rating: 4.5,
    description: '动植物王国，亚洲象孔雀飞舞，傣族泼水节热闹非凡',
    cover_image: 'https://picsum.photos/seed/rainforest/800/500'
  },
  {
    id: 93, name: '腾冲热海', category: '特色体验', city: '保山', price: 70, rating: 4.4,
    description: '地热温泉之乡，大滚锅蒸汽腾腾，泡温泉养生日浴',
    cover_image: 'https://picsum.photos/seed/rehai/800/500'
  },
  {
    id: 94, name: '漠河北极村', category: '特色体验', city: '大兴安岭', price: 0, rating: 4.5,
    description: '中国最北端，夏至白夜奇观，极光偶尔现身梦幻',
    cover_image: 'https://picsum.photos/seed/beijicun/800/500'
  },
  {
    id: 95, name: '敦煌鸣沙山月牙泉', category: '特色体验', city: '敦煌', price: 110, rating: 4.6,
    description: '沙泉共处千年不消，骑骆驼登沙山看落日壮美',
    cover_image: 'https://picsum.photos/seed/mingsha/800/500'
  },
  {
    id: 96, name: '阳朔十里画廊', category: '特色体验', city: '桂林', price: 0, rating: 4.6,
    description: '骑行十里风景如画，遇龙河竹筏漂流田园牧歌',
    cover_image: 'https://picsum.photos/seed/yangshuo/800/500'
  },
  {
    id: 97, name: '武夷山大红袍', category: '特色体验', city: '南平', price: 120, rating: 4.6,
    description: '世界双遗产地，大红袍母树九曲溪竹筏，丹霞奇观',
    cover_image: 'https://picsum.photos/seed/wuyi/800/500'
  },
  {
    id: 98, name: '恩施大峡谷', category: '特色体验', city: '恩施', price: 160, rating: 4.7,
    description: '美国科罗拉图的中国版，云龙地缝七星寨令人震撼',
    cover_image: 'https://picsum.photos/seed/enshi/800/500'
  },
  {
    id: 99, name: '张掖丹霞地质公园', category: '特色体验', city: '张掖', price: 54, rating: 4.7,
    description: '上帝打翻的调色盘，七彩丹霞色彩斑斓如梦如幻',
    cover_image: 'https://picsum.photos/seed/zhangye/800/500'
  },
  {
    id: 100, name: '稻城亚丁徒步', category: '特色体验', city: '甘孜', price: 146, rating: 4.9,
    description: '蓝色星球最后一片净土，三神山朝圣之旅一生必去',
    cover_image: 'https://picsum.photos/seed/adventure/800/500'
  }
];
