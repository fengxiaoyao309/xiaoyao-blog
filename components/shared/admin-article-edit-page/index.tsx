'use client'

import type { Blog, BlogTag, Note, NoteTag } from '@prisma/client'
import { createBlog, updateBlogById } from '@/actions/blogs'
import { createNote, updateNoteById } from '@/actions/notes'
import { Button } from '@/components/ui/button'
import { Combobox } from '@/components/ui/combobox'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { ARTICLE_TITLE_MAX_LENGTH } from '@/config/constant'
import { REGEX } from '@/lib/regex'
import { useModalStore } from '@/store/use-modal-store'
import { zodResolver } from '@hookform/resolvers/zod'
import { File } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import MarkdownEditor from './internal/markdown-editor'

const formSchema = z.object({
  title: z
    .string()
    .min(1, { message: '长度不能少于1个字符' })
    .max(ARTICLE_TITLE_MAX_LENGTH, { message: '标题超出大小限制' }),
  slug: z
    .string()
    .regex(REGEX.SLUG, {
      message: '只允许输入数字、小写字母和中横线',
    })
    .min(1, { message: '长度不能少于1个字符' }),
  isPublished: z.boolean(),
  relatedTagNames: z
    .array(z.string())
    .max(3, { message: '最多只能选择 3 个标签' }),
  content: z.string(),
})

export type UpdateArticleParamsWithBlogId = z.infer<typeof formSchema> & {
  id: number
}

export type UpdateArticleParamsWithNoteId = z.infer<typeof formSchema> & {
  id: number
}

export type CreateArticleParams = z.infer<typeof formSchema>

function getEditPageType(url: string): 'BLOG' | 'NOTE' {
  const type = url.split('/')[2].toUpperCase()
  if (type === 'BLOG' || type === 'NOTE') {
    return type
  }
  throw new Error(`Unexpected page type: ${type}`)
}

// * 表单渲染, markdown 编辑器集成
export default function AdminBlogEditPage({
  article,
  relatedArticleTagNames,
  allTags,
}: {
  article: Blog | Note | null
  relatedArticleTagNames?: string[]
  allTags: BlogTag[] | NoteTag[]
}) {
  const router = useRouter()
  const { setModalOpen } = useModalStore()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: article?.title ?? '',
      slug: article?.slug ?? '',
      isPublished: article?.isPublished ?? false,
      relatedTagNames: relatedArticleTagNames ?? [],
      content: article?.content ?? '',
    },
    mode: 'onBlur',
  })
  const pathname = usePathname()
  const editPageType = getEditPageType(pathname)

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (article?.id) {
        if (editPageType === 'BLOG') {
          await updateBlogById({ ...values, id: article.id })
        }
        else {
          await updateNoteById({ ...values, id: article.id })
        }
      }
      else {
        if (editPageType === 'BLOG') {
          await createBlog(values)
        }
        else {
          await createNote(values)
        }
      }

      toast.success('保存成功')
      router.push(`/admin/${editPageType.toLowerCase()}/edit/${values.slug}`)
    }
    catch (error) {
      if (error instanceof Error) {
        toast.error(`保存失败 ${error.message}`)
      }
      else {
        toast.error(`保存失败`)
      }
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full pb-44"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">标题</FormLabel>
              <FormControl>
                <Input placeholder="请输入标题" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">slug</FormLabel>
              <FormControl>
                <Input placeholder="请输入 slug" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="isPublished"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">是否发布</FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={(checked) => {
                    field.onChange(checked)
                  }}
                >
                </Switch>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-end gap-2">
          <FormField
            control={form.control}
            name="relatedTagNames"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel className="text-lg">标签</FormLabel>
                <FormControl>
                  <Combobox
                    options={
                      allTags.map(el => ({
                        label: el.tagName,
                        value: el.tagName,
                      })) ?? []
                    }
                    multiple
                    clearable
                    selectPlaceholder="请选择标签"
                    value={field.value}
                    onValueChange={val =>
                      form.setValue('relatedTagNames', val, {
                        shouldValidate: true,
                      })}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="button"
            variant="default"
            onClick={() => setModalOpen('createTagModal')}
            className="cursor-pointer"
          >
            新建标签
          </Button>
        </div>

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">内容</FormLabel>
              <FormControl>
                <MarkdownEditor value={field.value} onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          <File />
          保存
        </Button>
      </form>
    </Form>
  )
}
