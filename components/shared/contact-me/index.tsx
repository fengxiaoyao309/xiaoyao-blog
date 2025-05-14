import Link from 'next/link'

// 外部联系方式数据
export const ExternalLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/fengxiaoyao309',
  },
  {
    name: 'bilibili',
    url: 'https://space.bilibili.com/610519541?spm_id_from=333.33.0.0',
  },
  {
    name: 'Gmail',
    url: 'yye20454@gmail.com',
  },
] as const

// 友情链接数据
const FriendLinks = [
  {
    name: '_叶鱼',
    url: 'https://github.com/NeilYeTAT/yeyu-blog',
  },
] as const

export default function ContactMe() {
  return (
    <main className="flex items-center justify-center flex-col gap-2 md:gap-4 w-full">
      {/* 联系方式标题及说明 */}
      <h3 className="text-lg font-semibold mb-1">
        联系方式
        <small className="ml-2 text-xs font-normal text-gray-500 dark:text-gray-400">
          有缘人请多多交流～
        </small>
      </h3>
      {/* 外部联系方式按钮组 */}
      <div className="flex gap-4 flex-wrap justify-center">
        {ExternalLinks.map(link => (
          <Link
            className="px-3 py-1 rounded bg-purple-100 dark:bg-emerald-900 text-purple-700 dark:text-emerald-200 hover:bg-purple-200 dark:hover:bg-emerald-700 transition"
            href={link.url}
            key={link.url}
            target="_blank"
          >
            {link.name}
          </Link>
        ))}
      </div>
      {/* 友情链接区域 */}
      <div className="mt-4 w-full flex flex-col items-center">
        <span className="text-sm text-gray-500 dark:text-gray-400 mb-1">友情链接</span>
        <div className="flex gap-4 flex-wrap justify-center">
          {FriendLinks.map(link => (
            <Link
              className="px-2 py-1 rounded bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-200 hover:bg-pink-200 dark:hover:bg-pink-700 transition"
              href={link.url}
              key={link.url}
              target="_blank"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
