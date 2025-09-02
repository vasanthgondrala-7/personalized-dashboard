import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ContentItem = {
  id: string
  type: 'news' | 'movie' | 'social'
  title: string
  description: string
  image?: string
}

type FeedState = {
  items: ContentItem[]
}

const initialState: FeedState = {
  items: []
}

const slice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    setFeed(state, action: PayloadAction<ContentItem[]>) {
      state.items = action.payload
    },
    appendFeed(state, action: PayloadAction<ContentItem[]>) {
      state.items = [...state.items, ...action.payload]
    },
    reorderFeed(state, action: PayloadAction<ContentItem[]>) {
      state.items = action.payload
    }
  }
})

export const { setFeed, appendFeed, reorderFeed } = slice.actions
export default slice.reducer
