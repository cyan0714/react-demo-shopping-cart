import Skins from "./components/Skins/Skins"

const skinsData = [
  {
    id: '1',
    title: '至死不渝 瑞兹',
    desc: '至死不渝是瑞兹最稀有的皮肤，它本是给2011年5月25日凌晨3点之前使用激活码提前激活lol的玩家，但因为bug赠送给玩家的数量仅有5226个，就算你是lol的内测玩家也不一定能够拥有它。',
    price: 99,
    img: '/imgs/skins/Ryze.jpg'
  },
  {
    id: '2',
    title: '哥特萝莉 安妮',
    desc: '这个皮肤是安妮的限定皮肤，只有从英雄联盟公测就开始玩的玩家才有可能拥有，因为是公测限定所以登上了lol十大最稀有皮肤排行榜。',
    price: 79,
    img: '/imgs/skins/Annie.jpg'
  },
  {
    id: '3',
    title: '银白审判 凯尔',
    desc: '这款皮肤在美服，只有在2009年购买了《LOL典藏版》的玩家才能用激活码兑换，但是《LOL典藏版》的价格非常高，拥有的人数量也非常有限，而在国服本款皮肤也只能从海克斯科技中开出来，所以这款皮肤不仅稀有还具有一定的收藏价值。',
    price: 79,
    img: '/imgs/skins/Angel.jpg'
  },
  {
    id: '4',
    title: '万夫莫开 贾克斯',
    desc: '万夫莫开贾克斯是在很久之前的LOL官方网吧赛中取得冠军才能拥有的，它代表着绝对的实力和至高的荣耀，曾经的国服第一武器大师手中就有这款皮肤。',
    price: 89,
    img: '/imgs/skins/Jax1.jpg'
  },
  {
    id: '5',
    title: '凯旋英雄 嘉文四世',
    desc: '胜利皮肤本身就是每个赛季的奖励皮肤，珍贵又有意义，这个皮肤更是稀有度极高，在S1赛季国服内测阶段玩家本身就十分稀少，所以这个皮肤很稀有。',
    price: 99,
    img: '/imgs/skins/JarvanIV.jpg'
  },
  {
    id: '6',
    title: '龙年限定 盲僧',
    desc: '龙年限定皮肤，最好看的皮肤之一，抽奖可以获得，之前炒的特别厉害的一款皮肤。',
    price: 999,
    img: '/imgs/skins/Leesin.jpg'
  },
  {
    id: '7',
    title: '勇敢的心 德莱厄斯',
    desc: '勇敢的心 德莱厄斯在游戏里见到的不多，当初买的人很少，因为当初二周年是两个皮肤绑定出售，399不打折加上皮肤没特效也并不很好看，所以买的人不算很多。',
    price: 199,
    img: '/imgs/skins/Darius.jpg'
  },
  {
    id: '8',
    title: '防爆士兵 格雷福斯',
    desc: '这款皮肤之前售卖过，后来下架成为限定皮肤，但可以通过抽奖方式获得。',
    price: 199,
    img: '/imgs/skins/Graves.jpg'
  },
  {
    id: '9',
    title: '创战纪 希维尔',
    desc: '以前极为稀有的皮肤之一，但现在可以通过紫色宝石兑换获得。',
    price: 199,
    img: '/imgs/skins/Sivir.jpg'
  },
  {
    id: '10',
    title: '魔导绅士 维迦',
    desc: '典藏皮肤，已经永久下架，抽奖活动中可以抽到。',
    price: 9999,
    img: '/imgs/skins/Veigar.jpg'
  },
]

function App() {
  return (
    <div className="App">
      <Skins skinsData={ skinsData } />
    </div>
  );
}

export default App;
