export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/home.jpg\",\"heroText\":null,\"actions\":[{\"text\":\"开始阅读 ->\",\"link\":\"/guide/\",\"type\":\"primary\"}],\"features\":[{\"title\":\"up up up\",\"details\":\"越努力越幸运。\"},{\"title\":\"xxing\",\"details\":\"一个有趣的且乐于分享的人。\",\"footer\":\"MIT Licensed | Copyright © 2018-present Evan You\"}]},\"excerpt\":\"\",\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
