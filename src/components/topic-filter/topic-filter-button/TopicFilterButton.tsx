import { EyeClosedIcon } from '../../icons/eye-closed-icon/EyeClosedIcon'
import { EyeOpenIcon } from '../../icons/eye-open-icon/EyeOpenIcon'

export function TopicFilterButton({ topic, visible = true, toggle }: { topic: string, visible?: boolean, toggle: (topic: string, visible: boolean) => void }) {
  return <button className="button" onClick={() => toggle(topic, !visible)}>
    {visible && <EyeOpenIcon />}
    {!visible && <EyeClosedIcon />}
    <span>{topic}</span>
  </button>
}