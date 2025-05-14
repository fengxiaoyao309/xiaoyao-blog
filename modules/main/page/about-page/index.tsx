import HorizontalDividingLine from '@/components/shared/horizontal-dividing-line'
import MaxWidthWrapper from '@/components/shared/max-width-wrapper'
import { ArrowDownIcon } from 'lucide-react'
import * as motion from 'motion/react-client'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: [30, -8, 0], opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
      }}
    >
      <MaxWidthWrapper className="md:text-lg text-center flex items-center justify-center flex-col gap-6 mt-4">
        {/* 个人简介 */}
        <section className="w-full max-w-2xl flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-purple-400 mb-2">🌱 关于我</h2>
          <p>
            我是风逍遥，你也可以叫我逍遥，一个在数学与代码间寻找平衡的普通大学生。
            <br />
            🎓 2022年进入二本院校，专业名字很厉害叫「信息与计算科学」
            <br />
            ✨ 从以为要学做游戏，到被数学题难哭，再到发现测试的乐趣
          </p>
        </section>

        <HorizontalDividingLine fill="#006A71" />

        {/* 我的故事 */}
        <section className="w-full max-w-2xl flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-indigo-400 mb-2">📅 我的故事</h2>
          <div className="text-left md:text-center">
            <b>🏫 2018-2022 | 高中时光</b>
            <br />
            每天穿过县城的梧桐道 🚲
            <br />
            📖 课桌里藏着周杰伦歌词本，晚自习偷偷给MP3充电
            <br />
            🌙 有个总借我数学笔记的女生，后来她成了毕业册里的"回忆"
          </div>
          <div className="text-left md:text-center">
            <b>📚 2022-2023 | 大学初体验</b>
            <br />
            ❗ 发现专业要学大量数学时的表情 →
            {' '}
            <span className="inline-block">🤯</span>
            <br />
            💻 第一次摸到编程课电脑，手抖着输出了「Hello World!」
            <br />
            ☕ 为应付数学作业，创下连喝三杯奶茶的熬夜记录
          </div>
          <div className="text-left md:text-center">
            <b>💡 2023-2025 | 找到新方向</b>
            <br />
            🐛 自学开发总卡在半路：
            <br />
            「购物网站项目」→ 变成永远加载不完的空白页
            <br />
            「音乐播放器」→ 只能播3秒的《晴天》前奏
            <br />
            🎯 直到遇见软件测试，终于找到能完整做出来的事：
            <br />
            ✓ 给别人的记账软件找bug 🕵️
            <br />
            ✓ 学着用工具自动检查网页
          </div>
        </section>

        <HorizontalDividingLine fill="#107B80" />

        {/* 生活碎片 */}
        <section className="w-full max-w-2xl flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-emerald-500 mb-2">🎵 生活碎片</h2>
          <div>
            <b>🎧 音乐</b>
            <br />
            床头挂着周杰伦的海报
            <br />
            洗澡必唱林俊杰的《将故事写成我们》（邻居猫都听过）
          </div>
          <div>
            <b>🎶 竹笛历险记</b>
            <br />
            花298元买的笛子，现在当书桌装饰品
            <br />
            唯一成果：能吹出《小星星》前两个音 🌟
          </div>
        </section>

        <HorizontalDividingLine fill="#30A09F" />

        {/* 现在的我 */}
        <section className="w-full max-w-2xl flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-pink-500 mb-2">🌞 现在的我</h2>
          <div>
            正在：
            <br />
            📝 准备人生第一份实习简历（改到第8版）
            <br />
            🧩 学用测试工具检查网站（像玩找不同游戏）
            <br />
            🎯 偷偷练习面试话术（对着镜子说"我超爱测试"）
          </div>
          <div>
            迷茫时就去：
            <br />
            ☕ 校门口的「猫爪咖啡馆」，看店主养的橘猫打盹
            <br />
            📖 图书馆三楼窗边位，那里能听见操场打球的声音
          </div>
        </section>

        <HorizontalDividingLine fill="#48A6A7" />

        {/* 想对你说 */}
        <section className="w-full max-w-2xl flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-yellow-500 mb-2">💌 想对你说</h2>
          <div>
            如果你也：
            <br />
            🎧 听老歌时会想起某个人
            <br />
            ⌨️ 在代码世界里跌跌撞撞
            <br />
            🌱 正在寻找属于自己的小天地
          </div>
          <div>
            欢迎留言聊聊你的故事~ 这里没有技术大神，只有普通人的成长日记
          </div>
        </section>
      </MaxWidthWrapper>
    </motion.div>
  )
}
