import { JSX } from 'solid-js';

interface DevDescriptionProps {
  title: string;
  description: string;
  icon?: JSX.Element;
}

export default function DevDescription(props: DevDescriptionProps) {
  return (
    <div class="border border-slate-100/20 bg-slate-900 rounded-xl px-4 py-6 flex items-center gap-4">
      <div class="text-yellow-300">
        {props.icon}
      </div>
      <div>
        <h3 class="text-xl">{props.title}</h3>
        <p class="text-wrap text-sm opacity-70">{props.description}</p>
      </div>
    </div>
  );
}
