type Props = {
  params: Promise<{
    id: string
  }>
}

export default async function Galleryid({ params }: Props) {
    const {id} = await params
  return (
    <div className="flex items-center justify-center h-screen">
      <h1>Gallery id: {id}</h1>
    </div>
  )
}