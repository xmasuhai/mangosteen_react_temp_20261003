import p from '../assets/images/welcome4.svg'

export const Welcome4: React.FC = () => {
  return (
    <div text-center b-1 b-red>
      <img src={p} w-129px h-83px b-1 b-red />
      <h2 text-32px mt-48px >
        云备份 <br />
        再也不怕数据丢失
      </h2>
    </div>
  )
}
