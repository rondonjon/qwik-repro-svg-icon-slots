import type { ClassList } from "@builder.io/qwik";

export type CircleProps = {
	class?: ClassList;
	"q:slot"?: string;
};

export const Circle = ({ class: className, "q:slot": qSlot }: CircleProps) => (
	<svg
		class={className}
		viewBox="0 0 1 1"
		width="1em"
		height="1em"
		q:slot={qSlot}
	>
		<title>circle</title>
		<circle cx={0.5} cy={0.5} r={0.5} fill="currentColor" />
	</svg>
);
