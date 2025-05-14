'use client'

import { useRef, useState } from 'react'

export default function BioSection() {
  // 音乐播放器相关
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)

  const handlePlayPause = () => {
    if (!audioRef.current)
      return
    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
    }
    else {
      audioRef.current.play()
      setPlaying(true)
    }
  }

  return (
    <section className="flex flex-col gap-4 text-center px-4">
      {/* 音乐播放器按钮 */}
      <div className="flex justify-center mb-2">
        <audio ref={audioRef} src="/music.mp3" loop />
        <button
          type="button"
          onClick={handlePlayPause}
          className="flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-200 to-indigo-200 dark:from-emerald-900 dark:to-indigo-900 text-indigo-700 dark:text-emerald-200 shadow hover:scale-105 transition"
        >
          {playing
            ? (
                <>
                  {/* 暂停图标 */}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                  暂停音乐
                </>
              )
            : (
                <>
                  {/* 播放图标 */}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <polygon points="5,3 19,12 5,21 5,3" />
                  </svg>
                  播放音乐
                </>
              )}
        </button>
      </div>
      <h1>
        你好呀～我是
        {' '}
        <span className="font-bold text-purple-400">逍遥 ✨</span>
      </h1>
      <p>
        一名沉迷质量保障的软件测试大三学生 | 技术笔记囤积症晚期 | 开源社区潜水员
        <br />
        欢迎来到我的数字小窝，这里存放着我的技术踩坑实录、学习脑洞和偶尔的生活碎片
      </p>
      <p>
        <span className="font-bold text-indigo-400">🛠️ 技术栈</span>
        <br />
        Python自动化测试（pytest+requests框架）
        <br />
        Java Web测试（TestNG+Selenium全家桶）
        <br />
        Postman接口调试达人
        <br />
        <span className="font-bold text-indigo-400">⚙️ 新技能加载中：</span>
        <br />
        Kubernetes+Jenkins持续集成方向
        <br />
        <span className="font-bold text-indigo-400">🧰 常用工具箱：</span>
        <br />
        Jira缺陷管理 | Fiddler抓包分析 | LoadRunner性能测试
      </p>
      <p>
        <span className="font-bold text-indigo-400">📖 学习日常：</span>
        <br />
        LeetCode每日一题 | TesterHome社区交流 | 《Google软件测试之道》精读
      </p>
      <p>
        <span className="font-bold text-indigo-400">📝 博客藏宝图</span>
        <br />
        🔍 测试兵法：自动化测试框架搭建指南 | 接口测试奇技淫巧
        <br />
        💡 编程手札：Python自动化小工具开发实录 | 偶遇的玄学BUG合集
        <br />
        🌱 成长日志：ISTQB考证打怪攻略 | 暑期测试岗生存日记
        <br />
        ☕ 生活碎片：键盘收藏图鉴 | 湖南咖啡地图探索
      </p>
      <p>
        <span className="font-bold text-indigo-400">🚀 近期任务列表</span>
        <br />
        开发中：基于Docker的自动化测试环境部署工具
        <br />
        学习中：深入性能测试领域，探索全链路压测的奥秘
        <br />
        期待中：明年的字节跳动（做梦中）测试开发实习挑战赛
      </p>
      <small className="text-xs md:text-sm">
        🌟 关于这个博客
        <br />
        主题切换彩蛋是来自程序员的浪漫 ❤️（试试双击头像!有惊喜～•̀ ω •́ ）
        <br />
        每篇文章都藏着「逍遥批注」小贴士，Ctrl+F搜索"彩蛋"有惊喜～
        <br />
        路过的小伙伴欢迎留言交换学习资源呀！测试开发路上，让我们做彼此的防呆队友 ( •̀ ω •́ )✧
      </small>
    </section>
  )
}
