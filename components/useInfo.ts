interface Info {
  name: string
  id: string
}

interface HttpRequest<T> {
  code: number
  msg: string
  data: T[]
}
export function useInfo(): HttpRequest<Info> {
  const res: HttpRequest<Info> = {
    code: 200,
    msg: '成功',
    data: [
      {
        name: 'name',
        id: '6542b6e0-4cd2-4760-b54f-4385f799a5f6'
      },
      {
        name: 'name2',
        id: '4354b78f-3530-4225-8ada-c26119aecf69'
      },
      {
        name: 'name3',
        id: '101cc819-2d55-405b-a465-6ca6fc39c09d'
      }
    ]
  }
  return res
}
