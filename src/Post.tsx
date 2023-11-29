interface PostProps {
  title: string
  description?: string
}

export function Post({ title, description }: PostProps) {
  return (
    <>
      <h1>{ title }</h1>
      <h1>{ description }</h1>
    </>
  )
}