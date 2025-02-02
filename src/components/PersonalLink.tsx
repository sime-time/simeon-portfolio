import { JSX } from 'solid-js';

interface PersonalLinkProps {
  title: string;
  name: string;
  href?: string;
  icon: JSX.Element;
}

export default function PersonalLink(props: PersonalLinkProps) {
  return (
    <a href={props.href} target="_blank" class="flex items-center gap-4  hover:text-yellow-300 transition-all">
      <div class="border border-slate-100/20 rounded-xl p-3">
        {props.icon}
      </div>
      <div class="flex flex-col text-sm">
        <h3 class="uppercase text-xs text-white opacity-60">{props.title}</h3>
        <div>{props.name}</div>
      </div>
    </a>
  );
}
