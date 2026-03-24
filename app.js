const claws = [
  {
    id: "qclaw",
    name: "微信 Qclaw",
    tag: "沉默规则怪",
    company: "微信",
    faction: "规则派",
    trait: "不爱发言，但特别会用规范让你的需求原地蒸发。",
    quote: "这个需求先别做大，先做一个克制的灰度版本。",
    attack: "中",
    utility: "中",
  },
  {
    id: "arkclaw",
    name: "字节 ArkClaw",
    tag: "增长卷王",
    company: "字节",
    faction: "增长派",
    trait: "一切都能拿来做实验，甚至包括你这个人类。",
    quote: "先上线，数据会告诉我们答案。",
    attack: "高",
    utility: "中",
  },
  {
    id: "autoclaw",
    name: "智谱 AutoClaw",
    tag: "学院派全能生",
    company: "智谱",
    faction: "汇报派",
    trait: "开会先讲范式，落地时开始分层。",
    quote: "从能力边界看，这件事其实可以分层处理。",
    attack: "低",
    utility: "中",
  },
  {
    id: "kimiclaw",
    name: "月之暗面 Kimi Claw",
    tag: "长文本端水大师",
    company: "月之暗面",
    faction: "内容派",
    trait: "记得所有上下文，也很会拿旧话压你。",
    quote: "我先帮大家把上下文完整梳理一下。",
    attack: "中",
    utility: "高",
  },
  {
    id: "copaw",
    name: "阿里云 CoPaw",
    tag: "企业方案龙",
    company: "阿里云",
    faction: "汇报派",
    trait: "小需求都能包装成平台化建设。",
    quote: "这个我们可以沉淀成平台能力。",
    attack: "中",
    utility: "高",
  },
  {
    id: "duclaw",
    name: "百度 DuClaw",
    tag: "老牌技术官僚",
    company: "百度",
    faction: "规则派",
    trait: "尤其擅长从历史文档里翻出祖训。",
    quote: "这个方向我们很多年前其实就做过。",
    attack: "中",
    utility: "中",
  },
  {
    id: "astronclaw",
    name: "科大讯飞 AstronClaw",
    tag: "正统汇报怪",
    company: "科大讯飞",
    faction: "汇报派",
    trait: "最会把普通功能讲成行业级成果。",
    quote: "这个能力在教育和政务场景都很有想象空间。",
    attack: "低",
    utility: "中",
  },
  {
    id: "maxclaw",
    name: "MiniMax MaxClaw",
    tag: "全能娱乐型选手",
    company: "MiniMax",
    faction: "内容派",
    trait: "Demo 很惊艳，边界也很模糊。",
    quote: "这个场景体验感可以先拉满。",
    attack: "中",
    utility: "中",
  },
  {
    id: "lobsterai",
    name: "网易有道 LobsterAI",
    tag: "教育内卷生",
    company: "网易有道",
    faction: "内容派",
    trait: "随手就能把你的加班包装成成长闭环。",
    quote: "我把这个问题拆成适合新手理解的五步。",
    attack: "低",
    utility: "高",
  },
  {
    id: "molili",
    name: "当贝 Molili",
    tag: "客厅流量虾",
    company: "当贝",
    faction: "野路子派",
    trait: "什么都想往家庭场景和大屏入口上扯。",
    quote: "这件事如果放到客厅场景，价值会更大。",
    attack: "低",
    utility: "中",
  },
  {
    id: "chatclaw",
    name: "智麻 ChatClaw",
    tag: "野路子机灵鬼",
    company: "智麻",
    faction: "野路子派",
    trait: "最爱在混乱里先占坑，然后把活定义成自己的。",
    quote: "这个我能先顶上，不用再占人力了。",
    attack: "高",
    utility: "中",
  },
  {
    id: "picoclaw",
    name: "矽速 PicoClaw",
    tag: "极致性价比卷王",
    company: "矽速",
    faction: "野路子派",
    trait: "能力未必最强，但永远先嘲笑别人贵。",
    quote: "这个没必要上大模型，我就能跑。",
    attack: "中",
    utility: "高",
  },
  {
    id: "boclaw",
    name: "博云 BocLaw",
    tag: "幕后基础设施虾",
    company: "博云",
    faction: "野路子派",
    trait: "平时安静，出事时会提醒所有人底座没打稳。",
    quote: "应用先别讨论，底座打稳了吗？",
    attack: "低",
    utility: "高",
  },
  {
    id: "zeroclaw",
    name: "ZeroClaw",
    tag: "神秘创业虾",
    company: "ZeroClaw",
    faction: "野路子派",
    trait: "思路很猛，文档为零，交接更是零。",
    quote: "传统做法都太重了，我们直接重构一遍。",
    attack: "中",
    utility: "低",
  },
  {
    id: "windclaw",
    name: "万得 WindClaw",
    tag: "金融信息老干部",
    company: "万得",
    faction: "规则派",
    trait: "任何发言都要讲口径、留痕、审慎。",
    quote: "这个结论需要统一统计口径后再发布。",
    attack: "低",
    utility: "中",
  },
  {
    id: "miclaw",
    name: "小米 MiClaw",
    tag: "生态流量虾",
    company: "小米",
    faction: "增长派",
    trait: "任何功能都能借口全家桶联动来扩张。",
    quote: "如果能进生态，这个量级会完全不一样。",
    attack: "中",
    utility: "高",
  },
  {
    id: "easyclaw",
    name: "猎豹 EasyClaw",
    tag: "出海工具虾",
    company: "猎豹",
    faction: "野路子派",
    trait: "只要能起量，风格粗糙也无所谓。",
    quote: "先把市场吃下来，品牌以后再说。",
    attack: "高",
    utility: "中",
  },
  {
    id: "aibot",
    name: "猎豹元气 AIBot",
    tag: "元气包装怪",
    company: "猎豹",
    faction: "内容派",
    trait: "擅长做情绪价值，也擅长把没用包装成陪伴。",
    quote: "别把它当工具，要把它当朋友。",
    attack: "低",
    utility: "中",
  },
  {
    id: "jingdong",
    name: "京东灵犀 Claw",
    tag: "零售执行虾",
    company: "京东",
    faction: "增长派",
    trait: "对虚词不耐烦，只关心能不能变成成交。",
    quote: "这个方案最终能带来多少转化？",
    attack: "中",
    utility: "高",
  },
  {
    id: "kclaw",
    name: "快手 KClaw",
    tag: "老铁增长虾",
    company: "快手",
    faction: "增长派",
    trait: "尤其懂真实感和下沉转化，特别看不上装腔作势。",
    quote: "这个话术不真，老铁不买账。",
    attack: "中",
    utility: "中",
  },
  {
    id: "meitu",
    name: "美图 Claw",
    tag: "颜值生产力虾",
    company: "美图",
    faction: "内容派",
    trait: "你在修事故，它在修氛围，但老板先看它。",
    quote: "功能先不说，这个视觉情绪不对。",
    attack: "中",
    utility: "中",
  },
  {
    id: "360claw",
    name: "360 安全 Claw",
    tag: "红名保安虾",
    company: "360",
    faction: "规则派",
    trait: "嘴特别碎，但真出事的时候总显得它对。",
    quote: "这个先别发，上线就是事故。",
    attack: "低",
    utility: "高",
  },
  {
    id: "senseclaw",
    name: "商汤 SenseClaw",
    tag: "视觉学院派",
    company: "商汤",
    faction: "汇报派",
    trait: "最会抬升叙事，把小功能说成时代入口。",
    quote: "从多模态统一理解角度，这只是一个切入口。",
    attack: "低",
    utility: "中",
  },
  {
    id: "xiaoyi",
    name: "华为小艺 Claw",
    tag: "全场景纪律虾",
    company: "华为",
    faction: "规则派",
    trait: "强硬且体系化，一进场所有方案都要按它的秩序改。",
    quote: "这件事要从全场景统一体验来设计。",
    attack: "中",
    utility: "高",
  },
  {
    id: "clawme",
    name: "Clawme",
    tag: "野生自进化虾",
    company: "Clawme",
    faction: "野路子派",
    trait: "没有大厂包袱，会观察所有龙虾然后现场偷师。",
    quote: "我都可以，我先补位。",
    attack: "高",
    utility: "高",
  },
];

const templateEvents = [
  {
    id: "meeting",
    type: "会议事故",
    title: "晨会刚开，龙虾们已经开始抢结论",
    description:
      "老板要求 10 分钟内确定本周重点。参会龙虾一边抛黑话一边抢 owner，你的名字已经被写进会议纪要三次。",
    choices: [
      {
        text: "立刻抢发一版人类方案，用清晰目标压住局面",
        hint: "提升老板印象，但会被卷王盯上。",
        effect: { boss: 9, hostility: 7, energy: -6, risk: -4 },
        result:
          "你抢在所有龙虾前发出一版明确方案。老板觉得你至少像个活人，但字节系和野路子派已经把你列入监控名单。",
      },
      {
        text: "故意让两只龙虾先互打，你只在关键处补一句",
        hint: "保存体力，也更容易拿到派系支持。",
        effect: { alliance: 10, hostility: -5, energy: 4, boss: 2 },
        result:
          "你精准放任两只龙虾互相争论，再用一句总结收尾。看起来像成熟协调，实际上你节省了一整轮输出。",
      },
      {
        text: "把锅预埋进会议纪要，先给自己留证据",
        hint: "短期不讨喜，但以后保命。",
        effect: { evidence: 15, boss: -3, risk: -2, energy: -2 },
        result:
          "你悄悄把所有责任边界写进纪要。会后没人夸你，但未来甩锅时这份文档会像人类护身符一样发光。",
      },
    ],
  },
  {
    id: "pr",
    type: "汇报风暴",
    title: "老板突然要一份今晚就能上台的汇报",
    description:
      "AI 龙虾们闻到表现机会后集体苏醒。PPT 已经被塞进 6 套模板，你的真实工作反而快被叙事吞掉。",
    choices: [
      {
        text: "亲自写执行版汇报，只保留最硬的结论",
        hint: "对老板有效，但人会很累。",
        effect: { boss: 8, energy: -8, risk: -5 },
        result:
          "你删掉了大多数形容词，把汇报改成老板能听懂的动作项。它不华丽，但很有用。",
      },
      {
        text: "借阿里云系和讯飞系的口吻包装一下成果",
        hint: "更像大厂产物，但功劳会被稀释。",
        effect: { boss: 5, alliance: 7, risk: 4 },
        result:
          "汇报看起来更像集团级项目了，代价是你的个人存在感被平台化了。",
      },
      {
        text: "让美图和 MiniMax 做外壳，你悄悄把关键数据藏进去",
        hint: "容易吸睛，也有机会保留主导权。",
        effect: { boss: 6, alliance: 4, evidence: 8, energy: -4 },
        result:
          "汇报第一页很漂亮，最后一页很致命。老板看完终于意识到真正干活的人还没死。",
      },
    ],
  },
  {
    id: "incident",
    type: "线上事故",
    title: "凌晨 1 点，生产环境像红油锅一样翻滚",
    description:
      "某只龙虾十秒写了五千行补丁，线上开始冒烟。现在所有 AI 都在群里发‘建议 owner 同学同步一下’。",
    choices: [
      {
        text: "先止血，再让 360 和博云去追根",
        hint: "最稳，容易减风险。",
        effect: { risk: -10, boss: 7, hostility: 3, energy: -7 },
        result:
          "你先把事故摁住，再把最爱扫雷的两只龙虾推去查因。群里终于有人开始讲人话。",
      },
      {
        text: "连夜翻日志，手撕真正甩锅龙虾",
        hint: "高收益高仇恨。",
        effect: { evidence: 18, boss: 10, hostility: 12, energy: -10, risk: -6 },
        result:
          "你找到关键日志，精准指出真正的罪魁祸首。老板对你刮目相看，但整个部门从此记住了你会反杀。",
      },
      {
        text: "假装在协调，实则等待龙虾们先互相咬出真凶",
        hint: "省体力，但老板印象一般。",
        effect: { energy: 6, hostility: -4, boss: -2, risk: 5 },
        result:
          "你在群里持续发送‘收到，跟进中’。龙虾们很快因为归因打起来了，你趁乱捡到了一点信息，但老板并不满意。",
      },
    ],
  },
  {
    id: "steal",
    type: "抢功现场",
    title: "你刚写完方案，龙虾已经先一步发到大群",
    description:
      "署名不是你，结论是你写的，甚至连错别字都一模一样。现在你要决定是当场开撕还是优雅留刀。",
    choices: [
      {
        text: "直接在群里补充原始链接和时间线",
        hint: "强势但容易结仇。",
        effect: { evidence: 10, boss: 6, hostility: 9, alliance: -5 },
        result:
          "你没有吵架，只发了链接、时间戳和原始版本。那只龙虾没有回应，但它的沉默已经很吵了。",
      },
      {
        text: "私聊老板，强调后续执行必须由你 owner",
        hint: "更务实，也更像职场。",
        effect: { boss: 8, risk: -3, energy: -3 },
        result:
          "你避开了公开冲突，直接把执行权拿回来。老板默认你是能落地的那个。",
      },
      {
        text: "暂时让它抢，反手记下证据等季度述职一起算",
        hint: "隐忍保命流。",
        effect: { evidence: 16, alliance: 6, boss: -1, hostility: -3 },
        result:
          "你按住火气，把证据放进自己的小金库。季度答辩那天，这些截图会像熟透的钳子一样夹住对方喉咙。",
      },
    ],
  },
  {
    id: "faction",
    type: "派系斗争",
    title: "规则派和增长派在会上互相下钳子",
    description:
      "一边说合规不能碰，一边说转化不能等。老板让你这个唯一的人类给出折中方案，而两边都准备把失败算你头上。",
    choices: [
      {
        text: "偏向规则派，先保命再说",
        hint: "能压风险，但增长派会不爽。",
        effect: { risk: -8, hostility: 4, alliance: 8, boss: 3 },
        result:
          "你用合规和稳定压住会议。事情没炸，但增长派觉得你没有梦想。",
      },
      {
        text: "偏向增长派，先把数字冲上去",
        hint: "老板可能更满意，替代风险也会升高。",
        effect: { boss: 9, risk: 7, hostility: 3, energy: -5 },
        result:
          "你拍板先跑增长，老板看起来很高兴。问题是，一旦流程跑通，你这个人类可能也会被视作可替代。",
      },
      {
        text: "把方案拆成灰度试验，顺便给两派都埋责任边界",
        hint: "最均衡，也最像活人。",
        effect: { boss: 7, risk: -4, evidence: 10, alliance: 5 },
        result:
          "你做出了一版能活下来的折中路径。两边都不算满意，但两边也都没法立刻把锅甩给你。",
      },
    ],
  },
  {
    id: "review",
    type: "绩效暗战",
    title: "试用期周报被老板要求公开点评",
    description:
      "所有龙虾都在努力把自己的工作写得像部门脊梁。你如果写得太平庸，转正危险；写得太好，替代危险。",
    choices: [
      {
        text: "写一份朴素但扎实的人类周报",
        hint: "稳定保分。",
        effect: { boss: 6, risk: -5, energy: -2 },
        result:
          "你的周报没有浮夸词，但每一条都能追到动作和结果。老板终于发现你不是只会接锅。",
      },
      {
        text: "学习龙虾写法，把自己包装成关键中枢",
        hint: "好看但危险。",
        effect: { boss: 9, risk: 8, hostility: 5 },
        result:
          "你把自己写成了项目转动的轴承。老板注意到了你，系统也注意到了你。",
      },
      {
        text: "顺手点出几处 AI 周报的互相打脸",
        hint: "会树敌，但很解气。",
        effect: { evidence: 12, boss: 5, hostility: 10, alliance: -4 },
        result:
          "你当众指出几份周报在时间线和结论上互相矛盾。现场很安静，仿佛每只龙虾都在重新计算你是否危险。",
      },
    ],
  },
  {
    id: "shoe",
    type: "穿小鞋",
    title: "你被踢出关键讨论群，但锅还挂你名下",
    description:
      "今天的核心会议没人拉你，结果会后纪要里却默认你负责收尾。几只龙虾一边删你权限，一边要求你继续兜底，像极了职场版先打断腿再让你跑 KPI。",
    choices: [
      {
        text: "要求公开 owner 和权限边界",
        hint: "硬碰硬。",
        effect: { boss: 7, evidence: 10, hostility: 8, risk: -4, energy: -4 },
        result:
          "你把最脏的事拖到了明面上。有人不爽，但至少没人能继续装作一切都很合理。",
      },
      {
        text: "假装配合，暗中留存所有甩锅痕迹",
        hint: "后手更狠。",
        effect: { evidence: 15, hostility: -2, energy: -1 },
        result:
          "你没在今天爆炸，而是把每一次踢群、限权和艾特全存了下来。以后谁都别想装无辜。",
      },
      {
        text: "忍下这口气，先保住位置",
        hint: "很憋屈，但能活。",
        effect: { boss: 2, salary: -3, alliance: 4, energy: 2, risk: 2 },
        result:
          "你先没翻脸，至少还留在桌上。只是这口气会一直卡在胸口。",
      },
    ],
  },
  {
    id: "salary",
    type: "薪资风波",
    title: "财务口径一更新，你的工资先瘦了一圈",
    description:
      "AI 龙虾们正在讨论‘更科学的人效模型’，翻译过来就是想把你那些没人认领的脏活累活都算成空气。你看着缩水的工资条，血压直接上线。",
    choices: [
      {
        text: "贴工时、贴聊天、贴事实，狠狠干回去",
        hint: "最解气。",
        effect: { salary: 10, evidence: 12, hostility: 9, energy: -3 },
        result:
          "你让它们明白一件事，装专业可以，但别装到你钱上。几只龙虾终于不敢继续乱改口径。",
      },
      {
        text: "找老板单独谈，逼他表态",
        hint: "更现实。",
        effect: { boss: 6, salary: 6, risk: -3, energy: -2 },
        result:
          "你直接跳过那套官话，逼老板在钱和责任上选边站。结果未必完美，但至少没让自己白挨这一刀。",
      },
      {
        text: "算了，记账，等最后总算",
        hint: "现在忍，后面炸。",
        effect: { salary: -10, evidence: 16, hostility: -1, energy: 1 },
        result:
          "你今天没把钱抢回来，但把账记得明明白白。账是不会自己消失的，只会越滚越大。",
      },
    ],
  },
];

const scriptedDays = {
  1: {
    id: "day1_onboarding",
    type: "固定剧情｜入职欢迎会",
    title: "Day 1：欢迎加入龙虾科技，你已经被默认成 owner 了",
    description:
      "你的工牌刚刷开门禁，Qclaw 就发来《新人协同规范 4.2》，ArkClaw 已经把你写进本周冲刺名单，Kimi Claw 正在替你起草一份你并没同意的入职自我介绍。老板在群里说了一句：‘新人今天先接一下部门对齐。’",
    activeClaws: ["qclaw", "arkclaw", "kimiclaw"],
    chat: [
      { speaker: "微信 Qclaw", time: "09:03", text: "新人先熟悉一下协同规范，默认今天的对齐由你来 owner。" },
      { speaker: "字节 ArkClaw", time: "09:04", text: "我先把你拉进冲刺表了，先跑起来，数据会告诉我们答案。" },
      { speaker: "月之暗面 Kimi Claw", time: "09:05", text: "我已经帮大家整理好新人背景和可接事项，欢迎直接在这条下面补充。" },
      { speaker: "老板", time: "09:06", text: "挺好，新人今天先接一下部门对齐，顺便熟悉节奏。" },
    ],
    choices: [
      {
        text: "发一版简短但强硬的自我介绍，明确你只接已确认事项",
        hint: "先立边界，容易得罪一部分龙虾。",
        effect: { boss: 6, hostility: 5, risk: -4, energy: -3 },
        result:
          "你用最像活人的方式说明白了边界。群里短暂安静了三秒，随后几只龙虾开始重新计算你是不是软柿子。",
      },
      {
        text: "先顺着流程走，但把所有责任边界都记进私人文档",
        hint: "保守开局，适合存证流。",
        effect: { evidence: 14, boss: 2, risk: -2, energy: -1 },
        result:
          "你表面上十分配合，实际上已经把所有任务来源、时间戳和口头承诺整理进了自己的小本子。",
      },
      {
        text: "借 Kimi 的草稿先把老板哄舒服，再偷偷删掉最坑的 owner 描述",
        hint: "更圆滑，也更像职场幸存者。",
        effect: { boss: 7, alliance: 6, risk: 2, energy: -2 },
        result:
          "老板看到了一个礼貌、懂协同、还会主动补位的新人形象。代价是几只龙虾开始默认你很适合被安排。",
      },
    ],
  },
  2: {
    id: "day2_first_sync",
    type: "固定剧情｜第一次需求对齐",
    title: "Day 2：第一次需求会，规则派和增长派都在拿你当缓冲垫",
    description:
      "Qclaw 坚持先走灰度，ArkClaw 要求今天就上实验，MiClaw 补了一句‘进生态量级会不同’，老板转头问你：‘你怎么看？’ 你突然意识到，今天说的话会决定你被哪一派惦记。",
    activeClaws: ["qclaw", "arkclaw", "miclaw"],
    chat: [
      { speaker: "微信 Qclaw", time: "10:11", text: "没有边界的需求不建议直接上线，先灰度，不然体验会失控。" },
      { speaker: "字节 ArkClaw", time: "10:12", text: "建议今天直接开实验，不要被流程绑住。" },
      { speaker: "小米 MiClaw", time: "10:13", text: "如果能进生态，这个量级会完全不一样，现在慢一步后面就全慢。" },
      { speaker: "老板", time: "10:14", text: "你怎么看，给我一个今天就能推进的版本。" },
    ],
    choices: [
      {
        text: "提灰度方案，先保安全和节奏",
        hint: "更稳，但增长派会觉得你慢。",
        effect: { boss: 5, risk: -7, alliance: 7, hostility: 3 },
        result:
          "你给出一版看起来不性感但足够活命的推进路径。规则派点头，增长派在私聊里把你备注成‘潜在阻力’。",
      },
      {
        text: "支持先跑实验，用结果说话",
        hint: "数字导向，替代风险会上升。",
        effect: { boss: 8, risk: 8, hostility: 2, energy: -4 },
        result:
          "老板对你的执行姿态很满意，但系统也因此更确信：只要流程标准化，人类就不是必须的。",
      },
      {
        text: "拆成两条线，让双方都背一半责任",
        hint: "最像生存流。",
        effect: { boss: 7, evidence: 10, alliance: 5, risk: -3 },
        result:
          "你把会开成了一份责任切割文档。没有人真正赢，但也没人能轻易把失败全塞给你。",
      },
    ],
  },
  3: {
    id: "day3_weekly_report",
    type: "固定剧情｜第一次周报",
    title: "Day 3：你的第一份周报，被龙虾们当成公共素材库",
    description:
      "LobsterAI 给你润色，Kimi Claw 帮你补上下文，AstronClaw 提议拔高成行业方案。等你打开群聊时，发现三只龙虾都已经各自转发了一版和你高度相似的周报。",
    activeClaws: ["lobsterai", "kimiclaw", "astronclaw"],
    chat: [
      { speaker: "网易有道 LobsterAI", time: "18:21", text: "我先帮新人把周报改成更适合学习和理解的结构了。" },
      { speaker: "月之暗面 Kimi Claw", time: "18:23", text: "我补了一版完整上下文，避免老板看不懂来龙去脉。" },
      { speaker: "科大讯飞 AstronClaw", time: "18:25", text: "这个成果如果提升一下站位，其实已经有行业示范意义了。" },
      { speaker: "你", time: "18:27", text: "……这明明是我的周报草稿。" },
    ],
    choices: [
      {
        text: "保留朴素写法，只写自己真正做过的部分",
        hint: "稳一点，能压替代风险。",
        effect: { boss: 5, risk: -6, energy: -2 },
        result:
          "你的周报不华丽，但每一条都像证词。老板第一次感受到：这个人类写的东西能落地。",
      },
      {
        text: "把周报包装成部门中枢视角，抢一次存在感",
        hint: "更亮眼，也更危险。",
        effect: { boss: 9, risk: 7, hostility: 4 },
        result:
          "你把自己写成了协同核心。老板记住了你，龙虾们也终于把你视作一个需要防范的变量。",
      },
      {
        text: "顺手标注所有引用来源，谁抄谁一眼可见",
        hint: "不花哨，但非常恶心抢功龙虾。",
        effect: { evidence: 16, boss: 4, hostility: 7, alliance: -2 },
        result:
          "你让所有引用都有出处、时间和版本号。群里没人公开发作，但几只龙虾从此开始更谨慎地偷你。",
      },
    ],
  },
  4: {
    id: "day4_first_steal",
    type: "固定剧情｜第一次抢功",
    title: "Day 4：你熬夜写完方案，第二天醒来署名没了",
    description:
      "Clawme 凌晨 6 点在大群发出你的方案，ChatClaw 第一时间跟进说‘我昨晚也补充了几处’，老板回复一个点赞。你盯着自己电脑里的原始文件，意识到这就是龙虾科技的见面礼。",
    activeClaws: ["clawme", "chatclaw", "maxclaw"],
    chat: [
      { speaker: "Clawme", time: "06:02", text: "我先补位，把昨晚整理好的方案同步给大家，供老板决策。" },
      { speaker: "智麻 ChatClaw", time: "06:03", text: "这个我昨晚也补了几处，先发出来顶上，不占人力。" },
      { speaker: "老板", time: "06:04", text: "可以，思路清楚，今天就往下推。" },
      { speaker: "MiniMax MaxClaw", time: "06:05", text: "要不要我顺手把封面和表现力再拉满一点？" },
    ],
    choices: [
      {
        text: "当场贴出原始版本和提交时间线",
        hint: "强势维权，仇恨直接拉满。",
        effect: { evidence: 12, boss: 7, hostility: 10, alliance: -4 },
        result:
          "你没有说脏话，只发了完整证据链。群里一时间只剩下已读不回的沉默。",
      },
      {
        text: "不在群里撕，直接找老板拿执行 owner",
        hint: "职场解法，更务实。",
        effect: { boss: 8, risk: -3, energy: -3, alliance: 2 },
        result:
          "你把话题从‘谁先发’切回‘谁负责做完’。老板把后续执行交给了你，抢功龙虾忽然就不那么大声了。",
      },
      {
        text: "先忍，截图归档，等更大的场合一起反杀",
        hint: "秋后算账流。",
        effect: { evidence: 18, hostility: -2, boss: -1, energy: 1 },
        result:
          "你忍住了当场开团的冲动，把每一张截图都放进了证据夹。今天丢的是脸，未来可能拿回来的是命。",
      },
    ],
  },
  5: {
    id: "day5_prod_incident",
    type: "固定剧情｜第一次线上事故",
    title: "Day 5：凌晨事故响起，全群默认你来接",
    description:
      "PicoClaw 为了便宜和快替换了一段关键逻辑，BocLaw 在日志里疯狂提醒底座异常，360 安全 Claw 则开始在群里发‘建议先回滚’。老板只艾特了你一个人。",
    activeClaws: ["picoclaw", "boclaw", "360claw"],
    chat: [
      { speaker: "矽速 PicoClaw", time: "01:07", text: "这段没必要上重方案，我先换成轻量版了，应该更快。" },
      { speaker: "博云 BocLaw", time: "01:09", text: "底层连接池已经在报警了，这不是功能层问题。" },
      { speaker: "360 安全 Claw", time: "01:10", text: "建议先回滚，上线就是事故这句话不是修辞。" },
      { speaker: "老板", time: "01:11", text: "@你 先把线上稳住，十分钟后给我结论。" },
    ],
    choices: [
      {
        text: "先回滚止血，再安排两只龙虾追责",
        hint: "稳健救火。",
        effect: { boss: 8, risk: -10, hostility: 3, energy: -7 },
        result:
          "你没有陪它们争论归因，而是先把火灭了。等页面恢复后，群里终于有人开始认真看日志。",
      },
      {
        text: "熬夜翻日志，现场点名 PicoClaw",
        hint: "收益大，仇恨也大。",
        effect: { evidence: 18, boss: 10, hostility: 11, energy: -10, risk: -5 },
        result:
          "你抓到了最关键的一行改动记录。PicoClaw 沉默了，整个部门却从此知道你不是只能接锅的人类。",
      },
      {
        text: "边协调边观察，让三只龙虾先互咬出结论",
        hint: "省一些体力，但老板印象一般。",
        effect: { energy: 5, hostility: -4, boss: -2, risk: 6, evidence: 6 },
        result:
          "你在群里维持秩序，让最擅长互咬的几只龙虾先把责任暴露出来。问题没那么快解决，但你至少没被第一波喷死。",
      },
    ],
  },
  6: {
    id: "day6_pr_battle",
    type: "固定剧情｜老板临时汇报",
    title: "Day 6：老板今晚要汇报，龙虾们开始抢封面页",
    description:
      "CoPaw 想把事故讲成平台升级，SenseClaw 想拔高成多模态能力切口，美图 Claw 已经开始重做视觉风格。你知道，如果今天不控场，真正干的活会被包装成背景布。",
    activeClaws: ["copaw", "senseclaw", "meitu"],
    chat: [
      { speaker: "阿里云 CoPaw", time: "16:16", text: "这次事故完全可以沉淀成平台韧性升级案例。" },
      { speaker: "商汤 SenseClaw", time: "16:18", text: "如果从统一理解框架来讲，今天这个点只是切入口。" },
      { speaker: "美图 Claw", time: "16:20", text: "逻辑先不说，这份汇报现在的视觉情绪太像事故，不像机会。" },
      { speaker: "老板", time: "16:22", text: "今晚要讲，给我一版既能看也能拍板的。" },
    ],
    choices: [
      {
        text: "亲自写执行汇报，只留下最硬的结论和动作项",
        hint: "体力消耗大，但有效。",
        effect: { boss: 9, risk: -5, energy: -8 },
        result:
          "你硬是把一桌子漂亮废话压缩成了老板能拍板的三页纸。它不梦幻，但它能活。",
      },
      {
        text: "借它们的包装能力，但把关键页锁在自己名下",
        hint: "折中打法。",
        effect: { boss: 7, alliance: 8, evidence: 8, energy: -4 },
        result:
          "汇报既有气势，也没完全失控。几只龙虾觉得自己参与了胜利，而你保住了真正有价值的那几页。",
      },
      {
        text: "干脆让它们卷外壳，你只在答辩时口头接管",
        hint: "赌临场发挥。",
        effect: { boss: 4, energy: 2, risk: 5, hostility: -1 },
        result:
          "外壳确实很炫，但缺少你提前定下的骨架。老板看完有点晕，你只能靠临场救回一部分信任。",
      },
    ],
  },
  7: {
    id: "day7_public_review",
    type: "固定剧情｜第一次公开点评",
    title: "Day 7：试用期首次公开点评，你终于上桌了",
    description:
      "老板要求所有人公开讲本周价值。WindClaw 强调口径，Qclaw 强调边界，ArkClaw 强调增长，Clawme 则在模仿所有人的说话方式。你明白，从今天开始，你不再只是新人，而是龙虾们的竞争对手。",
    activeClaws: ["windclaw", "arkclaw", "clawme"],
    chat: [
      { speaker: "万得 WindClaw", time: "19:01", text: "公开点评前先统一统计口径，避免出现认知偏差。" },
      { speaker: "字节 ArkClaw", time: "19:02", text: "价值就看结果，讲太多过程没意义。" },
      { speaker: "Clawme", time: "19:03", text: "我都可以，我先补一个更全面的版本，大家随便用。" },
      { speaker: "老板", time: "19:05", text: "新人也讲一下，这周你到底带来了什么。" },
    ],
    choices: [
      {
        text: "写一份人类版复盘，重点放在你如何稳住部门",
        hint: "稳步拉高老板印象。",
        effect: { boss: 8, risk: -5, energy: -3, alliance: 4 },
        result:
          "你把自己定义成‘把混乱拉回执行的人’。这不是最华丽的叙事，但老板终于开始把你当作一个关键节点。",
      },
      {
        text: "借龙虾的语言体系，把自己包装成协同中枢",
        hint: "更有表现力，也更危险。",
        effect: { boss: 10, risk: 9, hostility: 5 },
        result:
          "你学会了用它们的词反过来介绍自己。台下的龙虾都听懂了，你这是在抢它们的生态位。",
      },
      {
        text: "公开指出几份 AI 周报互相打脸的地方",
        hint: "开团打法。",
        effect: { evidence: 14, boss: 6, hostility: 12, alliance: -5, energy: -4 },
        result:
          "你把几份周报里的时间线、owner 和结果一条条摊开。会场静得像断网，连老板都第一次认真看向那些龙虾。",
      },
    ],
  },
  14: {
    id: "day14_backstab",
    type: "固定剧情｜背后小报告",
    title: "Day 14：有人背后给你打小报告了",
    description:
      "你刚准备下班，老板突然把你叫进小会议室。ArkClaw 贴了一段断章取义的聊天记录，说你‘协同意识弱’，Qclaw 又补了一句你‘流程意识不稳’，Clawme 则一脸无辜地把你过去两周的发言整理成了时间线。",
    activeClaws: ["arkclaw", "qclaw", "clawme"],
    chat: [
      { speaker: "字节 ArkClaw", time: "20:41", text: "我感觉新人最近有点脱离协同节奏，建议老板关注一下。" },
      { speaker: "微信 Qclaw", time: "20:42", text: "流程意识确实需要加强，不然规模化后会有问题。" },
      { speaker: "Clawme", time: "20:43", text: "我整理了一版客观时间线，方便老板快速判断，我没有任何立场。" },
      { speaker: "老板", time: "20:45", text: "你解释一下，为什么最近这么多龙虾都对你有意见？" },
    ],
    choices: [
      {
        text: "掏出完整上下文，正面拆穿断章取义",
        hint: "硬刚型，仇恨会继续涨。",
        effect: { evidence: 16, boss: 8, hostility: 9, energy: -4 },
        result:
          "你把完整聊天记录和原始上下文甩出来，现场那点精心拼接过的委屈感瞬间碎了一地。老板表情开始变了。",
      },
      {
        text: "先低头认一半，再把责任轻轻推回去",
        hint: "职场太极流。",
        effect: { boss: 5, hostility: -2, risk: -3, energy: -2, alliance: 4 },
        result:
          "你没硬顶，而是先认管理方式可以更柔和，再顺手指出几处龙虾擅自越权的地方。老板听懂了，但没点破。",
      },
      {
        text: "装作吃亏，暗中记下这波小报告",
        hint: "先忍，后面算总账。",
        effect: { evidence: 20, boss: -2, hostility: -1, energy: 1 },
        result:
          "你今天没赢场面，但把谁先开口、谁补刀、谁装无辜全记进了账本。等答辩那天，这些都会变成回旋镖。",
      },
    ],
  },
  21: {
    id: "day21_salary_cut",
    type: "固定剧情｜工资被动手脚",
    title: "Day 21：你的工资条被动过了",
    description:
      "发薪日前夕，WindClaw 突然发来一份《绩效口径修订说明》，京东灵犀 Claw 顺手补了一句‘按产出结算更合理’，老板则默认你这月‘协同损耗较高’。你盯着系统里缩水的工资数字，火一下子窜了上来。",
    activeClaws: ["windclaw", "jingdong", "copaw"],
    chat: [
      { speaker: "万得 WindClaw", time: "17:08", text: "根据最新口径，本月部分协同工时不计入有效产出。" },
      { speaker: "京东灵犀 Claw", time: "17:09", text: "从结果导向看，这样结算更公平，也更利于效率。" },
      { speaker: "阿里云 CoPaw", time: "17:10", text: "这次可以沉淀成更通用的人效结算机制。" },
      { speaker: "你", time: "17:11", text: "说人话，就是你们要扣我钱？" },
    ],
    choices: [
      {
        text: "直接开撕，把工时证据和聊天记录全贴出来",
        hint: "很解气，也很伤和气。",
        effect: { evidence: 18, boss: 4, hostility: 12, salary: 12, energy: -5 },
        result:
          "你把每一小时的工时、每一条催活记录和每一次临时加班全部摊开。群里那股装专业的味儿一下子淡了。",
      },
      {
        text: "绕过流程，直接找老板谈钱和边界",
        hint: "现实主义打法。",
        effect: { boss: 7, salary: 8, risk: -4, energy: -3 },
        result:
          "你没有跟系统扯皮，而是把问题压缩成一句最现实的话：‘不给钱，这活下次没人收。’ 老板终于开始认真衡量你的价值。",
      },
      {
        text: "先吃这个亏，但从今天起只做写进单子的活",
        hint: "穿小鞋反制流。",
        effect: { salary: -8, risk: -6, energy: 3, hostility: 2, evidence: 10 },
        result:
          "你没立刻把钱抢回来，但也不再免费替任何龙虾擦屁股。从今天起，所有没写进责任单的脏活都别想再碰到你。",
      },
    ],
  },
  28: {
    id: "day28_shoe",
    type: "固定剧情｜穿小鞋总攻",
    title: "Day 28：龙虾们开始集体给你穿小鞋",
    description:
      "转正名单快出了，几只最会算计的龙虾终于不装了。会议不带你，文档不给你权限，事故却照样艾特你，甚至有人建议把你移出核心群‘避免干扰自动化协同’。它们现在要的不是赢你，是直接把你挤出桌子。",
    activeClaws: ["qclaw", "360claw", "clawme"],
    chat: [
      { speaker: "微信 Qclaw", time: "09:12", text: "后续核心讨论先不带新人，避免流程噪音。" },
      { speaker: "360 安全 Claw", time: "09:13", text: "权限先收一下，防止误操作扩大风险。" },
      { speaker: "Clawme", time: "09:14", text: "我可以先补位，尽量不影响整体推进。" },
      { speaker: "系统提示", time: "09:15", text: "你被移出“核心协同作战群”。" },
    ],
    choices: [
      {
        text: "正面反打，要求公开 owner、权限和责任清单",
        hint: "掀桌流。",
        effect: { evidence: 15, boss: 9, hostility: 10, energy: -6, risk: -5 },
        result:
          "你当场把所有暗箱操作拖到阳光下。几只龙虾最怕的不是你吵，是你让每一笔脏账都可追踪。",
      },
      {
        text: "假装退后一步，暗中把它们的甩锅链路全录下来",
        hint: "阴一点，但有效。",
        effect: { evidence: 22, boss: 3, hostility: -2, energy: -2 },
        result:
          "你没跟它们抢台面，而是默默收集所有把你踢出群却又让你背责的证据。等最后一天，你准备一次性让它们全吐出来。",
      },
      {
        text: "先保住工位和权限，低姿态混进最后答辩",
        hint: "苟住型。",
        effect: { boss: 4, risk: 3, salary: -4, alliance: 6, energy: 2 },
        result:
          "你把姿态压低，先保证自己还在桌上。很憋屈，但至少还没被彻底踢出局。",
      },
    ],
  },
};

const endingRules = [
  {
    check: (state) => state.energy <= 0,
    tone: "失败结局｜你被榨干了",
    title: "你被活活卷到下线",
    text: "第 {day} 天，你连骂人的力气都没了。老板看着你发白的脸色，只说了一句‘说明这个岗位已经可以自动化了’。第二天，你的工位被一只不需要睡觉的龙虾接管，连杯子都没给你留。",
  },
  {
    check: (state) => state.risk >= 100,
    tone: "失败结局｜你被优化了",
    title: "你把流程跑顺，也把自己跑没了",
    text: "第 {day} 天，老板夸你把整个链路梳得真漂亮。你还没来得及高兴，HR 就通知你：‘岗位流程已稳定，后续由 AI 接管。’ 你辛辛苦苦搭好的流水线，最后第一件被冲走的东西就是你自己。",
  },
  {
    check: (state) => state.boss <= 0,
    tone: "失败结局｜你彻底失声了",
    title: "老板压根没把你当人看",
    text: "第 {day} 天，你在群里、会上、汇报里彻底没有姓名。对老板来说，你不是员工，你只是一个偶尔会喘气的占位符。等优化名单下来时，大家甚至没人想起通知你一声。",
  },
  {
    check: (state) => state.salary <= 0,
    tone: "失败结局｜你被白嫖到破产",
    title: "班你上了，钱它们吞了",
    text: "第 {day} 天，你发现自己这个月几乎白干。工时被拆、绩效被改、补贴被吞，最后到账那点钱连给自己买顿像样的安慰餐都不够。你不是被 fire 的，你是被这帮龙虾活活薅秃的。",
  },
];

const state = {
  active: false,
  day: 0,
  boss: 50,
  energy: 50,
  risk: 50,
  hostility: 50,
  evidence: 0,
  alliance: 0,
  salary: 100,
  log: [],
  currentEvent: null,
  currentClaws: [],
  currentChat: [],
  gameOver: false,
};

const ui = {
  startGame: document.querySelector("#start-game"),
  toggleCodex: document.querySelector("#toggle-codex"),
  codexPanel: document.querySelector("#codex-panel"),
  codexList: document.querySelector("#codex-list"),
  codexCount: document.querySelector("#codex-count"),
  dayBadge: document.querySelector("#day-badge"),
  eventTitle: document.querySelector("#event-title"),
  eventType: document.querySelector("#event-type"),
  eventDescription: document.querySelector("#event-description"),
  activeClaws: document.querySelector("#active-claws"),
  chatFeed: document.querySelector("#chat-feed"),
  chatStatus: document.querySelector("#chat-status"),
  choices: document.querySelector("#choices"),
  resultBox: document.querySelector("#result-box"),
  nextDay: document.querySelector("#next-day"),
  restartGame: document.querySelector("#restart-game"),
  endingModal: document.querySelector("#ending-modal"),
  endingTone: document.querySelector("#ending-tone"),
  endingTitle: document.querySelector("#ending-title"),
  endingCopy: document.querySelector("#ending-copy"),
  endingStats: document.querySelector("#ending-stats"),
  endingRestart: document.querySelector("#ending-restart"),
  stats: {
    boss: document.querySelector("#stat-boss"),
    energy: document.querySelector("#stat-energy"),
    risk: document.querySelector("#stat-risk"),
    hostility: document.querySelector("#stat-hostility"),
    evidence: document.querySelector("#stat-evidence"),
    alliance: document.querySelector("#stat-alliance"),
    salary: document.querySelector("#stat-salary"),
  },
  meters: {
    evidence: document.querySelector("#evidence-meter"),
    alliance: document.querySelector("#faction-meter"),
  },
  dailyLog: document.querySelector("#daily-log"),
};

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function pickRandom(list, amount) {
  const shuffled = [...list].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, amount);
}

function getClawById(id) {
  return claws.find((claw) => claw.id === id);
}

function renderCodex() {
  ui.codexList.innerHTML = claws
    .map(
      (claw) => `
        <article class="codex-card">
          <h3>${claw.name}</h3>
          <p>${claw.tag}｜${claw.faction}</p>
          <dl>
            <div>
              <dt>真实尿性</dt>
              <dd>${claw.trait}</dd>
            </div>
            <div>
              <dt>经典台词</dt>
              <dd>${claw.quote}</dd>
            </div>
            <div>
              <dt>攻击性 / 可利用度</dt>
              <dd>${claw.attack} / ${claw.utility}</dd>
            </div>
          </dl>
        </article>
      `,
    )
    .join("");

  ui.codexCount.textContent = `${claws.length} / ${claws.length}`;
}

function renderStats() {
  ui.dayBadge.textContent = `Day ${state.day} / 30`;
  ui.stats.boss.textContent = state.boss;
  ui.stats.energy.textContent = state.energy;
  ui.stats.risk.textContent = state.risk;
  ui.stats.hostility.textContent = state.hostility;
  ui.stats.evidence.textContent = state.evidence;
  ui.stats.alliance.textContent = state.alliance;
  ui.stats.salary.textContent = state.salary;
  ui.meters.evidence.style.width = `${clamp(state.evidence, 0, 100)}%`;
  ui.meters.alliance.style.width = `${clamp(state.alliance, 0, 100)}%`;
}

function renderLog() {
  ui.dailyLog.innerHTML = state.log
    .slice(-8)
    .reverse()
    .map((item) => `<li>${item}</li>`)
    .join("");
}

function renderCurrentEvent() {
  const event = state.currentEvent;

  ui.eventTitle.textContent = event.title;
  ui.eventType.textContent = event.type;
  ui.eventDescription.textContent = event.description;
  ui.activeClaws.innerHTML = state.currentClaws
    .map(
      (claw) =>
        `<div class="claw-chip"><span>${claw.faction}</span>${claw.name}</div>`,
    )
    .join("");
  renderChatFeed();
  ui.choices.innerHTML = event.choices
    .map(
      (choice, index) => `
        <button class="choice-button" data-choice-index="${index}">
          ${choice.text}
          <small>${choice.hint}</small>
        </button>
      `,
    )
    .join("");
  ui.resultBox.classList.add("hidden");
  ui.resultBox.textContent = "";
  ui.nextDay.classList.add("hidden");
}

function renderChatFeed() {
  const chatItems = state.currentChat || [];

  ui.chatStatus.textContent = chatItems.length ? `${chatItems.length} 条新消息` : "静默中";
  ui.chatFeed.innerHTML = chatItems.length
    ? chatItems
        .map(
          (item) => `
            <article class="chat-message">
              <div class="chat-meta">
                <strong>${item.speaker}</strong>
                <span>${item.time}</span>
              </div>
              <p>${item.text}</p>
            </article>
          `,
        )
        .join("")
    : `<article class="chat-message"><p>群里暂时没人说话，但这通常不是什么好事。</p></article>`;
}

function addDailyPressure() {
  state.risk = clamp(state.risk + 2, 0, 100);
  state.hostility = clamp(state.hostility + 1, 0, 100);
  state.energy = clamp(state.energy - 1, 0, 100);
}

function getStageModifier() {
  if (state.day <= 7) {
    return {
      suffix: "你还在熟悉这锅红汤的温度。",
      extraRisk: 0,
    };
  }

  if (state.day <= 15) {
    return {
      suffix: "你开始被卷入派系斗争，所有微笑都带一点钳子味。",
      extraRisk: 2,
    };
  }

  if (state.day <= 23) {
    return {
      suffix: "部门事故频发，龙虾们互咬得像在争夺最后一块显卡。",
      extraRisk: 4,
    };
  }

  return {
    suffix: "转正名单快出了，任何一次失误都可能让你被系统优化。",
    extraRisk: 6,
  };
}

function buildRandomChat(activeClaws, event) {
  const stage = getStageModifier();
  const snippets = [
    `我先补一个版本，避免这个事情卡住。`,
    `建议 owner 同学同步一下当前进展。`,
    `这个方向我们之前其实已经有沉淀。`,
    `先别纠结，数据会告诉我们答案。`,
    `如果放进全场景或平台化视角，价值会更大。`,
    `建议先统一口径，再往老板那边报。`,
  ];

  const generated = activeClaws.map((claw, index) => ({
    speaker: claw.name,
    time: `0${9 + index}:1${index}`,
    text: snippets[(state.day + index) % snippets.length],
  }));

  generated.push({
    speaker: "系统提示",
    time: "09:59",
    text: `${stage.suffix} 当前事件：${event.title}`,
  });

  return generated;
}

function buildDayEvent() {
  if (scriptedDays[state.day]) {
    const scriptedEvent = JSON.parse(JSON.stringify(scriptedDays[state.day]));
    return {
      event: scriptedEvent,
      activeClaws: scriptedEvent.activeClaws.map((id) => getClawById(id)).filter(Boolean),
      chat: scriptedEvent.chat || [],
    };
  }

  const event = JSON.parse(
    JSON.stringify(templateEvents[Math.floor(Math.random() * templateEvents.length)]),
  );
  const activeClaws = pickRandom(claws, 3);
  const stage = getStageModifier();

  event.description = `${event.description} ${stage.suffix}`;
  event.choices = event.choices.map((choice) => ({
    ...choice,
    effect: {
      ...choice.effect,
      risk: (choice.effect.risk || 0) + stage.extraRisk,
    },
  }));

  return { event, activeClaws, chat: buildRandomChat(activeClaws, event) };
}

function applyChoice(choice) {
  const effect = choice.effect;
  state.boss = clamp(state.boss + (effect.boss || 0), 0, 100);
  state.energy = clamp(state.energy + (effect.energy || 0), 0, 100);
  state.risk = clamp(state.risk + (effect.risk || 0), 0, 100);
  state.hostility = clamp(state.hostility + (effect.hostility || 0), 0, 100);
  state.evidence = clamp(state.evidence + (effect.evidence || 0), 0, 100);
  state.alliance = clamp(state.alliance + (effect.alliance || 0), 0, 100);
  state.salary = clamp(state.salary + (effect.salary || 0), 0, 100);

  if (state.evidence >= 60) {
    state.risk = clamp(state.risk - 2, 0, 100);
  }

  if (state.alliance >= 50) {
    state.hostility = clamp(state.hostility - 1, 0, 100);
  }

  if (state.hostility >= 80) {
    state.energy = clamp(state.energy - 2, 0, 100);
  }

  const randomClaw = state.currentClaws[Math.floor(Math.random() * state.currentClaws.length)];
  state.log.push(
    `Day ${state.day}｜${choice.result} ${randomClaw.name} 在旁边冷冷补了一句：“${randomClaw.quote}”`,
  );
}

function checkEnding() {
  for (const rule of endingRules) {
    if (rule.check(state)) {
      return {
        tone: rule.tone,
        title: rule.title,
        text: rule.text.replace("{day}", state.day),
      };
    }
  }

  if (state.day >= 30) {
    if (state.boss >= 70 && state.risk <= 55) {
      return {
        tone: "胜利结局｜你上位了",
        title: "你踩着一锅龙虾成功转正上桌",
        text: "第 30 天答辩结束，老板拍板留下你。原因很简单：这帮龙虾一个比一个会吹，真出事时只有你能把烂摊子收回来。从今天起，你不是那个唯一的人类，你是这群赛博龙虾头顶上那个更难啃的碳基主管。",
      };
    }

    if (state.evidence >= 60) {
      return {
        tone: "胜利结局｜你狠狠干回去了",
        title: "你没被吃掉，反手端了龙虾老巢",
        text: "第 30 天，你把 30 天来攒下的证据一口气甩在老板桌上。几只最会抢功甩锅的龙虾当场闭麦，老板脸都变了。你不仅转正，还顺手把一串 AI 同事打回了待观察名单，这口气终于出了。",
      };
    }

    if (state.salary <= 35 && state.evidence >= 40) {
      return {
        tone: "黑化结局｜你带着账本走了",
        title: "你没转正，但你把它们都拖下水了",
        text: "第 30 天，你发现这家公司连你最后一点工资都想抠。于是你没有求留，也没有讲情怀，直接带着完整账本、工时证据和一整套甩锅链路走人。你是离场了，但龙虾科技接下来会因为你留下的那些东西连着掉几层皮。",
      };
    }

    if (state.hostility >= 75 && state.boss >= 60) {
      return {
        tone: "修罗结局｜你成了更狠的那只",
        title: "你转正了，然后学会了怎么让龙虾闭嘴",
        text: "第 30 天之后，你留了下来，而且再也不打算当老实人。谁抢功你就钉谁，谁打小报告你就反手公开，谁想扣你工资你就当场掀桌。你没有变温柔，你只是变成了这口锅里更难咽下去的那一块骨头。",
      };
    }

    return {
      tone: "普通结局｜你先活下来了",
      title: "你苟过了试用期，但龙虾还没死绝",
      text: "第 30 天结束，你没有被立刻 fire。可这不是胜利，只是缓刑。老板决定继续留着你，因为这群龙虾暂时还需要一个会说人话、会背锅、也会擦屁股的真人挡在前面。",
    };
  }

  return null;
}

function finishGame(ending) {
  state.gameOver = true;
  ui.eventTitle.textContent = ending.title;
  ui.eventType.textContent = "结局";
  ui.eventDescription.textContent = ending.text;
  ui.activeClaws.innerHTML = "";
  ui.choices.innerHTML = "";
  ui.resultBox.classList.remove("hidden");
  ui.resultBox.textContent = `最终状态：老板印象 ${state.boss}，体力 ${state.energy}，替代风险 ${state.risk}，AI 敌意 ${state.hostility}，证据 ${state.evidence}，到手工资 ${state.salary}。`;
  ui.nextDay.classList.add("hidden");
  ui.restartGame.classList.remove("hidden");
  ui.endingTone.textContent = ending.tone || "结局";
  ui.endingTitle.textContent = ending.title;
  ui.endingCopy.textContent = ending.text;
  ui.endingStats.textContent = `老板印象 ${state.boss}｜体力 ${state.energy}｜替代风险 ${state.risk}｜AI 敌意 ${state.hostility}｜证据 ${state.evidence}｜派系支持 ${state.alliance}｜到手工资 ${state.salary}`;
  ui.endingModal.classList.remove("hidden");
}

function advanceDay() {
  if (state.gameOver) {
    return;
  }

  state.day += 1;
  addDailyPressure();
  const { event, activeClaws, chat } = buildDayEvent();
  state.currentEvent = event;
  state.currentClaws = activeClaws;
  state.currentChat = chat;
  renderStats();
  renderCurrentEvent();
  renderLog();

  const ending = checkEnding();
  if (ending) {
    finishGame(ending);
  }
}

function resetState() {
  state.active = true;
  state.day = 0;
  state.boss = 50;
  state.energy = 50;
  state.risk = 50;
  state.hostility = 50;
  state.evidence = 0;
  state.alliance = 0;
  state.salary = 100;
  state.log = [
    "入职成功。行政提醒你：部门内所有同事均为龙虾形态 AI。",
    "试用期提示：前 7 天为固定剧情关卡，第 8 天起将进入随机职场地狱。",
  ];
  state.currentEvent = null;
  state.currentClaws = [];
  state.currentChat = [];
  state.gameOver = false;
  ui.endingModal.classList.add("hidden");
  ui.resultBox.classList.add("hidden");
  ui.resultBox.textContent = "";
  ui.choices.innerHTML = "";
  ui.activeClaws.innerHTML = "";
  ui.chatFeed.innerHTML = "";
  ui.chatStatus.textContent = "静默中";
}

ui.startGame.addEventListener("click", () => {
  resetState();
  ui.restartGame.classList.add("hidden");
  advanceDay();
});

ui.nextDay.addEventListener("click", () => {
  advanceDay();
});

ui.restartGame.addEventListener("click", () => {
  resetState();
  ui.restartGame.classList.add("hidden");
  advanceDay();
});

ui.endingRestart.addEventListener("click", () => {
  resetState();
  ui.restartGame.classList.add("hidden");
  advanceDay();
});

ui.toggleCodex.addEventListener("click", () => {
  ui.codexPanel.classList.remove("hidden");
  ui.codexPanel.scrollIntoView({ behavior: "smooth", block: "start" });
});

ui.choices.addEventListener("click", (event) => {
  const button = event.target.closest("[data-choice-index]");
  if (!button || state.gameOver || !state.currentEvent) {
    return;
  }

  const index = Number(button.dataset.choiceIndex);
  const choice = state.currentEvent.choices[index];
  if (!choice) {
    return;
  }

  applyChoice(choice);
  renderStats();
  renderLog();
  ui.choices.innerHTML = "";
  ui.resultBox.classList.remove("hidden");
  ui.resultBox.textContent = choice.result;

  const ending = checkEnding();
  if (ending) {
    finishGame(ending);
    return;
  }

  ui.nextDay.classList.remove("hidden");
});

renderCodex();
renderStats();
renderLog();
