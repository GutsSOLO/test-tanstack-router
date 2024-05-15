import React, { createContext, ReactNode, useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { postsQueryOptions, PostType } from '../queries/postsQuery'

export type DataContextType = {
  posts: PostType[] | undefined
}

export const DataContext = createContext<DataContextType | undefined>(undefined)

export function useDataContext() {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useDataContext must be used within a DataProvider')
  }
  return context
}

export const DataProvider = ({
  children,
}: {
  readonly children: ReactNode
}) => {
  const {data: posts, isFetching, error} = useQuery(postsQueryOptions())

  if (isFetching) {
    return <div>loading...</div>
  }

  if (error) {
    return <div>error {(error as Error).message}</div>
  }

  return (
    <DataContext.Provider value={{ posts }}>
      {children}
    </DataContext.Provider>
  )
}
